/**
 * Role Based Access Control
 * The API for Role Based Access Control.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Group from '../model/Group';
import GroupOut from '../model/GroupOut';
import GroupPagination from '../model/GroupPagination';
import GroupPrincipalIn from '../model/GroupPrincipalIn';
import GroupWithPrincipals from '../model/GroupWithPrincipals';

/**
* Group service.
* @module api/GroupApi
* @version 1.0.0
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi. 
    * @alias module:api/GroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a principal to a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {module:model/GroupPrincipalIn} groupPrincipalIn Principal to add to a group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupWithPrincipals} and HTTP response
     */
    addPrincipalToGroupWithHttpInfo(uuid, groupPrincipalIn) {
      let postBody = groupPrincipalIn;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling addPrincipalToGroup");
      }

      // verify the required parameter 'groupPrincipalIn' is set
      if (groupPrincipalIn === undefined || groupPrincipalIn === null) {
        throw new Error("Missing the required parameter 'groupPrincipalIn' when calling addPrincipalToGroup");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GroupWithPrincipals;

      return this.apiClient.callApi(
        '/groups/{uuid}/principals/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a principal to a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {module:model/GroupPrincipalIn} groupPrincipalIn Principal to add to a group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupWithPrincipals}
     */
    addPrincipalToGroup(uuid, groupPrincipalIn) {
      return this.addPrincipalToGroupWithHttpInfo(uuid, groupPrincipalIn)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a group in a tenant
     * @param {module:model/Group} group Group to create in tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupOut} and HTTP response
     */
    createGroupWithHttpInfo(group) {
      let postBody = group;

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling createGroup");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GroupOut;

      return this.apiClient.callApi(
        '/groups/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a group in a tenant
     * @param {module:model/Group} group Group to create in tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupOut}
     */
    createGroup(group) {
      return this.createGroupWithHttpInfo(group)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a group in the tenant
     * @param {String} uuid ID of group to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteGroupWithHttpInfo(uuid) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteGroup");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = null;

      return this.apiClient.callApi(
        '/groups/{uuid}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a group in the tenant
     * @param {String} uuid ID of group to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteGroup(uuid) {
      return this.deleteGroupWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a principal from a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {String} usernames A comma separated list of usernames for principals to remove from the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePrincipalFromGroupWithHttpInfo(uuid, usernames) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deletePrincipalFromGroup");
      }

      // verify the required parameter 'usernames' is set
      if (usernames === undefined || usernames === null) {
        throw new Error("Missing the required parameter 'usernames' when calling deletePrincipalFromGroup");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
        'usernames': usernames
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/groups/{uuid}/principals/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a principal from a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {String} usernames A comma separated list of usernames for principals to remove from the group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePrincipalFromGroup(uuid, usernames) {
      return this.deletePrincipalFromGroupWithHttpInfo(uuid, usernames)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a group in the tenant
     * @param {String} uuid ID of group to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupWithPrincipals} and HTTP response
     */
    getGroupWithHttpInfo(uuid) {
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getGroup");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupWithPrincipals;

      return this.apiClient.callApi(
        '/groups/{uuid}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a group in the tenant
     * @param {String} uuid ID of group to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupWithPrincipals}
     */
    getGroup(uuid) {
      return this.getGroupWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List the groups for a tenant
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Parameter for selecting the amount of data in a page. (default to 10)
     * @param {Number} opts.page Parameter for selecting the page of data. (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupPagination} and HTTP response
     */
    listGroupsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page_size': opts['pageSize'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupPagination;

      return this.apiClient.callApi(
        '/groups/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List the groups for a tenant
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Parameter for selecting the amount of data in a page. (default to 10)
     * @param {Number} opts.page Parameter for selecting the page of data. (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupPagination}
     */
    listGroups(opts) {
      return this.listGroupsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Udate a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {module:model/Group} group Group to update in tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GroupOut} and HTTP response
     */
    updateGroupWithHttpInfo(uuid, group) {
      let postBody = group;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling updateGroup");
      }

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling updateGroup");
      }


      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', '*/*'];
      let returnType = GroupOut;

      return this.apiClient.callApi(
        '/groups/{uuid}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Udate a group in the tenant
     * @param {String} uuid ID of group to update
     * @param {module:model/Group} group Group to update in tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GroupOut}
     */
    updateGroup(uuid, group) {
      return this.updateGroupWithHttpInfo(uuid, group)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
