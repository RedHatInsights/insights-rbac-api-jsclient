# RoleBasedAccessControl.RoleApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoles**](RoleApi.md#createRoles) | **POST** /roles/ | Create a roles for a tenant
[**deleteRole**](RoleApi.md#deleteRole) | **DELETE** /roles/{uuid}/ | Delete a role in the tenant
[**getRole**](RoleApi.md#getRole) | **GET** /roles/{uuid}/ | Get a role in the tenant
[**listRoles**](RoleApi.md#listRoles) | **GET** /roles/ | List the roles for a tenant
[**updateRole**](RoleApi.md#updateRole) | **PUT** /roles/{uuid}/ | Update a Role in the tenant


<a name="createRoles"></a>
# **createRoles**
> RoleWithAccess createRoles(roleIn)

Create a roles for a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.RoleApi();
let roleIn = new RoleBasedAccessControl.RoleIn(); // RoleIn | Role to create
apiInstance.createRoles(roleIn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleIn** | [**RoleIn**](RoleIn.md)| Role to create | 

### Return type

[**RoleWithAccess**](RoleWithAccess.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRole"></a>
# **deleteRole**
> deleteRole(uuid)

Delete a role in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.RoleApi();
let uuid = null; // String | ID of role to delete
apiInstance.deleteRole(uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of role to delete | 

### Return type

null (empty response body)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRole"></a>
# **getRole**
> RoleWithAccess getRole(uuid)

Get a role in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.RoleApi();
let uuid = null; // String | ID of role to get
apiInstance.getRole(uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of role to get | 

### Return type

[**RoleWithAccess**](RoleWithAccess.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRoles"></a>
# **listRoles**
> RolePagination listRoles()

List the roles for a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.RoleApi();
apiInstance.listRoles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RolePagination**](RolePagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRole"></a>
# **updateRole**
> updateRole(uuid, roleWithAccess)

Update a Role in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.RoleApi();
let uuid = null; // String | ID of role to update
let roleWithAccess = new RoleBasedAccessControl.RoleWithAccess(); // RoleWithAccess | Update to a Role
apiInstance.updateRole(uuid, roleWithAccess).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of role to update | 
 **roleWithAccess** | [**RoleWithAccess**](RoleWithAccess.md)| Update to a Role | 

### Return type

null (empty response body)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

