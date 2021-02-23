require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - create_or_update_opportunity', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        //api_key: process.env.API_KEY,
        api_key:"c265bbe7-e782-40c2-be71-67ed0748e602",
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
      },

      inputData: {
    
            "title": "(---) app testing",
            "email": "dilawarudemy@gmail.com",
            "phone": "+923064630800",
            "pipelineId": "EOTqPT6BFwyVMju9ILY0",
            "stageId": "4f110d97-d28e-44ba-b017-231bac7aafea",
            "assignedTo": "XTruhbUFJMtT0zgiUmOb",
            "status": "open"
      },
    };

    const result = await appTester(
      App.creates['create_or_update_opportunity'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
