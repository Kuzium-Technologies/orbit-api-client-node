# CreatePurchaseOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplierId** | **string** |  | [default to undefined]
**purchaseOrderNo** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**notes** | **string** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**lines** | [**Array&lt;CreatePurchaseOrderLineRequest&gt;**](CreatePurchaseOrderLineRequest.md) |  | [default to undefined]
**isDropShip** | **boolean** |  | [optional] [default to false]
**isConsignment** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { CreatePurchaseOrderRequest } from '@kuzium/orbit-api-client';

const instance: CreatePurchaseOrderRequest = {
    supplierId,
    purchaseOrderNo,
    status,
    notes,
    discountPercent,
    lines,
    isDropShip,
    isConsignment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
