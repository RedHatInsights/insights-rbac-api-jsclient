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

import ApiClient from '../ApiClient';

/**
 * The Status model module.
 * @module model/Status
 * @version 1.0.0
 */
class Status {
    /**
     * Constructs a new <code>Status</code>.
     * @alias module:model/Status
     * @param apiVersion {Number} 
     */
    constructor(apiVersion) { 
        
        Status.initialize(this, apiVersion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiVersion) { 
        obj['api_version'] = apiVersion;
    }

    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Status} obj Optional instance to populate.
     * @return {module:model/Status} The populated <code>Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status();

            if (data.hasOwnProperty('api_version')) {
                obj['api_version'] = ApiClient.convertToType(data['api_version'], 'Number');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = ApiClient.convertToType(data['commit'], 'String');
            }
            if (data.hasOwnProperty('server_address')) {
                obj['server_address'] = ApiClient.convertToType(data['server_address'], 'String');
            }
            if (data.hasOwnProperty('platform_info')) {
                obj['platform_info'] = ApiClient.convertToType(data['platform_info'], Object);
            }
            if (data.hasOwnProperty('python_version')) {
                obj['python_version'] = ApiClient.convertToType(data['python_version'], 'String');
            }
            if (data.hasOwnProperty('modules')) {
                obj['modules'] = ApiClient.convertToType(data['modules'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} api_version
 */
Status.prototype['api_version'] = undefined;

/**
 * @member {String} commit
 */
Status.prototype['commit'] = undefined;

/**
 * @member {String} server_address
 */
Status.prototype['server_address'] = undefined;

/**
 * @member {Object} platform_info
 */
Status.prototype['platform_info'] = undefined;

/**
 * @member {String} python_version
 */
Status.prototype['python_version'] = undefined;

/**
 * @member {Object} modules
 */
Status.prototype['modules'] = undefined;






export default Status;

