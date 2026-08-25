# SalesApi

All URIs are relative to *http://localhost:5221*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSalesOrder**](#createsalesorder) | **POST** /api/v1/accounts/{accountId}/sales/orders | |
|[**deleteSalesOrder**](#deletesalesorder) | **DELETE** /api/v1/accounts/{accountId}/sales/orders/{orderId} | |
|[**getSalesOrder**](#getsalesorder) | **GET** /api/v1/accounts/{accountId}/sales/orders/{orderId} | |
|[**listSalesOrders**](#listsalesorders) | **GET** /api/v1/accounts/{accountId}/sales/orders | |
|[**updateSalesOrder**](#updatesalesorder) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId} | |
|[**updateSalesOrderStatus**](#updatesalesorderstatus) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId}/status | |

# **createSalesOrder**
> SalesOrder createSalesOrder(createSalesOrderRequest)


### Example

```typescript
import {
    SalesApi,
    Configuration,
    CreateSalesOrderRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let createSalesOrderRequest: CreateSalesOrderRequest; //

const { status, data } = await apiInstance.createSalesOrder(
    accountId,
    createSalesOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSalesOrderRequest** | **CreateSalesOrderRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**SalesOrder**

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

# **deleteSalesOrder**
> deleteSalesOrder()


### Example

```typescript
import {
    SalesApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSalesOrder(
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

# **getSalesOrder**
> SalesOrderDetailDto getSalesOrder()


### Example

```typescript
import {
    SalesApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.getSalesOrder(
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

**SalesOrderDetailDto**

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

# **listSalesOrders**
> PagedResultOfSalesOrderDto listSalesOrders()


### Example

```typescript
import {
    SalesApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let customerId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)
let sortBy: string; // (optional) (default to 'orderdate')
let sortOrder: string; // (optional) (default to 'desc')

const { status, data } = await apiInstance.listSalesOrders(
    accountId,
    customerId,
    status,
    search,
    filter,
    page,
    pageSize,
    sortBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **customerId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 0|
| **sortBy** | [**string**] |  | (optional) defaults to 'orderdate'|
| **sortOrder** | [**string**] |  | (optional) defaults to 'desc'|


### Return type

**PagedResultOfSalesOrderDto**

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

# **updateSalesOrder**
> SalesOrder updateSalesOrder(updateSalesOrderRequest)


### Example

```typescript
import {
    SalesApi,
    Configuration,
    UpdateSalesOrderRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let updateSalesOrderRequest: UpdateSalesOrderRequest; //

const { status, data } = await apiInstance.updateSalesOrder(
    accountId,
    orderId,
    updateSalesOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSalesOrderRequest** | **UpdateSalesOrderRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**SalesOrder**

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

# **updateSalesOrderStatus**
> updateSalesOrderStatus(updateOrderStatusRequest)


### Example

```typescript
import {
    SalesApi,
    Configuration,
    UpdateOrderStatusRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesApi(configuration);

let accountId: string; // (default to undefined)
let orderId: string; // (default to undefined)
let updateOrderStatusRequest: UpdateOrderStatusRequest; //

const { status, data } = await apiInstance.updateSalesOrderStatus(
    accountId,
    orderId,
    updateOrderStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusRequest** | **UpdateOrderStatusRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

