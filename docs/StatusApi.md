# RoleBasedAccessControl.StatusApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](StatusApi.md#getStatus) | **GET** /status/ | Obtain server status


<a name="getStatus"></a>
# **getStatus**
> Status getStatus()

Obtain server status

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.StatusApi();
apiInstance.getStatus().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

