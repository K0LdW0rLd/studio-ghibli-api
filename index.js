// Install express
const express = require('express')
// Add variable to express
const app = express();
const StudioRoutes = require('./lib/routes/StudioGhibli')


// Make sure the library is listening
// .listen() - application will wait for requests from a specific port
app.listen(8080, () => {
    console.log('I am listening.....');
});

// When user requests at the root / of our application, .use references a particular router
app.use('/', StudioRoutes);
