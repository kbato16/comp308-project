let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index.controller');
let usersController = require('../controllers/user.controller');
let patientsController = require('../controllers/patient.controller');
let conditionsController = require('../controllers/conditions.controller');
let vitalsController = require('../controllers/vitals.controller');
let alertController = require('../controllers/alert.contoller');
let machLController = require('../controllers/machL.controller');
let dailyTipsController = require('../controllers/dailyTip.controller');

router.get('/api', indexController.index);

// machinelearning call
//TODO Will update as POST Method
router.post('/api/diagnose', machLController.diagnose); 
router.post('/api/signin', usersController.signin);
router.post('/api/signup', usersController.signup);

router.get('/api/patients', patientsController.readPatients);
router.get('/api/conditions', conditionsController.readConditions);
router.get('/api/vitals', vitalsController.readVitals);

// precondition: login
router.post('/api/alert', alertController.createAlert);

//-------------------------------------------------------------------------------
//  Vital

// List
// Precondtion: Any nurse or the patient
router.get('/api/vitals/list/:patientId', vitalsController.listByPatientId);

// Create
// Precondtion: Any nurse or the patient
router.post('/api/vitals/create/:patientId', patientsController.createVital);

// Read the vital
// Precondtion: Any nurse or the patient
router.post('/api/vitals/read/:vitalId', vitalsController.read);

// Update the vital
// Precondtion: Any nurse or the patient
router.post('/api/vitals/update/:vitalId', vitalsController.update);

// Delete the vital
// Precondtion: Any nurse or the patient
router.post('/api/vitals/delete/:vitalId', vitalsController.delete);



//-------------------------------------------------------------------------------
//  DailyTip

// Create
// Precondtion: Nurse
router.post('/api/dailyTip/create/:patientId', dailyTipsController.create);

router.param('patientId', patientsController.patientByID);
router.param('vitalId', vitalsController.vitalByID);

module.exports = router;