# RoleBasedAccessControl.AccessApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrincipalAccess**](AccessApi.md#getPrincipalAccess) | **GET** /access/ | Get the permitted access for a principal in the tenant


<a name="getPrincipalAccess"></a>
# **getPrincipalAccess**
> AccessPagination getPrincipalAccess(application, opts)

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
let application = "application_example"; // String | The application name to obtain access for the principal
let opts = {
  'username': "username_example", // String | Unique username of the principal to obtain access for
  'pageSize': 10, // Number | Parameter for selecting the amount of data in a page.
  'page': 1 // Number | Parameter for selecting the page of data.
};
apiInstance.getPrincipalAccess(application, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **String**| The application name to obtain access for the principal | 
 **username** | **String**| Unique username of the principal to obtain access for | [optional] 
 **pageSize** | **Number**| Parameter for selecting the amount of data in a page. | [optional] [default to 10]
 **page** | **Number**| Parameter for selecting the page of data. | [optional] [default to 1]

### Return type

[**AccessPagination**](AccessPagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

