var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);