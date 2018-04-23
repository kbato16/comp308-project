let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');

// for handling mongodb error message
let CustomError = require('./error.controller');

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

exports.listByPatientId = (req, res) => {
    let query = {
        patientId: req.patient.PID
    };

    Vital.find(query, (err, vitalsList)=> {
        if (err) {
            return res.status(400).send({
                message: CustomError.getMongoDBErrorMessage(err)
            });
        } 

        res.json(vitalsList);
    });
};

exports.read = function (req, res) {
    res.status(200).json(req.vital);
};

exports.update = function (req, res) {
    let vital = req.body;

    Vital.findByIdAndUpdate(vital._id, vital, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json(vital);
        }
    });
};

exports.delete= function (req, res) {
    Vital.findByIdAndRemove(req.vital._id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json(req.vital);
        }
    });
};

exports.vitalByID = function (req, res, next, id) {
    Vital.findById(id, (err, vital) => {
        if (err) {
            return next(err);
        } 
        
        if (!vital) {
            return next(new Error('Failed to load vital '+ id));
        }

        // yay, we found the vital
        req.vital = vital;
        next();
    });
};