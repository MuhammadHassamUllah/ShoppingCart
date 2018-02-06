'use strict';
var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Product = require("../models/product");

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
            console.log(prodConcatList);
            res.render('shop/index', {products: prodConcatList});
        }
    });
});


module.exports = router;
