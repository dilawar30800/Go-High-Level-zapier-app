const testAuth = (z, bundle) => {
  const options = {
    url: 'https://rest.gohighlevel.com/v1/contacts',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bundle.authData.api_key}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  type: 'custom',
  test: testAuth,
  fields: [
    { computed: false, key: 'api_key', required: true, label: 'API Key' },
  ],
  customConfig: {},
};
