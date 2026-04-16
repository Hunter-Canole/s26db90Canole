var express = require('express');
var router = express.Router();
const jewelry_controllers = require('../controllers/jewelries');

router.get('/', jewelry_controllers.jewelry_lists);

module.exports = router;



