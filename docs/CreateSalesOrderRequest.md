# CreateSalesOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerId** | **string** |  | [default to undefined]
**orderNumber** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**lines** | [**Array&lt;CreateSalesOrderLineRequest&gt;**](CreateSalesOrderLineRequest.md) |  | [default to undefined]

## Example

```typescript
import { CreateSalesOrderRequest } from '@kuzium/orbit-api-client';

const instance: CreateSalesOrderRequest = {
    customerId,
    orderNumber,
    status,
    discountPercent,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
