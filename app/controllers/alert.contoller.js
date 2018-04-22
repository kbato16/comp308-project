let Alert = require('mongoose').model('Alert');

// for handling mongodb error message
let CustomError = require('./error.controller');

// A patient alerts to the nurse
exports.createAlert = (req, res, next) => {
    let alert = new Alert(req.body);
    alert.save((err) => {
        if (err) {
            return res.status(400).send({
                message: CustomError.getMongoDBErrorMessage(err)
            });
        } else {
            res.json(alert);
        }
    });
};