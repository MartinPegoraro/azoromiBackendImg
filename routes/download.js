const { Router } = require("express")
const router = Router()

const { download } = require("../controllers/downloadController")

router.route("/:nombre").get(download)

module.exports = router
