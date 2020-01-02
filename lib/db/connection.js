// Install Mongoose
const mongoose = require ('mongoose')
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/studio";
  }

// Reset promise
mongoose.Promise = Promise;

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then( feedback =>
    console.log('connected to the db'))
    .catch( error =>
        console.log('It has broke, here\'s why ', error)
        );
module.exports = mongoose ;