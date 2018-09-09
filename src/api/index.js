const URL ='http://api.tvmaze.com/schedule?country=US&date=2017-03-13';

export default () => {
    return fetch(URL) 
    .then (responese => {Promise.all([responese,responese.json()])

    })
}