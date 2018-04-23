let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index.controller');
let usersController = require('../controllers/user.controller');
let patientsController = require('../controllers/patient.controller');
let conditionsController = require('../controllers/conditions.controller');
let vitalsController = require('../controllers/vitals.controller');
let alertController = require('../controllers/alert.contoller');

router.get('/api', indexController.index);

router.post('/api/signin', usersController.signin);
router.post('/api/signup', usersController.signup);

router.get('/api/patients', patientsController.readPatients);
router.get('/api/conditions', conditionsController.readConditions);
router.get('/api/vitals', vitalsController.readVitals);

// precondition: login
router.post('/api/alert', alertController.createAlert);

//-------------------------------------------------------------------------------
//  Vital

// Create
// Precondtion: Any nurse or the patient
router.post('/api/vital/create/:patientId', patientsController.createVital);

// Read the vital
// Precondtion: Any nurse or the patient
router.post('/api/vital/read/:vitalId', vitalsController.read);

// Update the vital
// Precondtion: Any nurse or the patient
router.post('/api/vital/update/:vitalId', vitalsController.update);

// Delete the vital
// Precondtion: Any nurse or the patient
router.post('/api/vital/delete/:vitalId', vitalsController.delete);

router.param('patientId', patientsController.patientByID);
router.param('vitalId', vitalsController.vitalByID);

module.exports = router;