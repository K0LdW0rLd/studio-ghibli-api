// Controller will relate to a specific model
// So you want to import that model here
const Studio = require('../models/StudioGhibli');

module.exports = {
    // Inside each controller method, you're defining the logic of your app
    // Each 'endpoint' will contain specific instructions on what data should be displayed
    index: (req, res) => {
        Studio.find({}).then ( (ghibli) => {
            res.json(ghibli)
        })
    },
    create: (req, res) => {},
    update: (req, res) => {},
    delete: (req, res) => {}
}