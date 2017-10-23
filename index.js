const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Particle = require("particle-api-js");
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