var User     = require('../models/User');
var Post     = require('../models/Post');
var Comment     = require('../models/Comment');
var path = require('path');



module.exports = function(app,passport) {

app.delete('/delete_user/:userId', function(req, res) {
        User.remove({
            _id: req.params.userId
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


};
function isLoggedIn(req, res, next) {

    
    if (req.isAuthenticated())
        return next();


return next();
    //res.redirect('/login');
}


  
	

