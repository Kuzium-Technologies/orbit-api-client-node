# MeApi

All URIs are relative to *http://localhost:5221*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCurrentContext**](#getcurrentcontext) | **GET** /api/v1/me | |

# **getCurrentContext**
> MeResponse getCurrentContext()


### Example

```typescript
import {
    MeApi,
    Configuration
} from '@kuzium/orbit-api-client';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.getCurrentContext();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MeResponse**

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

