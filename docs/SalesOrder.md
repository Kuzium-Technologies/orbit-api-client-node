# SalesOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** |  | [optional] [default to undefined]
**customerId** | **string** |  | [optional] [default to undefined]
**orderNumber** | **string** |  | [optional] [default to undefined]
**orderDate** | **string** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**discountPercent** | **number** |  | [optional] [default to undefined]
**lines** | [**Array&lt;SalesOrderLine&gt;**](SalesOrderLine.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SalesOrder } from '@kuzium/orbit-api-client';

const instance: SalesOrder = {
    accountId,
    customerId,
    orderNumber,
    orderDate,
    dueDate,
    status,
    totalAmount,
    discountPercent,
    lines,
    id,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
