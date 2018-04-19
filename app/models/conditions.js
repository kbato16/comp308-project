let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const conditionSchema = Schema({
  Name: String,
  PID: [{
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  }]
}, {
  collection: "conditions"
});
mongoose.model('Condition', conditionSchema);
