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
import ListPagination from './ListPagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import PolicyOut from './PolicyOut';

/**
 * The PolicyPagination model module.
 * @module model/PolicyPagination
 * @version 1.0.0
 */
class PolicyPagination {
    /**
     * Constructs a new <code>PolicyPagination</code>.
     * @alias module:model/PolicyPagination
     * @extends module:model/ListPagination
     * @implements module:model/ListPagination
     * @param data {} 
     */
    constructor(data) { 
        ListPagination.initialize(this);
        PolicyPagination.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>PolicyPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyPagination} obj Optional instance to populate.
     * @return {module:model/PolicyPagination} The populated <code>PolicyPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyPagination();
            ListPagination.constructFromObject(data, obj);
            ListPagination.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PolicyOut]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PolicyOut>} data
 */
PolicyPagination.prototype['data'] = undefined;


// Implement ListPagination interface:
/**
 * @member {module:model/PaginationMeta} meta
 */
ListPagination.prototype['meta'] = undefined;
/**
 * @member {module:model/PaginationLinks} links
 */
ListPagination.prototype['links'] = undefined;




export default PolicyPagination;

