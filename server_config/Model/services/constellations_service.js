var dbConnection = require('./db_connection');
var q = require('q');
const ObjectID = require('mongodb').ObjectID;

var constellations = {
    getById: getConstellationById,
    getAllConstellations: getAllConstellations
}

module.exports = constellations;

function getConstellationById(_id) {
    var resHold = q.defer();
    var objectId = new ObjectID(_id);
    dbConnection((db) => {
        db.collection('star_constellations')
            .findOne({"_id": objectId}, (err, result) => {
                if (err) resHold.reject("There's an error");
                if (result) {
                    resHold.resolve(result);
                }
            });
    });

    return resHold.promise;
}

function getAllConstellations() {
    var holdRes = q.defer();
    dbConnection((db) => {
        db.collection('star_constellations')
            .find()
            .toArray()
            .then((result) => {
                holdRes.resolve(result);
            })
            .catch((err) => {
                holdRes.resolve({
                    status: 400,
                    message: "There are some errors"
                });
            });
    });

    return holdRes.promise;
}