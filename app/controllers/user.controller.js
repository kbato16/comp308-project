let Passport = require('passport');
let User = require('mongoose').model('User');
let Patient = require('mongoose').model('Patient');
let Nurse = require('mongoose').model('Nurse');
let Promise = require('promise');

// for handling mongodb error message
let CustomError = require('./error.controller');

exports.signin = function (req, res, next) {
    Passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            // Use the Passport 'login' method to login
            req.login(user, (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};


exports.signup = function (req, res) {
    const user = new User(req.body);
    user.provider = 'local';

    // Try saving the User
    user.save((err) => {
        if (err) {
            return res.status(400).send({
                message: CustomError.getMongoDBErrorMessage(err)
            });
        } else {
            let role;
            if (user.userType) {
                role = new Nurse(req.body);
            } else {
                role = new Patient(req.body);
            }

            role.userId = user._id;

            role.save((err) => {
                if (err) {
                    return res.status(400).send({
                        message: CustomError.getMongoDBErrorMessage(err)
                    });
                } else {
                    if (user.userType) {
                        user.nurseId = role._id;
                    } else {
                        user.patientId = role._id;
                    }
                    user.save((err) => {
                        if (err) {
                            return res.status(400).send({
                                message: CustomError.getMongoDBErrorMessage(err)
                            });
                        } else {
                            // Remove sensitive data before login
                            user.password = undefined;
                            user.salt = undefined;

                            // Use the Passport 'login' method to login
                            req.login(user, function (err) {
                                if (err) {
                                    res.status(400).send(err);
                                } else {
                                    res.json(user);
                                }
                            });
                        }
                    })
                }
            });
        }
    });
}


exports.saveOAuthUserProfile = function (req, profile, done) {
    // Try finding a user document that was registered using the current OAuth provider
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        // If an error occurs continue to the next middleware
        if (err) {
            return done(err);
        } else {
            // If a user could not be found, create a new user, otherwise, continue to the next middleware
            if (!user) {
                // Set a possible base username
                const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

                // Find a unique available username
                User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                    // Set the available user name 
                    profile.username = availableUsername;

                    // Create the user
                    user = new User(profile);

                    // Try saving the new user document
                    user.save(function (err) {
                        // Continue to the next middleware
                        return done(err, user);
                    });
                });
            } else {
                // Continue to the next middleware
                return done(err, user);
            }
        }
    });
};
