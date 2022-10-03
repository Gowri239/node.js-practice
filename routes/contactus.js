

const express = require('express')

const router = express.Router()

const contactController = require('../controllers/contactus')

router.get('/contactus',contactController.contactPage)




module.exports = router;