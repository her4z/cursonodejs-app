const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
// Express HBS Engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        usuario: "sEbastian hERas",
    });

});
app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.get('/test', (req, res) => {
    res.send('Test');
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});