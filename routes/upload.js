const { Router } = require('express')
const router = Router()

const { upload } = require('../controllers/uploadController')

router.route('/')
    .post(upload)

module.exports = router; 