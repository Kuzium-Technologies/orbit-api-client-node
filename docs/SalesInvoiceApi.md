# SalesInvoiceApi

All URIs are relative to *https://orbit.kuzium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSalesInvoice**](#getsalesinvoice) | **GET** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId} | |
|[**listSalesInvoicePayments**](#listsalesinvoicepayments) | **GET** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId}/payments | |
|[**listSalesInvoices**](#listsalesinvoices) | **GET** /api/v1/accounts/{accountId}/sales/invoices | |
|[**recordSalesInvoicePayment**](#recordsalesinvoicepayment) | **POST** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId}/payments | |

# **getSalesInvoice**
> SalesInvoiceDetailDto getSalesInvoice()


### Example

```typescript
import {
    SalesInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getSalesInvoice(
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

**SalesInvoiceDetailDto**

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

# **listSalesInvoicePayments**
> Array<SalesInvoicePaymentDto> listSalesInvoicePayments()


### Example

```typescript
import {
    SalesInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.listSalesInvoicePayments(
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

**Array<SalesInvoicePaymentDto>**

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

# **listSalesInvoices**
> PagedResultOfSalesInvoiceDto listSalesInvoices()


### Example

```typescript
import {
    SalesInvoiceApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let customerId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 0)
let sortBy: string; // (optional) (default to 'invoicedate')
let sortOrder: string; // (optional) (default to 'desc')

const { status, data } = await apiInstance.listSalesInvoices(
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
| **sortBy** | [**string**] |  | (optional) defaults to 'invoicedate'|
| **sortOrder** | [**string**] |  | (optional) defaults to 'desc'|


### Return type

**PagedResultOfSalesInvoiceDto**

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

# **recordSalesInvoicePayment**
> SalesInvoicePaymentDto recordSalesInvoicePayment(recordInvoicePaymentRequest)


### Example

```typescript
import {
    SalesInvoiceApi,
    Configuration,
    RecordInvoicePaymentRequest
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new SalesInvoiceApi(configuration);

let accountId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)
let recordInvoicePaymentRequest: RecordInvoicePaymentRequest; //

const { status, data } = await apiInstance.recordSalesInvoicePayment(
    accountId,
    invoiceId,
    recordInvoicePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordInvoicePaymentRequest** | **RecordInvoicePaymentRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**SalesInvoicePaymentDto**

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

