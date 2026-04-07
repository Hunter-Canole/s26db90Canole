var Jewelry = require('../models/jewelry');
// List of all Costumes
exports.jewelry_list = async function(req, res) {
try{
const theJewelries = await Jewelry.find();
res.send(theJewelries);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific Costume.
exports.jewelry_view_all_Page = async function(req, res) {
try{
const theJewelries = await Jewelry.find();
res.render('jewelry', { title: 'Jewelry Search Results', results: theJewelries });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.jewelry_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry create POST');
};
// Handle Costume delete from on DELETE.
exports.jewelry_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.jewelry_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry update PUT' + req.params.id);
};

