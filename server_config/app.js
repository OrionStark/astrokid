const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const userServices = require('./Model/services/user_services');
const constellations = require('./Model/services/constellations_service');
var dir = __dirname + '/../dist/';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

let server = app.listen(4322, () => {
    let port = server.address().port;
    console.log("Server started on " + port.toString());
});
app.get('/users', (req, res) => {
    userServices.userList()
        .then((users) => {
            res.send(users);
        })
});

app.post('/users/register', (req, res) => {
    userServices.register(req.body)
        .then((responses) => {
            res.json(responses);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
});
app.post('/user/login', (req, res) => {
    userServices.login(req.body)
        .then((responses) => {
            res.json(responses);
        })
        .catch((error) => {
            res.status(400).send(error.message);
        })
});
app.get('/constellation/:id', (req, res) => {
    constellations.getById(req.params.id)
        .then((respones) => {
            res.json(respones);
        })
        .catch((error) => {
            res.status(400).send("Error geting an information");
        })
});
app.get('/constellations', (req, res) => {
    constellations.getAllConstellations()
        .then((responses) => {
            res.json(responses);
        })
        .catch((error) => {
            res.status(400).send("Error getting an information");
        })
});