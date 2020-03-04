const express = require('express')
const router = express.Router()

let data = require('../data/data.json')


router.get('/:albumid', (req, res) => {
    let tracks = [];
    let albums = [];

    data.Albums.forEach((albumsObj) => {
        if(albumsObj.shortTitle == req.params.albumid){
            albums.push(albumsObj);
            tracks = tracks.concat(albumsObj.tracks);
        }
    });
    
    res.render('albums',{
        tracks: tracks,
        albums: albums 
    })
})

module.exports = router