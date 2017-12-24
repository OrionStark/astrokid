const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const userServices = require('./Model/services/user_services');
const ObjectID = require('mongodb').ObjectID;
var dir = __dirname + '/../dist/';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// Database connection
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/Astrokid', (err, db) => {
        if (err) throw err;
        closure(db);
    })
}

// Response handling
let responses = {
    status: 200,
    data: [],
    message: null
};

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
})
/*
app.post('/users/register', (req, res) => {
    const data = req.body;
    connection((db) => {
        db.collection('user')
            .insertOne(data, (err, res) => {
                if (err) {
                    throw err;
                }
                responses = {
                    status: 200,
                    data: [],
                    message: "Success"
                }
            });
        res.json(responses);
    });
});
app.get('/users', (req, res) => {
    connection((db) => {
        db.collection('user')
            .find()
            .toArray()
            .then((userlist) => {
                responses.data = userlist;
                res.json(responses);
            })
            .catch((err) => {
                res.send("Error");
            });
    });
});
*/