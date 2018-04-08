let mongoose = require('mongoose');
let Patient = require('../models/patient');
let passort = require('passport');

exports.index = (req, res, next) => {
    res.json({"apiResponse": "Working API"});
};
