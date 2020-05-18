/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountIdentityVerificationStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountIdentityVerificationStep'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountIdentityVerificationWorkflow = factory(root.Docusign.ApiClient, root.Docusign.AccountIdentityVerificationStep);
  }
}(this, function(ApiClient, AccountIdentityVerificationStep) {
  'use strict';


  /**
   * The AccountIdentityVerificationWorkflow model module.
   * @module model/AccountIdentityVerificationWorkflow
   */

  /**
   * Constructs a new <code>AccountIdentityVerificationWorkflow</code>.
   * @alias module:model/AccountIdentityVerificationWorkflow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountIdentityVerificationWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentityVerificationWorkflow} obj Optional instance to populate.
   * @return {module:model/AccountIdentityVerificationWorkflow} The populated <code>AccountIdentityVerificationWorkflow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultName')) {
        obj['defaultName'] = ApiClient.convertToType(data['defaultName'], 'String');
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [AccountIdentityVerificationStep]);
      }
      if (data.hasOwnProperty('workflowId')) {
        obj['workflowId'] = ApiClient.convertToType(data['workflowId'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} defaultName
   */
  exports.prototype['defaultName'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AccountIdentityVerificationStep>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * 
   * @member {String} workflowId
   */
  exports.prototype['workflowId'] = undefined;



  return exports;
}));


