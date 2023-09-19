var express = require('express');
var router = express.Router();

var user = require('../controller/insertcontroller')

/* GET home page. */
router.post('/insert',user.insert)

module.exports = router;
