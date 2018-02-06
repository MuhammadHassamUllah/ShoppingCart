'use strict';
var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET register page. */
router.get('/register', function (req, res) {
    res.render('user/register', {});
});

/*POST register form data */
router.post('/register', passport.authenticate('signUp', {
    successRedirect: '/',
    failureRedirect: '/users/register'
}));

/*GET sign in form */
router.get('/signin', function(req, res){
    console.log("The router has been exec successfully\n\n\n");
    res.render('user/signin', {});
});


/*POST signup form data */
router.post('/signin', passport.authenticate('signIn', {
    successRedirect: '/',
    failureRedirect: '/users/signin'
}));

/*GET profile view */
router.get('/profile', isLoggedIn, function(req, res){
    res.render('user/profile', {});
});

/*Perform log out */
router.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/');
});
module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.redirect('/users/signin');
    }
}