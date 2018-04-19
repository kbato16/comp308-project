let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');
exports.readPatients = (req, res, next) => {
    Patient.find({}, (err, patients)=> {
        if(err){
            console.log(err);
        }
        else{
            res.json(patients);
        }
    });
};