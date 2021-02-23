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

    return results.pipelines;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: 'GM6XWuN9Wyo2atO7Krob',
      name: 'Cold Email Responses',
      stages: [
        {
          id: '6afc993d-1324-49e2-b6a5-935828f3c84a',
          name: 'Cold Email Responses',
        },
      ],
      locationId: 'TauuzFLqtdVmuqmh807q',
      stageid: '6afc993d-1324-49e2-b6a5-935828f3c84a',
      stageName: 'Cold Email Responses',
    },
    outputFields: [
      { key: 'id' },
      { key: 'name' },
      { key: 'stages[]id' },
      { key: 'stages[]name' },
      { key: 'locationId' },
      { key: 'stageid' },
      { key: 'stageName' },
    ],
  },
  key: 'get_pipeline',
  noun: 'Pipelines',
  display: {
    label: 'Pipelines',
    description: 'TO get all pipeline in gohigh level',
    hidden: true,
    important: false,
  },
};
