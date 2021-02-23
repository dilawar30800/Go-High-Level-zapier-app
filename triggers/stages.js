const perform = (z, bundle) => {
  const options = {
    url: 'https://rest.gohighlevel.com/v1/pipelines/',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + bundle.authData.api_key,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    var data = [];
    // You can do any parsing you need for results here before returning them
    var pipelines = results.pipelines;
    var pipeline;
    var stages;
    if (pipelines.length > 0) {
      for (var j = 0; j < pipelines.length; j++) {
        stages = pipelines[j].stages;
        if (stages.length > 0) {
          for (var i = 0; i < stages.length; i++) {
            data.push({ id: stages[i].id, name: stages[i].name });
          }
        }
      }
    }

    return data;
  });
};

module.exports = {
  operation: { perform: perform },
  key: 'stages',
  noun: 'stage',
  display: {
    label: 'stages',
    description: 'to get all stages from the app',
    hidden: true,
    important: false,
  },
};
