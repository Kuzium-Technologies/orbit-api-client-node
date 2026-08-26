# PurchaseOrderLineResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**purchaseOrderId** | **string** |  | [default to undefined]
**productId** | **string** |  | [default to undefined]
**productName** | **string** |  | [default to undefined]
**quantity** | **number** |  | [default to undefined]
**unitPrice** | **number** |  | [default to undefined]
**lineTotal** | **number** |  | [default to undefined]
**quantityReceived** | **number** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**discountAmount** | **number** |  | [default to undefined]
**dropShipSalesOrderLineId** | **string** |  | [optional] [default to undefined]
**quantitySettled** | **number** |  | [optional] [default to 0]
**quantityReturned** | **number** |  | [optional] [default to 0]

## Example

```typescript
import { PurchaseOrderLineResponse } from '@kuzium/orbit-api-client';

const instance: PurchaseOrderLineResponse = {
    id,
    purchaseOrderId,
    productId,
    productName,
    quantity,
    unitPrice,
    lineTotal,
    quantityReceived,
    discountPercent,
    discountAmount,
    dropShipSalesOrderLineId,
    quantitySettled,
    quantityReturned,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
