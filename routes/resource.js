var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jewelry_controller = require('../controllers/jewelries');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/jewelries', jewelry_controller.jewelry_create_post);
// DELETE request to delete Costume.
router.delete('/jewelries/:id', jewelry_controller.jewelry_delete);
// PUT request to update Costume.
router.put('/jewelries/:id', jewelry_controller.jewelry_update_put);
// GET request for one Costume.
router.get('/jewelries/:id', jewelry_controller.jewelry_detail);
// GET request for list of all Costume items.
router.get('/jewelries', jewelry_controller.jewelry_list);
module.exports = router;
