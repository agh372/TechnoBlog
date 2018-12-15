var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var PostSchema   = new Schema({
    username: String,
    title:String,
    shortDescription:String,
    longDescription:String,
    date:String,
    category:String,
    imageUrl:String,
    tag: [{
         text:String
      
    }],
    comments: [{
         body:String,
         username:String,
         date:String
        }]

});
PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);

