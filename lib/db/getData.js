const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios').default;


const url = 'https://ghibliapi.herokuapp.com/films';

// Make a request for a user with a given ID
fetch(url)
  .then(res => res.json())
  .then(res => {
      console.log(res);
      let studioGhibli = JSON.stringify(res)
      fs.writeFile('./lib/db/data.json', studioGhibli, err => {
          if (err) {
              console.log(err)
          } else {
              console.log('success')
          }
      })
  })
  .catch(function (error) {
    // handle error
    console.log('The error is ' + error);
  })

