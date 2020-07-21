const express = require('express');
const router = express.Router();

let dataFile = require('../data/data.json')
//{speakers : [{artwork: [imgs]},{},{}]}
router.get('/', (req, res) => {

    let pageSpeakers = dataFile.speakers;
    let pagePhotos = []

    pageSpeakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    console.log(pagePhotos);

    res.render("index", {
        pageTitle : "Art speakers",
        artwork : pagePhotos,
        pageID : 'home',
        spaekerNav : pageSpeakers
        
    })
})


module.exports = router;