# SalesInvoiceDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**invoiceNumber** | **string** |  | [optional] [default to undefined]
**salesOrderId** | **string** |  | [optional] [default to undefined]
**orderNumber** | **string** |  | [optional] [default to undefined]
**customerId** | **string** |  | [optional] [default to undefined]
**customerName** | **string** |  | [optional] [default to undefined]
**invoiceDate** | **string** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**discountPercent** | **number** |  | [optional] [default to undefined]
**amountPaid** | **number** |  | [optional] [default to undefined]
**amountDue** | **number** |  | [optional] [default to undefined]
**payments** | [**Array&lt;SalesInvoicePaymentDto&gt;**](SalesInvoicePaymentDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SalesInvoiceDetailDto } from '@kuzium/orbit-api-client';

const instance: SalesInvoiceDetailDto = {
    id,
    invoiceNumber,
    salesOrderId,
    orderNumber,
    customerId,
    customerName,
    invoiceDate,
    dueDate,
    status,
    totalAmount,
    discountPercent,
    amountPaid,
    amountDue,
    payments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
