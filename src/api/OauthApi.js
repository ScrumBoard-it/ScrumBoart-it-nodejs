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
    define(['ApiClient', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/InlineResponse400'));
  } else {
    // Browser globals (root is window)
    if (!root.ScrumBoardIt) {
      root.ScrumBoardIt = {};
    }
    root.ScrumBoardIt.OauthApi = factory(root.ScrumBoardIt.ApiClient, root.ScrumBoardIt.InlineResponse2003, root.ScrumBoardIt.InlineResponse2004, root.ScrumBoardIt.InlineResponse400);
  }
}(this, function(ApiClient, InlineResponse2003, InlineResponse2004, InlineResponse400) {
  'use strict';

  /**
   * Oauth service.
   * @module api/OauthApi
   * @version 0.2.0
   */

  /**
   * Constructs a new OauthApi. 
   * @alias module:api/OauthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Authentication public config
     * @param {module:model/String} provider Name of the provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.getAuthorizationConfigWithHttpInfo = function(provider) {
      var postBody = null;

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling getAuthorizationConfig");
      }


      var pathParams = {
        'provider': provider
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/oauth/{provider}/config', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authentication public config
     * @param {module:model/String} provider Name of the provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.getAuthorizationConfig = function(provider) {
      return this.getAuthorizationConfigWithHttpInfo(provider)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Authentication token bridge
     * @param {module:model/String} provider Name of the provider
     * @param {String} code Temporary code returned by the provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    this.getAuthorizationTokenWithHttpInfo = function(provider, code) {
      var postBody = null;

      // verify the required parameter 'provider' is set
      if (provider === undefined || provider === null) {
        throw new Error("Missing the required parameter 'provider' when calling getAuthorizationToken");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getAuthorizationToken");
      }


      var pathParams = {
        'provider': provider
      };
      var queryParams = {
        'code': code,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/oauth/{provider}/token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authentication token bridge
     * @param {module:model/String} provider Name of the provider
     * @param {String} code Temporary code returned by the provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    this.getAuthorizationToken = function(provider, code) {
      return this.getAuthorizationTokenWithHttpInfo(provider, code)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));