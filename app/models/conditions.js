let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const conditionSchema = Schema({
  Name: String
}, {
  collection: "conditions"
});
mongoose.model('Condition', conditionSchema);
