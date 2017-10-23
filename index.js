const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Particle = require("particle-api-js");
var User = require("./models/user.js");
const app = express();

var server = require("http").createServer(app);
const io = require("socket.io")(server);
var particle = new Particle();
var token;



// instanciation de la connection à mongo
var promise = mongoose.connect("mongodb://localhost:27017/evaluation", {
    useMongoClient: true
});
// Si la connection réussie
promise.then(
    () => {
        console.log("Base de données connectée");
        // On démarre le serveur sur le port 3000
       server.listen(3000, function() {
            console.log("L'application écoute sur le port 3000 !")
        });
    },
    err => {
        console.log("MONGO ERROR");
        console.log(err);
    }
);

// parse application/x-www-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());

// configuration des routes statics
app.use('/static', express.static('./client/app'));

// servir l'application
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

// API
// renvoyer la collection des utilisateurs
app.get('/home', function(req, res) {
    User.find({}, function(err, collection) {
        if(err) {
            console.log(err);
            return res.send(500);
        }
        else {
            return res.send(collection);
        }
    });
});

// renvoyer un utilisateur en fonction de son ID
// app.get('/api/liste/:id', function(req, res) {
//     console.log(req.params);
//     console.log(req.params.id);
//     User.findOne({
//         "_id": req.params.id
//     }, function(err, monobject) {
//         if(err) {
//             console.log(err);
//             return res.send(err);
//         }
//         else {
//             res.send(monobject);
//         }
//     });
// });