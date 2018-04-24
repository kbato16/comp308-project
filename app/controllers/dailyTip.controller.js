let Patient = require('mongoose').model('Patient');
let DailyTip = require('mongoose').model('DailyTip');

// for handling mongodb error message
let CustomError = require('./error.controller');

exports.create = (req, res) => {
    let patient = req.patient;
    let dailyTip = new DailyTip(req.body);
    dailyTip.patientId = patient._id;

    dailyTip.save((err) => {
        if (err) {
            return res.status(400).send({
                message: CustomError.getMongoDBErrorMessage(err)
            });
        }
        res.json(dailyTip);
    });
}