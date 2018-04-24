let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');

// for handling mongodb error message
let CustomError = require('./error.controller');

exports.readPatients = (req, res, next) => {
    Patient.find({}).populate('userId').exec((err, patients)=> {
        if(err){
            console.log(err);
        }
        else{
            res.json(patients);
        }
    });
};

exports.createVital = (req, res, next) => {
    let patient = req.patient;
    let vital = new Vital(req.body);
    
    vital.PID = patient;
    vital.save((err) => {
        if (err) {
            return res.status(400).send({
                message: CustomError.getMongoDBErrorMessage(err)
            });
        } else {
            patient.vitals.addToSet(vital);
            patient.save((err)=>{
                if (err) {
                    return res.status(400).send({
                        message: CustomError.getMongoDBErrorMessage(err)
                    });
                } else {
                    res.json(patient);
                }
            });
        }
    });
}

exports.patientByID = function (req, res, next, id) {
    Patient.findById(id).populate('vitals').exec((err, patient) => {
        if (err) {
            return next(err);
        } 
        
        if (!patient) {
            return next(new Error('Failed to load patient '+ id));
        }

        // yay, we found the patient@
        req.patient = patient;
        next();
    });
};