const express = require('express');
const lotacaoController = require('../controllers/lotacao.controller');
const onibusController = require('../controllers/onibus.controller');
const itinerariesController = require('../controllers/itineraries.controller');

var app = express();

// bodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser(JSON));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = 3000;


app.listen(port, function () {
    console.log(`API is running on port ${port}`);
})

// Routes
app.get('/onibus', onibusController.getBus)
app.get('/itineraries/:id', itinerariesController.getItinerarie)
app.get('/lotacao', lotacaoController.getLotacao)