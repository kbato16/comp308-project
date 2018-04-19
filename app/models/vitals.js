let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const vitalSchema = Schema({
  PID: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  Date: String,
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
