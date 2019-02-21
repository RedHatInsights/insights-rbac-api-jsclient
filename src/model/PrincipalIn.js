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
 * The PrincipalIn model module.
 * @module model/PrincipalIn
 * @version 1.0.0
 */
class PrincipalIn {
    /**
     * Constructs a new <code>PrincipalIn</code>.
     * @alias module:model/PrincipalIn
     * @param username {String} 
     */
    constructor(username) { 
        
        PrincipalIn.initialize(this, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username) { 
        obj['username'] = username;
    }

    /**
     * Constructs a <code>PrincipalIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrincipalIn} obj Optional instance to populate.
     * @return {module:model/PrincipalIn} The populated <code>PrincipalIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrincipalIn();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
PrincipalIn.prototype['username'] = undefined;






export default PrincipalIn;

