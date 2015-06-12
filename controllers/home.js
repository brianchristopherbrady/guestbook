//takes the browser's request and lets us send back a page or other information
var commentModel = require('../models/comment');
//render index
module.exports = {
	index: function(req, res) {
		res.render('index');
	}
};