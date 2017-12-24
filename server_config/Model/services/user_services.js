var dbConnection = require('./db_connection');
var q = require('q');
var userServices = {
    register: register,
    login : login,
    userList : users
}

module.exports = userServices;

function register(data) {
    var holdRes = q.defer();
    dbConnection((db) => {
        db.collection('user')
            .findOne({ username: data.username }, (err, result) => {
                if (result) {
                    holdRes.reject("Username has already taken by someone");
                } else {
                    createUser();
                }
            });
    })
    function createUser() {
        dbConnection((db) => {
            db.collection('user')
                .insertOne(data, (err, res) => {
                    if (err) {
                        holdRes.reject("There's some errors");
                    } else {
                        holdRes.resolve({
                            status: "REGISTER_SUCCESS",
                            message: "You've been regeistered"
                        });
                    }
                });
        });
    }
    return holdRes.promise;
};

var login = (data) => {
    var holdRes = q.defer()
    dbConnection((db) => {
        db.collection('user')
            .findOne({ username: data.username, password: data.password }, (err, res) => {
                if (err) holdRes.reject(err.message);
                if (!res) {
                    holdRes.resolve({
                        login_status: "FAILED",
                        message: "Invalid password, please try again"
                    });
                } else {
                    holdRes.resolve({
                        login_status: "SUCCESS",
                        message: "Login success",
                        data: res
                    });
                }
            });
    });

    return holdRes.promise;
};

function users() {
    // Create promise to hold the data
    var holdRes = q.defer();
    dbConnection((db) => {
        db.collection('user')
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
};