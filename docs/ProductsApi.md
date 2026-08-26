# ProductsApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProduct**](#createproduct) | **POST** /api/v1/accounts/{accountId}/products | |
|[**deleteProduct**](#deleteproduct) | **DELETE** /api/v1/accounts/{accountId}/products/{id} | |
|[**getProduct**](#getproduct) | **GET** /api/v1/accounts/{accountId}/products/{id} | |
|[**listProducts**](#listproducts) | **GET** /api/v1/accounts/{accountId}/products | |
|[**updateProduct**](#updateproduct) | **PUT** /api/v1/accounts/{accountId}/products/{id} | |

# **createProduct**
> ProductResponse createProduct(createProductRequest)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    CreateProductRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let accountId: string; // (default to undefined)
let createProductRequest: CreateProductRequest; //

const { status, data } = await apiInstance.createProduct(
    accountId,
    createProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductRequest** | **CreateProductRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**ProductResponse**

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

# **deleteProduct**
> deleteProduct()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteProduct(
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

# **getProduct**
> ProductResponse getProduct()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.getProduct(
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

**ProductResponse**

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

# **listProducts**
> PagedResultOfProductResponse listProducts()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let accountId: string; // (default to undefined)
let search: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)
let sortBy: string; // (optional) (default to 'name')
let sortOrder: string; // (optional) (default to 'asc')

const { status, data } = await apiInstance.listProducts(
    accountId,
    search,
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
| **search** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 0|
| **sortBy** | [**string**] |  | (optional) defaults to 'name'|
| **sortOrder** | [**string**] |  | (optional) defaults to 'asc'|


### Return type

**PagedResultOfProductResponse**

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

# **updateProduct**
> updateProduct(updateProductRequest)


### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdateProductRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)
let updateProductRequest: UpdateProductRequest; //

const { status, data } = await apiInstance.updateProduct(
    accountId,
    id,
    updateProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductRequest** | **UpdateProductRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


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

