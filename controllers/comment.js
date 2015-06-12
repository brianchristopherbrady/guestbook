var fs = require('fs');
var path = require('path');
var Models = require('../models');

module.exports = {
    //find comments and send them as a viewmodel
	index: function(req, res) {
        var viewModel = Models.Comment.find(function (err, comments) {
            res.render('comment', {
            comments: comments
        });
});
    },
    //save a new comment
	create: function(req, res) {
        var newComment = new Models.Comment({
            timestamp: Date.now(),
            name: req.body.names,
            comment: req.body.comSec
        });
        
            newComment.save(function(err, Comment) {
            res.redirect('/comment');
        });
	}
};