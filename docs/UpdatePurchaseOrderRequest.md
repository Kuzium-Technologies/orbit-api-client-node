# UpdatePurchaseOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplierId** | **string** |  | [default to undefined]
**notes** | **string** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**lines** | [**Array&lt;CreatePurchaseOrderLineRequest&gt;**](CreatePurchaseOrderLineRequest.md) |  | [default to undefined]
**isDropShip** | **boolean** |  | [optional] [default to false]
**isConsignment** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { UpdatePurchaseOrderRequest } from '@kuzium/orbit-api-client';

const instance: UpdatePurchaseOrderRequest = {
    supplierId,
    notes,
    discountPercent,
    lines,
    isDropShip,
    isConsignment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
