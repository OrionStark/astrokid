const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const objectID = mongodb.objectID;
const sessionApp = require("express-session");
var db;
const app = express();
var dir = __dirname + '/dist/';

app.use(bodyParser.json());
app.use(express.static(dir));
let server = app.listen(4322, () => {
    let port = server.address().port;
    console.log("Server started on " + port.toString());
});
app.get("/tatasurya/data", (req, res) => {
    console.log("You got that!...");
});
/*
mongodb.connect('myMongoDBURL', (err, database) => {
    if(err){
        console.log("Connection through database was error");
        process.exit;
    }
    db = database;

    let server = app.listen(4322, () => {
        let port = server.address().port;
        console.log("Server started on " + port.toString());
    });
});

app.get("/planets/:id", (request, response) => {
    db.collection("Planets").findOne({_id: new objectID(request.params.id)}, (err, doc) => {
        if(err){
            // Just for awhile XD
            // I'll change it later
        }
        else {
            response.status(200).json(doc);
        }
    });
});
app.get("/stars/:id", (request, response) => {
    db.collection("Stars").findOne({ _id: new objectID(request.params.id) }, (err, doc) => {
        if(err){
            // LoL
        }
        else{
            response.status(200).json(doc);
        }
    });
});
app.get("/galaxies/:id", (request, response) => {
    db.collection("Galaxies").findOne({ _id: new objectID(request, params.id)}, (err, doc) => {
        if(err){
            //
        }
        else{
            response.status(200).json(doc);
        }
    });
});
app.get("/commets/:id", (request, response) => {
    db.collection("Commects").findOne({ _id: new objectID(request, params.id)}, (err, doc) => {
        //
    });
});
*/