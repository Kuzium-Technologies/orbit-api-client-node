# CrmApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomer**](#createcustomer) | **POST** /api/v1/accounts/{accountId}/crm/customers | |
|[**deleteCustomer**](#deletecustomer) | **DELETE** /api/v1/accounts/{accountId}/crm/customers/{customerId} | |
|[**getCustomer**](#getcustomer) | **GET** /api/v1/accounts/{accountId}/crm/customers/{customerId} | |
|[**listCustomers**](#listcustomers) | **GET** /api/v1/accounts/{accountId}/crm/customers | |
|[**updateCustomer**](#updatecustomer) | **PATCH** /api/v1/accounts/{accountId}/crm/customers/{customerId} | |

# **createCustomer**
> CustomerResponse createCustomer(createCustomerRequest)


### Example

```typescript
import {
    CrmApi,
    Configuration,
    CreateCustomerRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new CrmApi(configuration);

let accountId: string; // (default to undefined)
let createCustomerRequest: CreateCustomerRequest; //

const { status, data } = await apiInstance.createCustomer(
    accountId,
    createCustomerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCustomerRequest** | **CreateCustomerRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CustomerResponse**

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

# **deleteCustomer**
> deleteCustomer()


### Example

```typescript
import {
    CrmApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new CrmApi(configuration);

let accountId: string; // (default to undefined)
let customerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCustomer(
    accountId,
    customerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **customerId** | [**string**] |  | defaults to undefined|


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

# **getCustomer**
> CustomerResponse getCustomer()


### Example

```typescript
import {
    CrmApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new CrmApi(configuration);

let accountId: string; // (default to undefined)
let customerId: string; // (default to undefined)

const { status, data } = await apiInstance.getCustomer(
    accountId,
    customerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **customerId** | [**string**] |  | defaults to undefined|


### Return type

**CustomerResponse**

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

# **listCustomers**
> PagedResultOfCustomerResponse listCustomers()


### Example

```typescript
import {
    CrmApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new CrmApi(configuration);

let accountId: string; // (default to undefined)
let status: string; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let sortBy: string; // (optional) (default to 'name')
let sortOrder: string; // (optional) (default to 'asc')

const { status, data } = await apiInstance.listCustomers(
    accountId,
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
| **status** | [**string**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **sortBy** | [**string**] |  | (optional) defaults to 'name'|
| **sortOrder** | [**string**] |  | (optional) defaults to 'asc'|


### Return type

**PagedResultOfCustomerResponse**

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

# **updateCustomer**
> CustomerResponse updateCustomer(updateCustomerRequest)


### Example

```typescript
import {
    CrmApi,
    Configuration,
    UpdateCustomerRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new CrmApi(configuration);

let accountId: string; // (default to undefined)
let customerId: string; // (default to undefined)
let updateCustomerRequest: UpdateCustomerRequest; //

const { status, data } = await apiInstance.updateCustomer(
    accountId,
    customerId,
    updateCustomerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerRequest** | **UpdateCustomerRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **customerId** | [**string**] |  | defaults to undefined|


### Return type

**CustomerResponse**

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

