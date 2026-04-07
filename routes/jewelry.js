var express = require('express');
var router = express.Router();
const jewelry_controllers = require('../controllers/jewelries');

router.get('/', jewelry_controllers.jewelry_view_all_Page);

module.exports = router;



