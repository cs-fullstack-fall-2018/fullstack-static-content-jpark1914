var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/architect', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/architect.html'));
});

router.get('/art', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/art.html'));
});

router.get('/band', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/band.html'));
});
router.get('/food', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/food.html'));
});
module.exports = router;
