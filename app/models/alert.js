let mongoose = require('mongoose');

let Schema = mongoose.Schema;
const alertSchema = Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Paitent'
    },
    nurseId: {
        type: Schema.Types.ObjectId,
        ref: 'Nurse'
    },
    created: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    },
}, {
    collection: "alerts"
  });

mongoose.model('Alert', alertSchema);