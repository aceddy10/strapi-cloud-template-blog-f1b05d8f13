'use strict';

/**
 * leak-detection router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::leak-detection.leak-detection');
