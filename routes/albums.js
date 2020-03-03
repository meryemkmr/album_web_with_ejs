const express = require('express')
const router = express.Router()

let data = require('../data/data.json')


router.get('/albums', (req, res) => {

    
    
    

    console.log(pagePhotos);
    res.render('albums')
})

module.exports = router