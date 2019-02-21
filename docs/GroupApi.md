# RoleBasedAccessControl.GroupApi

All URIs are relative to *http://localhost/r/insights/platform/rbac/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPrincipalToGroup**](GroupApi.md#addPrincipalToGroup) | **POST** /groups/{uuid}/principals/ | Add a principal to a group in the tenant
[**createGroup**](GroupApi.md#createGroup) | **POST** /groups/ | Create a group in a tenant
[**deleteGroup**](GroupApi.md#deleteGroup) | **DELETE** /groups/{uuid}/ | Delete a group in the tenant
[**deletePrincipalFromGroup**](GroupApi.md#deletePrincipalFromGroup) | **DELETE** /groups/{uuid}/principals/ | Remove a principal from a group in the tenant
[**getGroup**](GroupApi.md#getGroup) | **GET** /groups/{uuid}/ | Get a group in the tenant
[**listGroups**](GroupApi.md#listGroups) | **GET** /groups/ | List the groups for a tenant


<a name="addPrincipalToGroup"></a>
# **addPrincipalToGroup**
> GroupWithPrincipals addPrincipalToGroup(uuid, groupPrincipalIn)

Add a principal to a group in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
let uuid = null; // String | ID of group to update
let groupPrincipalIn = new RoleBasedAccessControl.GroupPrincipalIn(); // GroupPrincipalIn | Principal to add to a group
apiInstance.addPrincipalToGroup(uuid, groupPrincipalIn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of group to update | 
 **groupPrincipalIn** | [**GroupPrincipalIn**](GroupPrincipalIn.md)| Principal to add to a group | 

### Return type

[**GroupWithPrincipals**](GroupWithPrincipals.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroup"></a>
# **createGroup**
> GroupOut createGroup(group)

Create a group in a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
let group = new RoleBasedAccessControl.Group(); // Group | Group to create in tenant
apiInstance.createGroup(group).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| Group to create in tenant | 

### Return type

[**GroupOut**](GroupOut.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(uuid)

Delete a group in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
let uuid = null; // String | ID of group to delete
apiInstance.deleteGroup(uuid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of group to delete | 

### Return type

null (empty response body)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="deletePrincipalFromGroup"></a>
# **deletePrincipalFromGroup**
> deletePrincipalFromGroup(uuid, usernames)

Remove a principal from a group in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
let uuid = null; // String | ID of group to update
let usernames = "usernames_example"; // String | A comma separated list of usernames for principals to remove from the group
apiInstance.deletePrincipalFromGroup(uuid, usernames).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of group to update | 
 **usernames** | **String**| A comma separated list of usernames for principals to remove from the group | 

### Return type

null (empty response body)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroup"></a>
# **getGroup**
> GroupWithPrincipals getGroup(uuid)

Get a group in the tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
let uuid = null; // String | ID of group to get
apiInstance.getGroup(uuid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| ID of group to get | 

### Return type

[**GroupWithPrincipals**](GroupWithPrincipals.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listGroups"></a>
# **listGroups**
> GroupPagination listGroups()

List the groups for a tenant

### Example
```javascript
import RoleBasedAccessControl from 'role_based_access_control';
let defaultClient = RoleBasedAccessControl.ApiClient.instance;

// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';

let apiInstance = new RoleBasedAccessControl.GroupApi();
apiInstance.listGroups().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GroupPagination**](GroupPagination.md)

### Authorization

[basic_auth](../README.md#basic_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

