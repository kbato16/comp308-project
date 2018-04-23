let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const vitalSchema = Schema({
  PID: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  Date: {
    type: Date,
    // Create a default 'created' value
    default: Date.now
  },
  HeartRate: String,
  Temperature: String,
  Weight: String,
  RespRate: String,
  SBloodPressure: String,
  DBloodPressure: String,
}, {
  collection: "vitals"
});
mongoose.model('Vital', vitalSchema);
