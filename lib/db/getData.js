const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios').default;


const url = 'https://ghibliapi.herokuapp.com';

// Make a request for a user with a given ID
axios.get(url)
//   .then(res => res.json())
  .then(res => {
      console.log(res);
  })
  .catch(function (error) {
    // handle error
    console.log('The error is ' + error);
  })

