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
    instance = new RoleBasedAccessControl.GroupApi();
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

  describe('GroupApi', function() {
    describe('addPrincipalToGroup', function() {
      it('should call addPrincipalToGroup successfully', function(done) {
        //uncomment below and update the code to test addPrincipalToGroup
        //instance.addPrincipalToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroup', function() {
      it('should call createGroup successfully', function(done) {
        //uncomment below and update the code to test createGroup
        //instance.createGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePrincipalFromGroup', function() {
      it('should call deletePrincipalFromGroup successfully', function(done) {
        //uncomment below and update the code to test deletePrincipalFromGroup
        //instance.deletePrincipalFromGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listGroups', function() {
      it('should call listGroups successfully', function(done) {
        //uncomment below and update the code to test listGroups
        //instance.listGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGroup', function() {
      it('should call updateGroup successfully', function(done) {
        //uncomment below and update the code to test updateGroup
        //instance.updateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
