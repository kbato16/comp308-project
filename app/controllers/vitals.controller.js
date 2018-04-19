let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');
exports.readVitals = (req, res, next) => {
    Vital.find({}, (err, vitals) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(vitals);
        }
    });
};