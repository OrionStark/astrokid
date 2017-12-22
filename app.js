const express = require("express");
const bodyParser = require("body-parser");
var db;
const app = express();
var dir = __dirname + '/dist/';

app.use(bodyParser.json());
app.use(express.static(dir));
let server = app.listen(4322, () => {
    let port = server.address().port;
    console.log("Server started on " + port.toString());
});