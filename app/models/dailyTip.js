let mongoose = require('mongoose');

let Schema = mongoose.Schema;
const dailyTipSchema = Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Paitent'
    },
    dailyTip: String,
    created: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    },
}, {
    collection: "dailyTips"
  });

mongoose.model('DailyTip', dailyTipSchema);