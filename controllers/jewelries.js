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
exports.jewelry_lists = async function(req, res) {
  try {
    const data = await Jewelry.find();

    res.render("jewelry", {
      title: "Jewelry List",
      results: data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// for a specific Costume.
exports.jewelry_view_all_Page = async function(req, res) {
console.log("detail" + req.params.id)
 try {
 result = await Jewelry.findById( req.params.id)
res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
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

// Handle Costume delete from on DELETE.
exports.jewelry_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Jewelry.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle Costume update form on PUT.
 //Handle Costume update form on PUT.
exports.jewelry_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Jewelry.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.description) toUpdate.description = req.body.description;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
exports.jewelry_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Jewelry.findById( req.query.id)
res.render('jewelrydetail',
{ title: 'Jewelry  Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
exports.jewelry_create_Page = function(req, res) {
console.log("create view")
try{
res.render('jewelrycreate', { title: 'Jewelry Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a costume.
// query provides the id
exports.jewelry_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Jewelry.findById(req.query.id)
res.render('jewelryupdate', { title: 'Jewelry Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

exports.jewelry_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Jewelry.findById(req.query.id)
res.render('jewelrydelete', { title: 'Jewelry Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
