const express = require("express")
const cors = require("cors")
const app = express()
const fileupload = require("express-fileupload")
require("dotenv").config()

app.use(fileupload())
app.use(cors())
app.use(express.json()) //el servidor entiende archivos JSON

const port = process.env.PORT
const upload = require("./routes/upload")
const download = require("./routes/download")
const uploadPDF = require("./routes/uploadPDF")

app.use("/upload", upload)
app.use("/download", download)
app.use("/pdf", uploadPDF)

app.listen(port, () => {
  console.log(`Run on port: ${port}`)
})
