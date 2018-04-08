let mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    studentNumber: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phoneNumber: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    program: String,
    courses: [{type:mongoose.Schema.Types.ObjectId, ref:'Course'}]
    
},{
    collection: "patients"
});

mongoose.model( 'Patient', patientSchema );