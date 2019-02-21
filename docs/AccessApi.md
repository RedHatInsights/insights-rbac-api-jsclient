# RoleBasedAccessControl.AccessApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrincipalAccess**](AccessApi.md#getPrincipalAccess) | **GET** /access/ | Get the permitted access for a principal in the tenant


<a name="getPrincipalAccess"></a>
# **getPrincipalAccess**
> AccessPagination getPrincipalAccess(username, application)

Get the permitted access for a principal in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.AccessApi();
let username = "username_example"; // String | Unique username of the principal to obtain access for
let application = "application_example"; // String | The application name to obtain access for the principal
apiInstance.getPrincipalAccess(username, application).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Unique username of the principal to obtain access for | 
 **application** | **String**| The application name to obtain access for the principal | 

### Return type

[**AccessPagination**](AccessPagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

