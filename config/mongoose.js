let config = require('./config');
let mongoose = require('mongoose');
module.exports = ()=>{
    const db = mongoose.connect(config.db);
    require('../app/models/patient');
    return db;
};
