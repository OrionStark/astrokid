var dbConnection = require('./db_connection');
var bcrypt = require('bcryptjs');
var config = require('../../config/configuration');
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
                    bcrypt.genSalt(config.saltRounds, (err, salt) => {
                        bcrypt.hash(data.password, salt, (err, hash) => {
                            data.password = hash;
                            createUser();
                        });
                    });
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

function login(data) {
    var holdRes = q.defer()
    dbConnection((db) => {
        db.collection('user')
            .findOne({ username: data.username}, (err, responses) => {
                if (err) holdRes.reject(err.message);
                if (!responses) {
                    holdRes.resolve({
                        login_status: "FAILED",
                        message: "Your username is invalid"
                    });
                } else {
                    // Compare the entered password with hashed password in the databases;
                    bcrypt.compare(data.password, responses.password, (err, status) => {
                        if (err) holdRes.reject("There's some errors");
                        if (!status) {
                            holdRes.resolve({
                                login_status: "FAILED",
                                message: "Your password is not valid"
                            });
                        } else {
                            holdRes.resolve({
                                login_status: "SUCCESS",
                                message: "Login success",
                                data: responses
                            });
                        }
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