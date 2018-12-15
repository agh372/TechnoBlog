/*module.exports = {

 'LOCAL_DB_NAME' : 'mongodb://localhost:27017/blog'

};
*/

var mongoose = require('mongoose');
module.exports = function (passport) {
mongoose.connect('mongodb://localhost:27017/blog');


}
