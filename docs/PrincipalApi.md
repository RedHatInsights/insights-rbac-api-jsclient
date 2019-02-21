# RoleBasedAccessControl.PrincipalApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrincipal**](PrincipalApi.md#getPrincipal) | **GET** /principals/{username}/ | Get a principal in the tenant
[**listPrincipals**](PrincipalApi.md#listPrincipals) | **GET** /principals/ | List the principals for a tenant


<a name="getPrincipal"></a>
# **getPrincipal**
> Principal getPrincipal(username)

Get a principal in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PrincipalApi();
let username = "username_example"; // String | Username of principal to get
apiInstance.getPrincipal(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Username of principal to get | 

### Return type

[**Principal**](Principal.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPrincipals"></a>
# **listPrincipals**
> PrincipalPagination listPrincipals()

List the principals for a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.PrincipalApi();
apiInstance.listPrincipals().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PrincipalPagination**](PrincipalPagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

