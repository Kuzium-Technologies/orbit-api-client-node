## @kuzium/orbit-api-client@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @kuzium/orbit-api-client@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:5221*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CrmApi* | [**createCustomer**](docs/CrmApi.md#createcustomer) | **POST** /api/v1/accounts/{accountId}/crm/customers | 
*CrmApi* | [**deleteCustomer**](docs/CrmApi.md#deletecustomer) | **DELETE** /api/v1/accounts/{accountId}/crm/customers/{customerId} | 
*CrmApi* | [**getCustomer**](docs/CrmApi.md#getcustomer) | **GET** /api/v1/accounts/{accountId}/crm/customers/{customerId} | 
*CrmApi* | [**listCustomers**](docs/CrmApi.md#listcustomers) | **GET** /api/v1/accounts/{accountId}/crm/customers | 
*CrmApi* | [**updateCustomer**](docs/CrmApi.md#updatecustomer) | **PATCH** /api/v1/accounts/{accountId}/crm/customers/{customerId} | 
*InventoryApi* | [**getInventoryDashboard**](docs/InventoryApi.md#getinventorydashboard) | **GET** /api/v1/accounts/{accountId}/inventory/dashboard | 
*InventoryApi* | [**getInventoryItem**](docs/InventoryApi.md#getinventoryitem) | **GET** /api/v1/accounts/{accountId}/inventory/items/{id} | 
*InventoryApi* | [**listInventoryItems**](docs/InventoryApi.md#listinventoryitems) | **GET** /api/v1/accounts/{accountId}/inventory/items | 
*MeApi* | [**getCurrentContext**](docs/MeApi.md#getcurrentcontext) | **GET** /api/v1/me | 
*SalesApi* | [**createSalesOrder**](docs/SalesApi.md#createsalesorder) | **POST** /api/v1/accounts/{accountId}/sales/orders | 
*SalesApi* | [**deleteSalesOrder**](docs/SalesApi.md#deletesalesorder) | **DELETE** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**getSalesOrder**](docs/SalesApi.md#getsalesorder) | **GET** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**listSalesOrders**](docs/SalesApi.md#listsalesorders) | **GET** /api/v1/accounts/{accountId}/sales/orders | 
*SalesApi* | [**updateSalesOrder**](docs/SalesApi.md#updatesalesorder) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**updateSalesOrderStatus**](docs/SalesApi.md#updatesalesorderstatus) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId}/status | 


### Documentation For Models

 - [CreateCustomerRequest](docs/CreateCustomerRequest.md)
 - [CreateSalesOrderLineRequest](docs/CreateSalesOrderLineRequest.md)
 - [CreateSalesOrderRequest](docs/CreateSalesOrderRequest.md)
 - [CustomerResponse](docs/CustomerResponse.md)
 - [InventoryDashboardStats](docs/InventoryDashboardStats.md)
 - [InventoryItemResponse](docs/InventoryItemResponse.md)
 - [MeResponse](docs/MeResponse.md)
 - [PagedResultOfCustomerResponse](docs/PagedResultOfCustomerResponse.md)
 - [PagedResultOfSalesOrderDto](docs/PagedResultOfSalesOrderDto.md)
 - [SalesOrder](docs/SalesOrder.md)
 - [SalesOrderDetailDto](docs/SalesOrderDetailDto.md)
 - [SalesOrderDto](docs/SalesOrderDto.md)
 - [SalesOrderLine](docs/SalesOrderLine.md)
 - [SalesOrderLineDto](docs/SalesOrderLineDto.md)
 - [UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [UpdateOrderStatusRequest](docs/UpdateOrderStatusRequest.md)
 - [UpdateSalesOrderRequest](docs/UpdateSalesOrderRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKey"></a>
### ApiKey

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

