let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index.controller');
let passport = require('passport');

router.get('/api', indexController.index);

module.exports = router;
