var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    "nom": String,
    "prenom": String
});

var User = mongoose.model('User', userSchema);

module.exports = User;