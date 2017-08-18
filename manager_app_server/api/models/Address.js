/**
 * Created by pablo on 18/08/17.
 */
/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    street: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    state: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      required: true
    },
    zipcode: {
      type: 'string',
      required: true
    }
  }
};
