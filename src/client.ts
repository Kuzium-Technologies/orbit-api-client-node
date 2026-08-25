import { Configuration } from "../configuration";
import { CrmApi, InventoryApi, MeApi, SalesApi } from "../api";

export interface OrbitClientOptions {
  /** Create one under Settings > API Keys in your Orbit account. */
  apiKey: string;
  /** Defaults to the hosted Orbit API. Override for self-hosted/on-prem deployments. */
  basePath?: string;
}

type OmitFirstArg<F> = F extends (first: any, ...rest: infer R) => infer Ret ? (...args: R) => Ret : F;

/** Every generated method takes `accountId` as its first argument - this drops it from the type. */
type AccountScoped<T> = { [K in keyof T]: OmitFirstArg<T[K]> };

/**
 * Wraps a generated Api instance so callers never pass accountId themselves - every method call
 * is intercepted, resolves the account once via GET /api/v1/me (the account tied to the API key
 * itself - see MeController on the backend), and forwards the call with accountId prepended.
 * A Proxy rather than one hand-written pass-through method per endpoint so a newly [PublicApi]-
 * tagged endpoint is covered automatically on the next SDK regeneration, with nothing to remember
 * to update here.
 */
function accountScoped<T extends object>(api: T, resolveAccountId: () => Promise<string>): AccountScoped<T> {
  return new Proxy(api, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== "function") {
        return value;
      }
      return async (...args: unknown[]) => {
        const accountId = await resolveAccountId();
        return (value as (...a: unknown[]) => unknown).apply(target, [accountId, ...args]);
      };
    },
  }) as AccountScoped<T>;
}

/**
 * Entry point most integrators want: `new OrbitClient({ apiKey }).sales.listSalesOrders()` - no
 * accountId anywhere, since an API key only ever belongs to one account and the server already
 * enforces that (see SameAccountAuthorizationHandler on the backend) - requiring callers to also
 * know and pass it separately was pure redundancy.
 */
export class OrbitClient {
  readonly sales: AccountScoped<SalesApi>;
  readonly crm: AccountScoped<CrmApi>;
  readonly inventory: AccountScoped<InventoryApi>;

  private readonly meApi: MeApi;
  private accountIdPromise?: Promise<string>;

  constructor(options: OrbitClientOptions) {
    const configuration = new Configuration({
      apiKey: options.apiKey,
      basePath: options.basePath ?? "https://api.orbit.kuzium.com",
    });

    this.meApi = new MeApi(configuration);
    const resolveAccountId = () => this.getAccountId();

    this.sales = accountScoped(new SalesApi(configuration), resolveAccountId);
    this.crm = accountScoped(new CrmApi(configuration), resolveAccountId);
    this.inventory = accountScoped(new InventoryApi(configuration), resolveAccountId);
  }

  /** Resolved once per client instance (not once per call) and cached for the client's lifetime - an API key's account never changes. */
  private getAccountId(): Promise<string> {
    if (!this.accountIdPromise) {
      this.accountIdPromise = this.meApi.getCurrentContext().then((response) => response.data.accountId);
    }
    return this.accountIdPromise;
  }
}
