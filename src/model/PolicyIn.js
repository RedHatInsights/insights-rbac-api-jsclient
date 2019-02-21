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
import Policy from './Policy';

/**
 * The PolicyIn model module.
 * @module model/PolicyIn
 * @version 1.0.0
 */
class PolicyIn {
    /**
     * Constructs a new <code>PolicyIn</code>.
     * @alias module:model/PolicyIn
     * @extends module:model/Policy
     * @implements module:model/Policy
     * @param name {} 
     * @param group {} 
     * @param roles {} 
     */
    constructor(name, group, roles) { 
        Policy.initialize(this, name);
        PolicyIn.initialize(this, name, group, roles);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, group, roles) { 
        obj['group'] = group;
        obj['roles'] = roles;
    }

    /**
     * Constructs a <code>PolicyIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyIn} obj Optional instance to populate.
     * @return {module:model/PolicyIn} The populated <code>PolicyIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyIn();
            Policy.constructFromObject(data, obj);
            Policy.constructFromObject(data, obj);

            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} group
 */
PolicyIn.prototype['group'] = undefined;

/**
 * @member {Array.<String>} roles
 */
PolicyIn.prototype['roles'] = undefined;


// Implement Policy interface:
/**
 * @member {String} name
 */
Policy.prototype['name'] = undefined;
/**
 * @member {String} description
 */
Policy.prototype['description'] = undefined;




export default PolicyIn;

