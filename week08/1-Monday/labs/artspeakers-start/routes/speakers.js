const express = require('express');
const router = express.Router();
const dataFile = require('../data/data.json')

router.get('/speakers', (req, res) => {
    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];

    pageSpeakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    
    res.render("speakers", {
        artwork : pagePhotos,
        speakers : pageSpeakers,
        speakerNav : pageSpeakers,
        pageTitle : "Roux Meetups--Speakers",
        pageID: "speakerList"
    })
})

router.get("/speakers/:speakerid", (req, res) => {

    let speakerArry = dataFile.speakers;
    let photos = [];
    var speakers = [];
    var currentSpeaker;
    speakerArry.forEach((speakerObj) => {
        if(speakerObj.shortname == req.params.speakerid){
            photos = photos.concat(speakerObj.artwork)
            speakers.push(speakerObj)
            currentSpeaker = speakerObj.name
        }
    })

    //console.log(`photos: ${photos} speaker object: ${pageSpeakers}`);
    
    res.render("speakers", {
        artwork : photos,
        speakers : speakers,
        speakerNav : speakerArry,
        pageTitle : currentSpeaker,
        pageID : "speakerDetail"
        
    })
})
module.exports = router;