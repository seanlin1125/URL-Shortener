const express = require('express')
router = express.Router()
const home = require('./modules/home')

router.use('/', home)

module.exports = router