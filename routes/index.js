'use strict';
var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Product = require("../models/product");
var Cart  = require("../models/cart");

/* GET home page. */
router.get('/', function (req, res) {
    Product.find({}, function(err, prodList){
        if(err){
            res.render(error, {});
        }
        else{

            var prodConcatList = [];
            for(var i = 0; i < prodList.length; i+=3){
                //prodConcatList.push(split())
                prodConcatList.push(prodList.slice(i, i+3));
            }
            res.render('shop/index', {products: prodConcatList});
        }
    });
});

router.get('/add-to-cart/:id', function(req, res){
    console.log("Add to cart route accesssed\n\n\n");
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product){
        if(err){
            res.send("product not found");
        }
        cart.add(product, productId);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })
});
module.exports = router;
