let Patient = require('mongoose').model('Patient');
let Condition = require('mongoose').model('Condition');
let Vital = require('mongoose').model('Vital');
let DataSet = require('mongoose').model('DataSet');
let ml = require('machine_learning');

exports.diagnose = (req, res, next) => {
    let data;
    let result;
    let vitals = req.body;
    let results = [];
    DataSet.find({}).lean().exec((err, dataSet) => {
        data= dataSet[0]["data"];
        result= dataSet[0]["result"];
        let dt = new ml.DecisionTree({
            data: data,
            result: result
        });
        dt.build();
        
        for(var key in vitals){
            if(key != "Date"){
                try{
                    results.push(parseFloat(vitals[key]));
                }catch (err){
                    results.push(vitals[key]);
                }
            }
        }
        //Field vitals
        var classificationResult = dt.classify(results);
        var tree = dt.getTree();
        dt.prune(1.0);
        res.json(classificationResult);
    });
};