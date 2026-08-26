# CreatePurchaseOrderLineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **string** |  | [default to undefined]
**productName** | **string** |  | [default to undefined]
**quantity** | **number** |  | [default to undefined]
**unitPrice** | **number** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**discountAmount** | **number** |  | [default to undefined]
**dropShipSalesOrderLineId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreatePurchaseOrderLineRequest } from '@kuzium/orbit-api-client';

const instance: CreatePurchaseOrderLineRequest = {
    productId,
    productName,
    quantity,
    unitPrice,
    discountPercent,
    discountAmount,
    dropShipSalesOrderLineId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
