
const express = require('express')
const ROUTER = express.Router();

const HEALTHCHECK = require('../lib/controllers/HealthCheckController')
const FORMAT = require('../lib/controllers/FormatController')
const REGISTER = require('../lib/controllers/RegeisterController')
 
ROUTER.get('/health', HEALTHCHECK.checkHealth, FORMAT.formatHealthResponse);

ROUTER.post('/register', REGISTER.registerUser)


module.exports = ROUTER;
