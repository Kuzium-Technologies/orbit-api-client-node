# PurchaseOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**accountId** | **string** |  | [default to undefined]
**supplierId** | **string** |  | [default to undefined]
**supplierName** | **string** |  | [default to undefined]
**purchaseOrderNo** | **string** |  | [default to undefined]
**orderDate** | **string** |  | [default to undefined]
**totalAmount** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**notes** | **string** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**lines** | [**Array&lt;PurchaseOrderLineResponse&gt;**](PurchaseOrderLineResponse.md) |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**invoiceId** | **string** |  | [default to undefined]
**invoiceNumber** | **string** |  | [default to undefined]
**invoiceStatus** | **string** |  | [default to undefined]
**invoiceAmountDue** | **number** |  | [default to undefined]
**isDropShip** | **boolean** |  | [optional] [default to false]
**isConsignment** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { PurchaseOrderResponse } from '@kuzium/orbit-api-client';

const instance: PurchaseOrderResponse = {
    id,
    accountId,
    supplierId,
    supplierName,
    purchaseOrderNo,
    orderDate,
    totalAmount,
    status,
    notes,
    discountPercent,
    lines,
    createdAt,
    updatedAt,
    invoiceId,
    invoiceNumber,
    invoiceStatus,
    invoiceAmountDue,
    isDropShip,
    isConsignment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
