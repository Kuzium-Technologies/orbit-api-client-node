// Run with: npx tsx examples/create-sales-order.ts
// (requires ORBIT_API_KEY and ORBIT_CUSTOMER_ID in the environment)
import { randomUUID } from "crypto";
import { OrbitClient } from "../src/client";

const orbit = new OrbitClient({
  apiKey: process.env.ORBIT_API_KEY!,
  basePath: process.env.ORBIT_BASE_PATH ?? "http://localhost:5221",
});

async function main() {
  // No accountId anywhere - it's resolved once from the API key itself (see src/client.ts).
  const customers = await orbit.crm.listCustomers(undefined, undefined, undefined, 1, 20);
  console.log(`Found ${customers.data.totalCount} customer(s) on the account.`);

  const order = await orbit.sales.createSalesOrder(
    {
      customerId: process.env.ORBIT_CUSTOMER_ID!,
      orderNumber: null, // auto-allocated from the account's number series when omitted
      status: "Draft",
      discountPercent: null,
      lines: [],
    },
    {
      // Required on every mutating call - see the Idempotency-Key docs in the main README.
      // A fixed UUID per logical operation (not a fresh one per attempt) is what makes a retry
      // safe: the same key replays the first attempt's result instead of creating a duplicate.
      headers: { "Idempotency-Key": randomUUID() },
    },
  );

  console.log("Created sales order:", order.data);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
