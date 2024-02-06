'use strict';

/**
 * reverse-osmosis router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reverse-osmosis.reverse-osmosis');
