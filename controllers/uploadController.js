const { EnvironmentCredentials } = require("aws-sdk")
const aws = require("aws-sdk")

const uploadController = {} //definicion del objeto
const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
})

uploadController.upload = async (req, res) => {
  console.log(req.files.foto.name)
  //const now = Date.now()
  let path = ""
  const id = req.body.id
  const formato = req.body.formato
  const imagen = req.files.foto.data
  const type = req.body.type

  if (type == "logo") {
    path = `Logos/${id}.${formato}`
  } else {
    path = `FotoPerfil/${id}.${formato}`
  }

  var paramPut = {
    Bucket: "onechancebucketfinal",
    ContentType: "image/jpg",
    ACL: "public-read",
    Key: path, //Aca se coloca el nombre que va a aparecer en s3
    Body: imagen, //Lo que queremos enviar
  }

  s3.putObject(paramPut, (err, data) => {
    if (err) throw err
    console.log(data)
  })

  res.send("OK")
}

module.exports = uploadController
