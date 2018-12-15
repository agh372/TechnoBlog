var User = require('../models/User');
var Post = require('../models/Post');
var Comment = require('../models/Comment');
var path = require('path');
module.exports = function(app, passport) {
	
    app.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
    });
	
    app.get('/posts/:pageNo', function(req, res) {
        Post.paginate({}, {
            offset: ((req.params.pageNo) - 1) * 3,
            limit: 3
        }, function(err, result) {
            res.json(result.docs);
            // result.docs
            // result.total
            // result.limit - 10
            // result.offset - 20
        });
    });
	
    app.get('/comments/:postId', function(req, res) {
        Post.findById(req.params.postId, function(err, post) {
            if (err)
                res.send(err);
            res.json(post.comments);
        });
    });
	
    app.get('/getUser', function(req, res) {

        //if(err.status == 500)
        if (typeof req.user == "undefined")
            res.json({
                'user': "Anonymous"
            });
        else
            res.json({
                'user': req.user.username
            });
       
    });
	
    app.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    });
	
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        //failureFlash : true // allow flash messages
    }));
	
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '#/re', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        //  failureFlash : true // allow flash messages
    }));
	
    app.get('/users/:userId', isLoggedIn, function(req, res) {
        User.findById(req.params.userId, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
	
    app.get('/post/:postId', function(req, res) {
        Post.findById(req.params.postId, function(err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    });
	
    app.get('/profile', isLoggedIn, function(req, res) {
        //    res.render('profile.html');
    });
    app.get('/bb', isLoggedIn, function(req, res) {
        res.render('bb.html');
    });
    /*
    app.get('/login', function(req, res) {
    //console.log(req.user.email,"efds");
            // render the page and pass in any flash data if it exists
            //res.render('register.html');
        });
    */
    app.post('/add_post', function(req, res) {
        var post = new Post();
        post.username = "req.user.username";
        post.title = req.body.title;
        post.date = req.body.date;
        post.category = req.body.category;
        post.shortDescription = req.body.shortDescription;
        post.longDescription = req.body.longDescription;
        var array = (req.body.tags).split(',');
        post.date = new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).split(' ').join('');
        tag = [];
        for (var i in array) {
            var ser = array[i];
            console.log(ser);
            var tagObj = {
                text: ser
            };
            post.tag.push(tagObj);
        }
        post.save(function(err) {
            if (err)
                res.send(err);
            res.json({
                message: 'Post created!'
            });
        });
    });
    /*serve=[];
    for (var i in req.body.serve) {
      var ser = req.body.serve[i];
    console.log(ser);
      var serveObj = { food: ser['food'], quan: ser['number'], status: ser['status'] };
     order.serve.push(serveObj);
    }*/
    /* Post.create({
                username: req.user.username,
                title: req.body.title,
                date: new Date().toLocaleDateString('en-GB', {  
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    }).split(' ').join('/'),
                category: req.body.category,
                longDescription: req.body.longDescription,
                shortDescription: req.body.shortDescription,
                tags : req.body.tags,
                done : false
            }, function(err, todo) {
                if (err)
                    res.send(err);

                // get and return all the todos after you create another
                Post.find(function(err, posts) {
                    if (err)
                        res.send(err)
                    res.json(posts);
                });
            });*/
    app.get('/tags/:tag/:pageNo', function(req, res) {
        /*Post.find({ 'tag.text': req.params.tag},function(err, tags) {
         if (err)
          res.send(err);


        res.json(tags);
        });*/
        Post.paginate({}, {
            offset: ((req.params.pageNo) - 1) * 3,
            limit: 3
        }, function(err, result) {
            var results = result.docs;
            var tags = [];
            for (var i = 0; i < results.length; i++) {
                for (var j = 0; j < results[i].tag.length; j++) {
                    console.log(results[i].tag[j].text);
                    if (req.params.tag == results[i].tag[j].text)
                        tags.push(results[i]);
                }
            }
            res.json(tags);
            // result.docs
            // result.total
            // result.limit - 10
            // result.offset - 20
        });
    });
    /* app.get('/posts/:pageNo', function(req, res) {
          
       Post.paginate({}, { offset: ((req.params.pageNo)-1)*3, limit: 3 }, function(err, result) {
        res.json(result.docs);
      // result.docs
      // result.total
      // result.limit - 10
      // result.offset - 20
    });
            
         
        });
    */
    app.post('/fileUpload', function(req, res) {
        // 
        console.log(res);
    });
    app.post('/add_comment/:postId', function(req, res) {
        //  var post = new Post();
        //     comment=[];
        //console.log(req.body.comment);
        /*for (var i in array) {
          var ser = array[i];
        console.log(ser);
          var tagObj = { text: ser };
         post.tag.push(tagObj);
        }

             */
        var commentObj = {
            body: req.body.body,
            username: req.user.username,
            date: new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }).split(' ').join('')
        };
        Post.findById(req.params.postId, function(err, post) {
            if (err)
                res.send(err);
            post.comments.push(commentObj);
            post.save(function(err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'comment created!'
                });
            });
            //res.json(post);
        });
    });
    app.get('/logout', isLoggedIn, function(req, res) {
        req.logout();
        res.redirect('/');
    });
    app.delete('/delete_post/:postId', function(req, res) {
        Post.remove({
            _id: req.params.postId
        }, function(err, post) {
            if (err)
                res.send(err);
            res.json({
                message: 'Successfully deleted'
            });
        });
    });
    app.delete('/delete_user/:userId', function(req, res) {
        User.remove({
            _id: req.params.userId
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({
                message: 'Successfully deleted'
            });
        });
    });
    app.get('/', function(req, res) {
        res.sendfile('../web/index.html');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    //return next();
    res.redirect('/login');
}