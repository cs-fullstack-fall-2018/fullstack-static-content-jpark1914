var express = require('express');
var router = express.Router();

router.get('/', (req,res, next) =>{
    res.redirect('http://linkedin.com');
});

module.exports = router;