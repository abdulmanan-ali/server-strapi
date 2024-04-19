'use strict';

/**
 * news-urdu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-urdu.news-urdu');
