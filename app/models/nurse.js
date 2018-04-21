let mongoose = require('mongoose');
let crypto = require('crypto');

let Schema = mongoose.Schema;
const nurseSchema = Schema({
    patients: [{                    // Only use for nurse type (Hard-coding)
        type: Schema.Types.ObjectId,
        ref: 'Paitent'
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
        collection: "nurses"
    });

// Configure the 'usersSchema' to use getters and virtuals when transforming to JSON
nurseSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Nurse', nurseSchema);