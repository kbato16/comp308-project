let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const datasetSchema = Schema({
    data: [[]],
    result:[]
}, {
  collection: "trainingData"
});
mongoose.model('DataSet', datasetSchema);
