# PurchaseInvoiceApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPurchaseInvoice**](#getpurchaseinvoice) | **GET** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId} | |
|[**listPurchaseInvoicePayments**](#listpurchaseinvoicepayments) | **GET** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId}/payments | |
|[**listPurchaseInvoices**](#listpurchaseinvoices) | **GET** /api/v1/accounts/{accountId}/purchase/invoices | |
|[**recordPurchaseInvoicePayment**](#recordpurchaseinvoicepayment) | **POST** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId}/payments | |

# **getPurchaseInvoice**
> PurchaseInvoiceDetailDto getPurchaseInvoice()


### Example

```typescript
import {
    PurchaseInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getPurchaseInvoice(
    accountId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseInvoiceDetailDto**

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

# **listPurchaseInvoicePayments**
> Array<PurchaseInvoicePaymentDto> listPurchaseInvoicePayments()


### Example

```typescript
import {
    PurchaseInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.listPurchaseInvoicePayments(
    accountId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**Array<PurchaseInvoicePaymentDto>**

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

# **listPurchaseInvoices**
> PagedResultOfPurchaseInvoiceDto listPurchaseInvoices()


### Example

```typescript
import {
    PurchaseInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let search: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)

const { status, data } = await apiInstance.listPurchaseInvoices(
    accountId,
    search,
    status,
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
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 0|


### Return type

**PagedResultOfPurchaseInvoiceDto**

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

# **recordPurchaseInvoicePayment**
> PurchaseInvoicePaymentDto recordPurchaseInvoicePayment(recordPurchaseInvoicePaymentRequest)


### Example

```typescript
import {
    PurchaseInvoiceApi,
    Configuration,
    RecordPurchaseInvoicePaymentRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new PurchaseInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)
let recordPurchaseInvoicePaymentRequest: RecordPurchaseInvoicePaymentRequest; //

const { status, data } = await apiInstance.recordPurchaseInvoicePayment(
    accountId,
    invoiceId,
    recordPurchaseInvoicePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordPurchaseInvoicePaymentRequest** | **RecordPurchaseInvoicePaymentRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseInvoicePaymentDto**

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

