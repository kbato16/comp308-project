let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index.controller');
//let userController = require('../controllers/user.controller');
let patientsController = require('../controllers/patient.controller');
let conditionsController = require('../controllers/conditions.controller');
let vitalsController = require('../controllers/vitals.controller');
let alertController = require('../controllers/alert.contoller');
let machLController = require('../controllers/machL.controller');

router.get('/api', indexController.index);

// machinelearning call
//TODO Will update as POST Method
router.get('/api/diagnose', machLController.diagnose); 

router.get('/api/patients', patientsController.readPatients);
router.get('/api/conditions', conditionsController.readConditions);
router.get('/api/vitals', vitalsController.readVitals);

router.post('/api/signin', patientsController.signin);
router.post('/api/signup', patientsController.signup);

// precondition: login
router.post('/api/alert', alertController.createAlert);

module.exports = router;
