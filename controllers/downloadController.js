const { EnvironmentCredentials } = require("aws-sdk")
const aws = require("aws-sdk")

const downloadController = {} //definicion del objeto
const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
})

downloadController.download = async (req, res) => {
  //const now = Date.now()
  const nombre = req.params.nombre
  const respuesta = {}
  //console.log(typeof(nombre))
  var paramGet = {
    Bucket: "onechancebucketfinal",
    Key: `FotoPerfil/${nombre}`,
  }

  s3.getObject(paramGet, (err, data) => {
    if (err) throw err
    res.send(data)
  })
}

module.exports = downloadController
