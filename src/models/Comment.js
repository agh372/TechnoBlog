var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
    postId: String,
    body:String,
    date:Date,
    username:String
});

module.exports = mongoose.model('Comment', CommentSchema);

