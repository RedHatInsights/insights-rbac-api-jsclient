# RoleBasedAccessControl.PolicyApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPolicies**](PolicyApi.md#createPolicies) | **POST** /policies/ | Create a policy in a tenant
[**deletePolicy**](PolicyApi.md#deletePolicy) | **DELETE** /policies/{uuid}/ | Delete a policy in the tenant
[**getPolicy**](PolicyApi.md#getPolicy) | **GET** /policies/{uuid}/ | Get a policy in the tenant
[**listPolicies**](PolicyApi.md#listPolicies) | **GET** /policies/ | List the policies in the tenant
[**updatePolicy**](PolicyApi.md#updatePolicy) | **PUT** /policies/{uuid}/ | Update a policy in the tenant


<a name="createPolicies"></a>
# **createPolicies**
> PolicyExtended createPolicies(policyIn)

Create a policy in a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PolicyApi();
let policyIn = new RoleBasedAccessControl.PolicyIn(); // PolicyIn | Policy to create
apiInstance.createPolicies(policyIn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyIn** | [**PolicyIn**](PolicyIn.md)| Policy to create | 

### Return type

[**PolicyExtended**](PolicyExtended.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePolicy"></a>
# **deletePolicy**
> deletePolicy(uuid)

Delete a policy in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PolicyApi();
let uuid = null; // String | ID of policy to delete
apiInstance.deletePolicy(uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of policy to delete | 

### Return type

null (empty response body)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPolicy"></a>
# **getPolicy**
> PolicyExtended getPolicy(uuid)

Get a policy in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PolicyApi();
let uuid = null; // String | ID of policy to get
apiInstance.getPolicy(uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of policy to get | 

### Return type

[**PolicyExtended**](PolicyExtended.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPolicies"></a>
# **listPolicies**
> PolicyPagination listPolicies(opts)

List the policies in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PolicyApi();
let opts = {
  'pageSize': 10, // Number | Parameter for selecting the amount of data in a page.
  'page': 1 // Number | Parameter for selecting the page of data.
};
apiInstance.listPolicies(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| Parameter for selecting the amount of data in a page. | [optional] [default to 10]
 **page** | **Number**| Parameter for selecting the page of data. | [optional] [default to 1]

### Return type

[**PolicyPagination**](PolicyPagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePolicy"></a>
# **updatePolicy**
> PolicyExtended updatePolicy(uuid)

Update a policy in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PolicyApi();
let uuid = null; // String | ID of policy to update
apiInstance.updatePolicy(uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of policy to update | 

### Return type

[**PolicyExtended**](PolicyExtended.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

