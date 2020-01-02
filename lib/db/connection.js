// Install Mongoose
const mongoose = require ('mongoose')

// Reset promise
mongoose.Promise = Promise;

let mongoURL = "";
if (process.env.NODE_ENV === "production") {
    mongoURL = process.env.DB_URL;
  } else {
    mongoURL = "mongodb://localhost/studio";
  }

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useMongoClient:true
})
.then( feedback =>
    console.log('connected to the db'))
    .catch( error =>
        console.log('It has broke, here\'s why ', error)
        );
module.exports = mongoose ;