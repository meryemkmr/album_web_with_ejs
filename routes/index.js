const express = require('express')
const router = express.Router()

let data = require('../data/data.json')


router.get('/', (req, res) => {

    
    
    

    console.log(pagePhotos);
    res.render('index')
})

module.exports = router