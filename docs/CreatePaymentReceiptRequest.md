# CreatePaymentReceiptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voucherType** | **string** |  | [default to undefined]
**postingDate** | **string** |  | [default to undefined]
**externalReferenceNo** | **string** |  | [default to undefined]
**debitAccountId** | **string** |  | [default to undefined]
**creditAccountId** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**isTaxInclusive** | **boolean** |  | [default to undefined]
**taxRateId** | **string** |  | [default to undefined]
**taxAccountId** | **string** |  | [default to undefined]
**currencyCode** | **string** |  | [default to undefined]
**foreignAmount** | **number** |  | [default to undefined]
**exchangeRate** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]

## Example

```typescript
import { CreatePaymentReceiptRequest } from '@kuzium/orbit-api-client';

const instance: CreatePaymentReceiptRequest = {
    voucherType,
    postingDate,
    externalReferenceNo,
    debitAccountId,
    creditAccountId,
    amount,
    isTaxInclusive,
    taxRateId,
    taxAccountId,
    currencyCode,
    foreignAmount,
    exchangeRate,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
