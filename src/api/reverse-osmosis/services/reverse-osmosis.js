'use strict';

/**
 * reverse-osmosis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reverse-osmosis.reverse-osmosis');
