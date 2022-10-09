'use strict';

/**
 * correo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::correo.correo');
