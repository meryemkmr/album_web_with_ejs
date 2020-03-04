const express = require('express')
const router = express.Router()

let data = require('../data/data.json')


router.get('/', (req, res) => {
    let tracks = [];
    let albums = data.Albums

    albums.forEach((albumsObj)=>{
        tracks.concat(albumsObj.tracks)
    })
    
    
    res.render('index',{
        pageTitle: 'Home',
        pageId: "home",
        tracks: tracks,
        albums:data.Albums
    })
})

module.exports = router