const authentication = require('./authentication');
const getPipelineTrigger = require('./triggers/get_pipeline.js');
const stagesTrigger = require('./triggers/stages.js');
const createContactCreate = require('./creates/create_contact.js');
const createOrUpdateOpportunityCreate = require('./creates/create_or_update_opportunity.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [createContactCreate.key]: createContactCreate,
    [createOrUpdateOpportunityCreate.key]: createOrUpdateOpportunityCreate,
  },
  triggers: {
    [getPipelineTrigger.key]: getPipelineTrigger,
    [stagesTrigger.key]: stagesTrigger,
  },
};
