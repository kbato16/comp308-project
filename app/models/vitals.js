let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const vitalSchema = Schema({
  PID: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  Date: String,
  BodyHeight : String,
  BodyWeight : String,
  BodyMassIndex : String,
  SystolicBloodPressure : String,
  DiastolicBloodPressure :String,
  OralTemperature :String,
  QualityAdjustedLifeYear : String,
  DisabilityRatingScale : String,
  NonSmallCellLungCancer : String,
  HemoglobinA1c : String,
  Glucose : String,
  UreaNitrogen : String,
  Creatinine : String,
  Calcium : String ,
  Sodium : String,
  Potassium : String,
  Chloride : String,
  CarbonDioxide : String,
  TotalCholesterol : String,
  Triglycerides : String,
  LowDensityLipoproteinCholesterol : String,
  HighDensityLipoproteinCholesterol :String,
  MicroalbuminCreatinineRatio : String,
  EstimatedGlomerularFiltrationRate : String,
  DXABonedensity : String
  Date: {
    type: Date,
    // Create a default 'created' value
    default: Date.now
  },
}, {
  collection: "vitals"
});
mongoose.model('Vital', vitalSchema);
