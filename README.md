## @kuzium/orbit-api-client@0.2.0

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
npm install @kuzium/orbit-api-client@0.2.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://orbit.kuzium.com*

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
*ProductsApi* | [**createProduct**](docs/ProductsApi.md#createproduct) | **POST** /api/v1/accounts/{accountId}/products | 
*ProductsApi* | [**deleteProduct**](docs/ProductsApi.md#deleteproduct) | **DELETE** /api/v1/accounts/{accountId}/products/{id} | 
*ProductsApi* | [**getProduct**](docs/ProductsApi.md#getproduct) | **GET** /api/v1/accounts/{accountId}/products/{id} | 
*ProductsApi* | [**listProducts**](docs/ProductsApi.md#listproducts) | **GET** /api/v1/accounts/{accountId}/products | 
*ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateproduct) | **PUT** /api/v1/accounts/{accountId}/products/{id} | 
*PurchaseApi* | [**createPurchaseOrder**](docs/PurchaseApi.md#createpurchaseorder) | **POST** /api/v1/accounts/{accountId}/purchase/orders | 
*PurchaseApi* | [**deletePurchaseOrder**](docs/PurchaseApi.md#deletepurchaseorder) | **DELETE** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | 
*PurchaseApi* | [**getPurchaseOrder**](docs/PurchaseApi.md#getpurchaseorder) | **GET** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | 
*PurchaseApi* | [**listPurchaseOrders**](docs/PurchaseApi.md#listpurchaseorders) | **GET** /api/v1/accounts/{accountId}/purchase/orders | 
*PurchaseApi* | [**updatePurchaseOrder**](docs/PurchaseApi.md#updatepurchaseorder) | **PUT** /api/v1/accounts/{accountId}/purchase/orders/{orderId} | 
*PurchaseApi* | [**updatePurchaseOrderStatus**](docs/PurchaseApi.md#updatepurchaseorderstatus) | **PATCH** /api/v1/accounts/{accountId}/purchase/orders/{orderId}/status | 
*PurchaseInvoiceApi* | [**getPurchaseInvoice**](docs/PurchaseInvoiceApi.md#getpurchaseinvoice) | **GET** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId} | 
*PurchaseInvoiceApi* | [**listPurchaseInvoicePayments**](docs/PurchaseInvoiceApi.md#listpurchaseinvoicepayments) | **GET** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId}/payments | 
*PurchaseInvoiceApi* | [**listPurchaseInvoices**](docs/PurchaseInvoiceApi.md#listpurchaseinvoices) | **GET** /api/v1/accounts/{accountId}/purchase/invoices | 
*PurchaseInvoiceApi* | [**recordPurchaseInvoicePayment**](docs/PurchaseInvoiceApi.md#recordpurchaseinvoicepayment) | **POST** /api/v1/accounts/{accountId}/purchase/invoices/{invoiceId}/payments | 
*SalesApi* | [**createSalesOrder**](docs/SalesApi.md#createsalesorder) | **POST** /api/v1/accounts/{accountId}/sales/orders | 
*SalesApi* | [**deleteSalesOrder**](docs/SalesApi.md#deletesalesorder) | **DELETE** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**getSalesOrder**](docs/SalesApi.md#getsalesorder) | **GET** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**listSalesOrders**](docs/SalesApi.md#listsalesorders) | **GET** /api/v1/accounts/{accountId}/sales/orders | 
*SalesApi* | [**updateSalesOrder**](docs/SalesApi.md#updatesalesorder) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId} | 
*SalesApi* | [**updateSalesOrderStatus**](docs/SalesApi.md#updatesalesorderstatus) | **PUT** /api/v1/accounts/{accountId}/sales/orders/{orderId}/status | 
*SalesInvoiceApi* | [**getSalesInvoice**](docs/SalesInvoiceApi.md#getsalesinvoice) | **GET** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId} | 
*SalesInvoiceApi* | [**listSalesInvoicePayments**](docs/SalesInvoiceApi.md#listsalesinvoicepayments) | **GET** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId}/payments | 
*SalesInvoiceApi* | [**listSalesInvoices**](docs/SalesInvoiceApi.md#listsalesinvoices) | **GET** /api/v1/accounts/{accountId}/sales/invoices | 
*SalesInvoiceApi* | [**recordSalesInvoicePayment**](docs/SalesInvoiceApi.md#recordsalesinvoicepayment) | **POST** /api/v1/accounts/{accountId}/sales/invoices/{invoiceId}/payments | 


### Documentation For Models

 - [CreateCustomerRequest](docs/CreateCustomerRequest.md)
 - [CreateProductRequest](docs/CreateProductRequest.md)
 - [CreatePurchaseOrderLineRequest](docs/CreatePurchaseOrderLineRequest.md)
 - [CreatePurchaseOrderRequest](docs/CreatePurchaseOrderRequest.md)
 - [CreateSalesOrderLineRequest](docs/CreateSalesOrderLineRequest.md)
 - [CreateSalesOrderRequest](docs/CreateSalesOrderRequest.md)
 - [CustomerResponse](docs/CustomerResponse.md)
 - [InventoryDashboardStats](docs/InventoryDashboardStats.md)
 - [InventoryItemResponse](docs/InventoryItemResponse.md)
 - [MeResponse](docs/MeResponse.md)
 - [PagedResultOfCustomerResponse](docs/PagedResultOfCustomerResponse.md)
 - [PagedResultOfProductResponse](docs/PagedResultOfProductResponse.md)
 - [PagedResultOfPurchaseInvoiceDto](docs/PagedResultOfPurchaseInvoiceDto.md)
 - [PagedResultOfPurchaseOrderResponse](docs/PagedResultOfPurchaseOrderResponse.md)
 - [PagedResultOfSalesInvoiceDto](docs/PagedResultOfSalesInvoiceDto.md)
 - [PagedResultOfSalesOrderDto](docs/PagedResultOfSalesOrderDto.md)
 - [ProductResponse](docs/ProductResponse.md)
 - [PurchaseInvoiceDetailDto](docs/PurchaseInvoiceDetailDto.md)
 - [PurchaseInvoiceDto](docs/PurchaseInvoiceDto.md)
 - [PurchaseInvoicePaymentDto](docs/PurchaseInvoicePaymentDto.md)
 - [PurchaseOrderLineResponse](docs/PurchaseOrderLineResponse.md)
 - [PurchaseOrderResponse](docs/PurchaseOrderResponse.md)
 - [RecordInvoicePaymentRequest](docs/RecordInvoicePaymentRequest.md)
 - [RecordPurchaseInvoicePaymentRequest](docs/RecordPurchaseInvoicePaymentRequest.md)
 - [SalesInvoiceDetailDto](docs/SalesInvoiceDetailDto.md)
 - [SalesInvoiceDto](docs/SalesInvoiceDto.md)
 - [SalesInvoicePaymentDto](docs/SalesInvoicePaymentDto.md)
 - [SalesOrder](docs/SalesOrder.md)
 - [SalesOrderDetailDto](docs/SalesOrderDetailDto.md)
 - [SalesOrderDto](docs/SalesOrderDto.md)
 - [SalesOrderLine](docs/SalesOrderLine.md)
 - [SalesOrderLineDto](docs/SalesOrderLineDto.md)
 - [UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [UpdateOrderStatusRequest](docs/UpdateOrderStatusRequest.md)
 - [UpdateProductRequest](docs/UpdateProductRequest.md)
 - [UpdatePurchaseOrderRequest](docs/UpdatePurchaseOrderRequest.md)
 - [UpdatePurchaseOrderStatusRequest](docs/UpdatePurchaseOrderStatusRequest.md)
 - [UpdateSalesOrderRequest](docs/UpdateSalesOrderRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiKey"></a>
### ApiKey

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

