const { Router } = require('express')
const router = Router()

const { uploadPDF } = require('../controllers/uploadPDFController')

router.route('/')
    .post(uploadPDF)

module.exports = router; 