
const express = require('express')
const app = module.exports = express()
const path = require('path')

const optionsCache = {
    etag: true,
    maxAge: 31537000,
    redirect: true
}

app.use(express.static(path.join(__dirname, 'public'), optionsCache))
app.use(express.static(path.join(__dirname, 'content'), optionsCache))
app.use(express.static(path.join(__dirname, 'js'), optionsCache))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {

    // Send back a response and end the connection
    res.render('home.ejs');
    
})

const port = process.env.port || 8082;
 
app.listen(port)