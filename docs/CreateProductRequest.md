# CreateProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**productType** | **number** |  | [optional] [default to undefined]
**categoryId** | **string** |  | [optional] [default to undefined]
**unitOfMeasureId** | **string** |  | [default to undefined]
**costPrice** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [default to undefined]
**taxRate** | **number** |  | [optional] [default to undefined]
**taxRateId** | **string** |  | [optional] [default to undefined]
**reorderLevel** | **number** |  | [optional] [default to undefined]
**minStockLevel** | **number** |  | [optional] [default to undefined]
**maxStockLevel** | **number** |  | [optional] [default to undefined]
**tracksLot** | **boolean** |  | [optional] [default to undefined]
**tracksSerial** | **boolean** |  | [optional] [default to undefined]
**costingMethod** | **number** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**displayOrder** | **number** |  | [optional] [default to undefined]
**parentProductId** | **string** |  | [optional] [default to undefined]
**variantAttributes** | **string** |  | [optional] [default to undefined]
**initialQuantity** | **number** |  | [optional] [default to undefined]
**inventoryReason** | **string** |  | [optional] [default to undefined]
**warehouseId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateProductRequest } from '@kuzium/orbit-api-client';

const instance: CreateProductRequest = {
    sku,
    name,
    description,
    barcode,
    productType,
    categoryId,
    unitOfMeasureId,
    costPrice,
    unitPrice,
    taxRate,
    taxRateId,
    reorderLevel,
    minStockLevel,
    maxStockLevel,
    tracksLot,
    tracksSerial,
    costingMethod,
    imageUrl,
    isActive,
    displayOrder,
    parentProductId,
    variantAttributes,
    initialQuantity,
    inventoryReason,
    warehouseId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
