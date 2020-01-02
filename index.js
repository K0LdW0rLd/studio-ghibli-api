// Install express
const express = require('express')
// Add variable to express
const app = express();
const StudioRoutes = require('./lib/routes/StudioGhibli');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Make sure the library is listening
// .listen() - application will wait for requests from a specific port

// When user requests at the root / of our application, .use references a particular router
app.use('/studio', StudioRoutes);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
