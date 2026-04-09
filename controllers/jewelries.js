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

exports.jewelry_create_post = async function(req, res) {
console.log(req.body)
let document = new Jewelry();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.name = req.body.name;
document.cost = req.body.cost;
document.description = req.body.description;
try{
let result = await document.save();
res.send(result);
}
catch(err){
    res.status(500).json({ error: err.message });
}
};
exports.jewelry_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Jewelry.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle Costume delete from on DELETE.
exports.jewelry_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.jewelry_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry update PUT' + req.params.id);
};

