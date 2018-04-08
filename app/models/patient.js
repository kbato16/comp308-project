let mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    address: String,
    city: String,
    phoneNumber: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    }
},{
    collection: "patients"
});

mongoose.model( 'Patient', patientSchema );