'use strict';

/**
 * hero-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-page.hero-page');
