'use strict';

/**
 * leak-detection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::leak-detection.leak-detection');
