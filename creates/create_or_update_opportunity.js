const findOpportunity=async function(z,bundle) {


//find opportunity code starts here

  const options = {
    url: 'https://rest.gohighlevel.com/v1/pipelines/'+bundle.inputData.pipelineId+'/opportunities',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "Bearer "+ bundle.authData.api_key
    },
    params: {
      'query': bundle.inputData.email
    }
  }

  return await z.request(options)
    .then((response) => {
      response.throwForStatus();
      const results = response.json;
      var count=results.meta.total;
      // You can do any parsing you need for results here before returning them
      if(count>0)
      {
        return {count:count,opportunity:results.opportunities[0]};
      }
      else
      {
       return {count:count, opportunity:null};
      }
      return {count:count, opportunity:null};

    });

  //find opportunity code ends here

}

const perform = async (z, bundle) => {
  var search=await findOpportunity(z,bundle);


if(search.count>0)
{
 
  //update opportunity code starts here

  const options = {
    url:
      'https://rest.gohighlevel.com/v1/pipelines/' +bundle.inputData.pipelineId +'/opportunities/'+search.opportunity.id,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + bundle.authData.api_key,
    },
    params: {},
    body: {
      title: bundle.inputData.title,
      stageId: bundle.inputData.stageId,
      status: 'open',
      monetaryValue: bundle.inputData.monetaryValue,
      assignedTo: bundle.inputData.assignedTo,
      email: bundle.inputData.email,
      phone: bundle.inputData.phone,
      source: 'public api',
      contactId: bundle.inputData.contactId,
      name: bundle.inputData.name,
      companyName: bundle.inputData.companyName,
      tags: [bundle.inputData.tags],
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return {operation:"opportunity updated", results:results};
  });
  //update opportunity code ends here
}
else
{
  //create opportunity starts here

  const options = {
    url: 'https://rest.gohighlevel.com/v1/pipelines/'+bundle.inputData.pipelineId+'/opportunities/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "Bearer "+ bundle.authData.api_key
    },
    params: {

    },
    body:{

      "title":bundle.inputData.title,
      "stageId":bundle.inputData.stageId,
      "status":"open",
      "monetaryValue":bundle.inputData.monetaryValue,
      "assignedTo":bundle.inputData.assignedTo,
      "email":bundle.inputData.email,
      "phone":bundle.inputData.phone,
      "source":"public api",
      "contactId":bundle.inputData.contactId,
      "name":bundle.inputData.name,
      "companyName":bundle.inputData.companyName,
      "tags":[bundle.inputData.tags]

    }
  }

  return z.request(options)
    .then((response) => {
      response.throwForStatus();
      const results = response.json;

      // You can do any parsing you need for results here before returning them

      return {operation:"opportunity created", results:results};
    });

  //create opportunity ends here

}

 
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'title',
        label: 'title',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'pipelineId',
        label: 'pipelineId',
        type: 'string',
        dynamic: 'get_pipeline.id.name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'stageId',
        label: 'stageId',
        type: 'string',
        dynamic: 'stages.id.name',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'monetaryValue',
        label: 'monetaryValue',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'assignedTo',
        label: 'assignedTo',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'contactId',
        label: 'contactId',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'email',
        label: 'email',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'phone',
        label: 'phone',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'name',
        label: 'Contact name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'tags',
        label: 'tags',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'companyName',
        label: 'company Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 'Hkow7Vqr3eYIlDRyowJc',
      name: 'Test Opportunity Dilawar1',
      monetaryValue: 1,
      pipelineId: 'EOTqPT6BFwyVMju9ILY0',
      pipelineStageId: '4f110d97-d28e-44ba-b017-231bac7aafea',
      status: 'open',
      source: 'public api',
      createdAt: '2021-02-12T16:37:43.874Z',
      updatedAt: '2021-02-12T16:40:54.647Z',
      contact: {
        id: 'lE23WqhTu0CiIGWqWNi5',
        name: 'test Dilawar',
        companyName: 'Dilawar Test',
        email: 'dilawarudemy@gmail.com',
        phone: '+923064630800',
        tags: [],
      },
    },
    outputFields: [
      { key: 'id' },
      { key: 'name' },
      { key: 'monetaryValue' },
      { key: 'pipelineId' },
      { key: 'pipelineStageId' },
      { key: 'status' },
      { key: 'source' },
      { key: 'createdAt' },
      { key: 'updatedAt' },
      { key: 'contact__id' },
      { key: 'contact__name' },
      { key: 'contact__companyName' },
      { key: 'contact__email' },
      { key: 'contact__phone' },
    ],
  },
  key: 'create_or_update_opportunity',
  noun: 'Opportunity',
  display: {
    label: 'create / update Opportunity',
    description: 'To create or update an opportunity',
    hidden: false,
    important: true,
  },
};
