# PurchaseApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPurchaseOrder**](#createpurchaseorder) | **POST** /api/v1/accounts/{accountId}/purchase/orders | |
|[**deletePurchaseOrder**](#deletepurchaseorder) | **DELETE** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | |
|[**getPurchaseOrder**](#getpurchaseorder) | **GET** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | |
|[**listPurchaseOrders**](#listpurchaseorders) | **GET** /api/v1/accounts/{accountId}/purchase/orders | |
|[**updatePurchaseOrder**](#updatepurchaseorder) | **PUT** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | |
|[**updatePurchaseOrderStatus**](#updatepurchaseorderstatus) | **PATCH** /api/v1/accounts/{accountId}/purchase/orders/{orderId}/status | |

# **createPurchaseOrder**
> PurchaseOrderResponse createPurchaseOrder(createPurchaseOrderRequest)


### Example

```typescript
import {
    PurchaseApi,
    Configuration,
    CreatePurchaseOrderRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let createPurchaseOrderRequest: CreatePurchaseOrderRequest; //

const { status, data } = await apiInstance.createPurchaseOrder(
    accountId,
    createPurchaseOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPurchaseOrderRequest** | **CreatePurchaseOrderRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePurchaseOrder**
> deletePurchaseOrder()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePurchaseOrder(
    accountId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPurchaseOrder**
> PurchaseOrderResponse getPurchaseOrder()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.getPurchaseOrder(
    accountId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPurchaseOrders**
> PagedResultOfPurchaseOrderResponse listPurchaseOrders()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let search: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let supplierId: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)

const { status, data } = await apiInstance.listPurchaseOrders(
    accountId,
    search,
    status,
    supplierId,
    filter,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **supplierId** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 0|


### Return type

**PagedResultOfPurchaseOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePurchaseOrder**
> PurchaseOrderResponse updatePurchaseOrder(updatePurchaseOrderRequest)


### Example

```typescript
import {
    PurchaseApi,
    Configuration,
    UpdatePurchaseOrderRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let updatePurchaseOrderRequest: UpdatePurchaseOrderRequest; //

const { status, data } = await apiInstance.updatePurchaseOrder(
    accountId,
    orderId,
    updatePurchaseOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePurchaseOrderRequest** | **UpdatePurchaseOrderRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePurchaseOrderStatus**
> PurchaseOrderResponse updatePurchaseOrderStatus(updatePurchaseOrderStatusRequest)


### Example

```typescript
import {
    PurchaseApi,
    Configuration,
    UpdatePurchaseOrderStatusRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let updatePurchaseOrderStatusRequest: UpdatePurchaseOrderStatusRequest; //

const { status, data } = await apiInstance.updatePurchaseOrderStatus(
    accountId,
    orderId,
    updatePurchaseOrderStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePurchaseOrderStatusRequest** | **UpdatePurchaseOrderStatusRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

