const findContact=async function(z,bundle) {
  const options = {
    url: 'https://rest.gohighlevel.com/v1/contacts/lookup',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + bundle.authData.api_key,
    },
    params: {
      email: bundle.inputData.email,
      phone:bundle.inputData.phone
      
    },
  };

  return await z.request(options).then((response) => {
    //response.throwForStatus();
     if (response.status == 422) {
      return { count:0, contact:null };
    } else {
      const results = response.json;
      return {count:1,contact:results.contacts[0]};
    }
   return {count:1,contact:results.contacts[0]};
  });

}


const perform = async (z, bundle) => {
  //find contact code
  var search=await findContact(z,bundle);
  if(search.count>0)
  {
   
  //update contact code starts here

  const options = {
    url: 'https://rest.gohighlevel.com/v1/contacts/'+search.contact.id,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ bundle.authData.api_key
    },
    params: {

    },
  body:{
      "firstName":bundle.inputData.firstName,
      "lastName":bundle.inputData.lastName,
      "name":bundle.inputData.name,
      "email":bundle.inputData.email,
      "phone":bundle.inputData.phone,
      "address1":bundle.inputData.address1,
      "city":bundle.inputData.city,
      "state":bundle.inputData.state,
      "website":bundle.inputData.website,
      "tags":bundle.inputData.tags,
      "source":bundle.inputData.source

  }
  }

  return z.request(options)
    .then((response) => {
      response.throwForStatus();

        const results = response.json;

      return {action:"contact updated",results:results};
    });

  //update contact ends here
  }
  else
  {
    //create contact code start here

  const options = {
    url: 'https://rest.gohighlevel.com/v1/contacts/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+ bundle.authData.api_key
    },
    params: {

    },
  body:{
      "firstName":bundle.inputData.firstName,
      "lastName":bundle.inputData.lastName,
      "name":bundle.inputData.name,
      "email":bundle.inputData.email,
      "phone":bundle.inputData.phone,
      "address1":bundle.inputData.address1,
      "city":bundle.inputData.city,
      "state":bundle.inputData.state,
      "website":bundle.inputData.website,
      "tags":bundle.inputData.tags,
      "source":bundle.inputData.source

  }
  }

  return z.request(options)
    .then((response) => {
      response.throwForStatus();

        const results = response.json;

     return {action:"contact created",results:results};
    });

  //ending create contact code
  }
  
 

};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'firstName',
        label: 'firstName',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'lastName',
        label: 'lastName',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'name',
        label: 'name',
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
        key: 'address1',
        label: 'address1',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'city',
        label: 'city',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'state',
        label: 'state',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'website',
        label: 'website',
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
        list: true,
        altersDynamicFields: false,
      },
      {
        key: 'source',
        label: 'source',
        type: 'string',
        default: 'Public APi',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      contact: {
        id: 'lE23WqhTu0CiIGWqWNi5',
        dateAdded: '2021-02-12T07:47:58.000Z',
        tags: [],
        locationId: 'TauuzFLqtdVmuqmh807q',
        source: 'public api',
        firstName: 'Testing',
        firstNameLowerCase: 'testing',
        fullNameLowerCase: 'testing dilawar',
        lastName: 'Dilawar',
        lastNameLowerCase: 'dilawar',
        phone: '+923064630800',
        country: 'US',
        state: 'PB',
        city: 'Lahroe',
        address1: ['Lahore', 'PB', 'Pk'],
        website: 'www.google.com',
        customField: [],
      },
    },
    outputFields: [
      { key: 'contact__id' },
      { key: 'contact__dateAdded' },
      { key: 'contact__locationId' },
      { key: 'contact__source' },
      { key: 'contact__firstName' },
      { key: 'contact__firstNameLowerCase' },
      { key: 'contact__fullNameLowerCase' },
      { key: 'contact__lastName' },
      { key: 'contact__lastNameLowerCase' },
      { key: 'contact__phone' },
      { key: 'contact__country' },
      { key: 'contact__state' },
      { key: 'contact__city' },
      { key: 'contact__address1[]0' },
      { key: 'contact__address1[]1' },
      { key: 'contact__address1[]2' },
      { key: 'contact__address1[]3' },
      { key: 'contact__address1[]4' },
      { key: 'contact__address1[]5' },
      { key: 'contact__website' },
    ],
  },
  key: 'create_contact',
  noun: 'contact',
  display: {
    label: 'Create / Update Contact',
    description: 'To create new or update existing contact.',
    hidden: false,
    important: true,
  },
};
