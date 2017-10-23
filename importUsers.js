var mongoose = require('mongoose');
var User = require('./models/user.js');
var srcListe = require('./data/listeUser.js');


var promise = mongoose.connect('mongodb://localhost:27017/evaluation', {
    useMongoClient: true
});

promise.then(function(db) {
    console.log('BDD connectée');

    srcListe.forEach(function(userSrc) {
        console.log(userSrc);

        var UserToSave = new User(userSrc);

        UserToSave.save(function(err,success) {
            if(err) {
                return console.log(err);
            }
            else {
                console.log(success);
            }
        });
    })
});