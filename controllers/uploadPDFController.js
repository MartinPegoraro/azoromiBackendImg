const { EnvironmentCredentials, CloudWatchLogs } = require("aws-sdk")
const aws = require("aws-sdk")
const fs = require("fs")

const uploadController = {} //definicion del objeto
const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
})

uploadController.uploadPDF = async (req, res) => {
  //const now = Date.now()
  const id = req.body.id
  const pdf = req.files.pdf.data

  var paramPut = {
    Bucket: "onechancebucketfinal",
    ContentType: "application/pdf",
    ACL: "public-read",
    Key: `PDFs/${id}.pdf`, //Aca se coloca el nombre que va a aparecer en s3
    Body: pdf, //Lo que queremos enviar
  }
  s3.putObject(paramPut, (err, data) => {
    if (err) throw err
    console.log(data)
  })

  res.send("OK")
}

module.exports = uploadController
