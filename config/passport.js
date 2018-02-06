var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require("../models/user");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('signUp', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true       
    },
    function(req, email, password, done){
        console.log("inside the sstrategy function");
        User.findOne({'email': email}, function(err, user){
            if(err){
                return done(err);
            }
            if(user){
                return done(null, false, {meassage: "User already available"});
            }

            var newUser = new User();
            newUser.email = email;
            newUser.password = password;
            newUser.save(function(err, result){
                if(err){
                    return done(err);
                }
                else{
                    return done(null, result);
                }
            });
        })
    }
));

passport.use('signIn', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    console.log("passport Strategy executed\n\n");
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            done(null, false, {message: "Invalid email id"});
            console.log("invalid email id\n\n");
            return;
        }
        if( !(user.password === password) ){
            return done(null, false, {message: "Incorrect password"});
        } 

        return done(null, user);
    });
}));