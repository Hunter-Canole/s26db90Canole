var express = require('express');
var router = express.Router();
const passport = require('passport');
// Require controller modules.
var api_controller = require('../controllers/api');
var jewelry_controller = require('../controllers/jewelries');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};

// AUTH
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/jewelries', jewelry_controller.jewelry_create_post);
// DELETE request to delete Costume.
router.delete('/jewelries/:id', jewelry_controller.jewelry_delete);
// PUT request to update Costume.
router.put('/jewelries/:id', jewelry_controller.jewelry_update_put);
// GET request for one Costume.
router.get('/jewelries/delete', jewelry_controller.jewelry_delete_Page)
router.get('/jewelries/update',secured, jewelry_controller.jewelry_update_Page);
router.get('/jewelries/create', jewelry_controller.jewelry_create_Page);
router.get('/jewelries/detail', jewelry_controller.jewelry_view_one_Page);
router.get('/jewelries/:id', jewelry_controller.jewelry_view_all_Page);
// GET request for list of all Costume items.
router.get('/jewelries', jewelry_controller.jewelry_list);
//router.get('/jewelries/:id', jewelry_controller.jewelry_detail);
module.exports = router;
