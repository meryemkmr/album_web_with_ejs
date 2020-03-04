const express = require('express');
const app = express();
let PORT = 3000;

// public folder
app.use(express.static('public'))


// set view folder

app.set('view engine','ejs')
app.set('views', 'views')

//index.ejs
//speakers.ejs



//set routes
//index.js
//speakers.js
//
app.use(require('./routes/index'))
app.use(require('./routes/albums'))



app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})