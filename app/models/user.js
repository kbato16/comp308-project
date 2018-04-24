let mongoose = require('mongoose');
let crypto = require('crypto');

let Schema = mongoose.Schema;
const userSchema = Schema({
  firstName: String,
  lastName: String,
  gender: {
    type: Boolean,
    default: false, // Default: MALE
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  prov: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    index: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  salt: {
    type: String
  },
  provider: {
    type: String,
    // Validate 'provider' value existance
    required: 'Provider is required'
  },
  providerId: String,
  providerData: {},
  created: {
    type: Date,
    // Create a default 'created' value
    default: Date.now
  },
  userType: {                     // false: patient, true: nurse
    type: Boolean,
    default: false,               // default: patient
  },
  patientId: {                    // userType: false
    type: Schema.Types.ObjectId,
    ref: 'Paitent'
  },
  nurseId: {                      // userType: true
    type: Schema.Types.ObjectId,
    ref: 'Nurse'
  },
}, {
    collection: "users"
  });

// Use a pre-save middleware to hash the password
userSchema.pre('save', function (next) {
  if (this.password) {
      this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
      this.password = this.hashPassword(this.password);
  }

  next();
});

// Create an instance method for hashing a password
userSchema.methods.hashPassword = function (password) {
  //digest parameter required in version 9 of Node.js
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating user
userSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};

userSchema.statics.findUniqueUsername = function (username, suffix, callback) {
  const possibleUsername = username + (suffix || '');

  this.findOne({
      username: possibleUsername
  }, (err, user) => {
      // If an error occurs call the callback with a null value, otherwise find find an available unique username
      if (!err) {
          // If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
          if (!user) {
              callback(possibleUsername);
          } else {
              return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
          }
      } else {
          callback(null);
      }
  });
};

// Configure the 'usersSchema' to use getters and virtuals when transforming to JSON
userSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

mongoose.model('User', userSchema);