

const express = require('express')


const successController = require('../controllers/success')

const router = express.Router()

router.get('/success',successController.getsuccessPage)


module.exports = router;