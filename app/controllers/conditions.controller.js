let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');
exports.readConditions = (req, res, next) => {
    Condition.find({}, (err, conditions)=> {
        if(err){
            console.log(err);
        }
        else{
            res.json(conditions);
        }
    });
};