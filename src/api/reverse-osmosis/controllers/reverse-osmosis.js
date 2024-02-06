'use strict';

/**
 * reverse-osmosis controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reverse-osmosis.reverse-osmosis');
