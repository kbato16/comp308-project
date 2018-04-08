let passport = require('passport');
let mongoose = require('mongoose');

module.exports = ()=>{
    let Patient = mongoose.model('Patient');

    passport.serializeUser((patient, done) => {
        done(null, patient.id);
    });

    passport.deserializeUser((id, done)=>{
        Patient.findOne({_id:id},'-password -salt', (err, patient)=>{
            done(err, patient);
        });
    });

    require('./strategies/local.js')();
};