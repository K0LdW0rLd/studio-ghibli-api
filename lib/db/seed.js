const data = require('./data.json');
const Studio = require('../models/StudioGhibli');

const studioGhibliData = data.map(item => {
    const studio = {}
    studio.title = item.title
    studio.description = item.description
    studio.director = item.director
    studio.producer = item.producer
    studio.release_date = item.release_date
    studio.rt_score = item.rt_score
    return studio
})

console.log(studioGhibliData);

Studio.remove({})
    .then(() => {
        Studio.create(studioGhibliData)
            .then(ghibli => {
                console.log(ghibli)
            })
            .catch(err => {
                console.log(err)
            })
    })