let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');
let DataSet = require('mongoose').model('DataSet');
let ml = require('machine_learning');

exports.diagnose = (req, res, next) => {
    let data;
    let result;
    let vitals = req.vitals;

    DataSet.find({}).lean().exec((err, dataSet) => {
        data= dataSet[0]["data"];
        result= dataSet[0]["result"];
        let dt = new ml.DecisionTree({
            data: data,
            result: result
        });
        dt.build();

        //TODO build form to insert values
        //Field vitals
        var classificationResult = dt.classify(vitals);
        var tree = dt.getTree();
        dt.prune(1.0);
        res.json(classificationResult);
    });
};