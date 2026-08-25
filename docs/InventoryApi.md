# InventoryApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getInventoryDashboard**](#getinventorydashboard) | **GET** /api/v1/accounts/{accountId}/inventory/dashboard | |
|[**getInventoryItem**](#getinventoryitem) | **GET** /api/v1/accounts/{accountId}/inventory/items/{id} | |
|[**listInventoryItems**](#listinventoryitems) | **GET** /api/v1/accounts/{accountId}/inventory/items | |

# **getInventoryDashboard**
> InventoryDashboardStats getInventoryDashboard()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getInventoryDashboard(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**InventoryDashboardStats**

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

# **getInventoryItem**
> InventoryItemResponse getInventoryItem()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.getInventoryItem(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**InventoryItemResponse**

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

# **listInventoryItems**
> Array<InventoryItemResponse> listInventoryItems()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.listInventoryItems(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**Array<InventoryItemResponse>**

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

