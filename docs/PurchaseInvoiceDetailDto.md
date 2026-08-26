# PurchaseInvoiceDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**invoiceNumber** | **string** |  | [optional] [default to undefined]
**purchaseOrderId** | **string** |  | [optional] [default to undefined]
**purchaseOrderNo** | **string** |  | [optional] [default to undefined]
**supplierId** | **string** |  | [optional] [default to undefined]
**supplierName** | **string** |  | [optional] [default to undefined]
**invoiceDate** | **string** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**amountPaid** | **number** |  | [optional] [default to undefined]
**amountDue** | **number** |  | [optional] [default to undefined]
**payments** | [**Array&lt;PurchaseInvoicePaymentDto&gt;**](PurchaseInvoicePaymentDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PurchaseInvoiceDetailDto } from '@kuzium/orbit-api-client';

const instance: PurchaseInvoiceDetailDto = {
    id,
    invoiceNumber,
    purchaseOrderId,
    purchaseOrderNo,
    supplierId,
    supplierName,
    invoiceDate,
    dueDate,
    status,
    totalAmount,
    amountPaid,
    amountDue,
    payments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
