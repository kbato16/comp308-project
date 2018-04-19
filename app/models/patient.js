let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const patientSchema = Schema({
  firstName: String,
  lastName: String,
  password: String,
  vitals: [{
    type: Schema.Types.ObjectId,
    ref: 'Vitals'
  }],
  conditions: [{
    type: Schema.Types.ObjectId,
    ref: 'Conditions'
  }]
}, {
  collection: "patients"
});
mongoose.model('Patient', patientSchema);
