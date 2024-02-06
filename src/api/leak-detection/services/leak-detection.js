'use strict';

/**
 * leak-detection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leak-detection.leak-detection');
