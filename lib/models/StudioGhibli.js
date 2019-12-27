const mongoose = require('../db/connection');
// Add Schema
const Schema = mongoose.Schema

const StudioGhibliSchema = new Schema({
    title: String,
    description: String,
    director: String,
    producer: String,
    release_date: Number,
    rt_score: Number
});

// Export module Schema
module.exports = mongoose.model('StudioGhibli', StudioGhibliSchema);