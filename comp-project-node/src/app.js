// some initializations
const express = require('express');
const hbs = require('hbs');
const path = require('path');

// some declarations
const app = express();
const port = process.env.PORT || 3000;
const partialsPath = path.join(__dirname, 'views/partials');
const views = path.join(__dirname, 'views');

// some usages
app.set('views', views);
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../node_modules')));
hbs.registerPartials(partialsPath);
app.use(express.json());

// main route
app.get('/', (req, res) => {
    res.render('index');
});

// listening procedure
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`go to http://localhost:${port}`);
});