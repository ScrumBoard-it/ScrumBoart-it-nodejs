/**
 * ScrumBoard-it
 * ScrumBoard-it API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: team@scrumboard-it.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Provider', 'model/Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Provider'), require('./Task'));
  } else {
    // Browser globals (root is window)
    if (!root.ScrumBoardIt) {
      root.ScrumBoardIt = {};
    }
    root.ScrumBoardIt.InlineResponse2002 = factory(root.ScrumBoardIt.ApiClient, root.ScrumBoardIt.Provider, root.ScrumBoardIt.Task);
  }
}(this, function(ApiClient, Provider, Task) {
  'use strict';




  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   * @param provider {module:model/Provider} 
   * @param tasks {Array.<module:model/Task>} 
   */
  var exports = function(provider, tasks) {
    var _this = this;

    _this['provider'] = provider;
    _this['tasks'] = tasks;
  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('provider')) {
        obj['provider'] = Provider.constructFromObject(data['provider']);
      }
      if (data.hasOwnProperty('tasks')) {
        obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Provider} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * @member {Array.<module:model/Task>} tasks
   */
  exports.prototype['tasks'] = undefined;



  return exports;
}));


