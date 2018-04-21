let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index.controller');
let patientsController = require('../controllers/patient.controller');
let conditionsController = require('../controllers/conditions.controller');
let vitalsController = require('../controllers/vitals.controller');
let passport = require('passport');

router.get('/api', indexController.index);

router.get('/api/patients', patientsController.readPatients);
router.get('/api/conditions', conditionsController.readConditions);
router.get('/api/vitals', vitalsController.readVitals);

router.post('/api/signin', patientsController.signin);
router.post('/api/signup', patientsController.signup);

module.exports = router;
