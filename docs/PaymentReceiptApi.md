# PaymentReceiptApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPaymentReceipt**](#createpaymentreceipt) | **POST** /api/v1/accounts/{accountId}/payment-receipts | |
|[**getPaymentReceipt**](#getpaymentreceipt) | **GET** /api/v1/accounts/{accountId}/payment-receipts/{id} | |
|[**getPaymentReceiptsSummary**](#getpaymentreceiptssummary) | **GET** /api/v1/accounts/{accountId}/payment-receipts/summary | |
|[**listPaymentReceipts**](#listpaymentreceipts) | **GET** /api/v1/accounts/{accountId}/payment-receipts | |
|[**voidPaymentReceipt**](#voidpaymentreceipt) | **POST** /api/v1/accounts/{accountId}/payment-receipts/{id}/void | |

# **createPaymentReceipt**
> PaymentReceiptResponse createPaymentReceipt(createPaymentReceiptRequest)


### Example

```typescript
import {
    PaymentReceiptApi,
    Configuration,
    CreatePaymentReceiptRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentReceiptApi(configuration);

let accountId: string; // (default to undefined)
let createPaymentReceiptRequest: CreatePaymentReceiptRequest; //

const { status, data } = await apiInstance.createPaymentReceipt(
    accountId,
    createPaymentReceiptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentReceiptRequest** | **CreatePaymentReceiptRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**PaymentReceiptResponse**

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

# **getPaymentReceipt**
> PaymentReceiptDetailResponse getPaymentReceipt()


### Example

```typescript
import {
    PaymentReceiptApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentReceiptApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.getPaymentReceipt(
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

**PaymentReceiptDetailResponse**

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

# **getPaymentReceiptsSummary**
> PaymentReceiptSummaryResponse getPaymentReceiptsSummary()


### Example

```typescript
import {
    PaymentReceiptApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentReceiptApi(configuration);

let accountId: string; // (default to undefined)
let search: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentReceiptsSummary(
    accountId,
    search,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaymentReceiptSummaryResponse**

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

# **listPaymentReceipts**
> PagedResultOfPaymentReceiptResponse listPaymentReceipts()


### Example

```typescript
import {
    PaymentReceiptApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentReceiptApi(configuration);

let accountId: string; // (default to undefined)
let search: string; // (optional) (default to undefined)
let type: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)
let sortBy: string; // (optional) (default to 'postingdate')
let sortOrder: string; // (optional) (default to 'desc')

const { status, data } = await apiInstance.listPaymentReceipts(
    accountId,
    search,
    type,
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
| **search** | [**string**] |  | (optional) defaults to undefined|
| **type** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 0|
| **sortBy** | [**string**] |  | (optional) defaults to 'postingdate'|
| **sortOrder** | [**string**] |  | (optional) defaults to 'desc'|


### Return type

**PagedResultOfPaymentReceiptResponse**

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

# **voidPaymentReceipt**
> PaymentReceiptResponse voidPaymentReceipt(voidPaymentReceiptRequest)


### Example

```typescript
import {
    PaymentReceiptApi,
    Configuration,
    VoidPaymentReceiptRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PaymentReceiptApi(configuration);

let accountId: string; // (default to undefined)
let id: string; // (default to undefined)
let voidPaymentReceiptRequest: VoidPaymentReceiptRequest; //

const { status, data } = await apiInstance.voidPaymentReceipt(
    accountId,
    id,
    voidPaymentReceiptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voidPaymentReceiptRequest** | **VoidPaymentReceiptRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentReceiptResponse**

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

