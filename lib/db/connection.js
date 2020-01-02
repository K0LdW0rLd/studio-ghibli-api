// Install Mongoose
const mongoose = require ('mongoose')
let mongoURL = "";
if (process.env.NODE_ENV === "production") {
    mongoURL = process.env.DB_URL;
  } else {
    mongoURL = "mongodb://localhost/studio";
  }

// Reset promise
mongoose.Promise = Promise;

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then( feedback =>
    console.log('connected to the db'))
    .catch( error =>
        console.log('It has broke, here\'s why ', error)
        );
module.exports = mongoose ;