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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RoleBasedAccessControl);
  }
}(this, function(expect, RoleBasedAccessControl) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RoleBasedAccessControl.PolicyApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PolicyApi', function() {
    describe('createPolicies', function() {
      it('should call createPolicies successfully', function(done) {
        //uncomment below and update the code to test createPolicies
        //instance.createPolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePolicy', function() {
      it('should call deletePolicy successfully', function(done) {
        //uncomment below and update the code to test deletePolicy
        //instance.deletePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPolicy', function() {
      it('should call getPolicy successfully', function(done) {
        //uncomment below and update the code to test getPolicy
        //instance.getPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPolicies', function() {
      it('should call listPolicies successfully', function(done) {
        //uncomment below and update the code to test listPolicies
        //instance.listPolicies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePolicy', function() {
      it('should call updatePolicy successfully', function(done) {
        //uncomment below and update the code to test updatePolicy
        //instance.updatePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
