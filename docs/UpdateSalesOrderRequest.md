# UpdateSalesOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerId** | **string** |  | [default to undefined]
**discountPercent** | **number** |  | [default to undefined]
**lines** | [**Array&lt;CreateSalesOrderLineRequest&gt;**](CreateSalesOrderLineRequest.md) |  | [default to undefined]

## Example

```typescript
import { UpdateSalesOrderRequest } from '@kuzium/orbit-api-client';

const instance: UpdateSalesOrderRequest = {
    customerId,
    discountPercent,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
