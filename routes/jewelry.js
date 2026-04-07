// routes/jewelry.js
const express = require('express');
const router = express.Router();

// Correctly require the controller (match file name)
const jewelry_controllers = require('../controllers/jewelries');

// Route to render all jewelry page
router.get('/', jewelry_controllers.jewelry_view_all_Page);

// Route to get all jewelry as JSON
router.get('/list', jewelry_controllers.jewelry_list);

// Export the router
module.exports = router;

