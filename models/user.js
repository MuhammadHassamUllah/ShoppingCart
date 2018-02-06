var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/security");

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);