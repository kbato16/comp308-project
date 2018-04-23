let mongoose = require('mongoose');
let crypto = require('crypto');

let Schema = mongoose.Schema;
const patientSchema = Schema({
  vitals: [{
    type: Schema.Types.ObjectId,
    ref: 'Vital'
  }],
  condition: [{
    type: Schema.Types.ObjectId,
    ref: 'Condition'
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
    collection: "patients"
  });

// Configure the 'usersSchema' to use getters and virtuals when transforming to JSON
patientSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

mongoose.model('Patient', patientSchema);