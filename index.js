// Install express
const express = require('express')
// Add variable to express
const app = express();


// Make sure the library is listening
// .listen() - application will wait for requests from a specific port
app.listen(8080, () => {
    console.log('I am listening.....');
})