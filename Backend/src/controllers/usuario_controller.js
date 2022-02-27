const userCtrl= {}
const Documento = require('../models/usuario_models')

userCtrl.getDocumentos = async (req, res) => {
    const documentos = await Documento.find()
    res.json(documentos)
}

userCtrl.getDocumento = async (req,res) => {
    const documento= await Documento.findById(req.params.id)
    res.send(documento)
}

userCtrl.createDocumento = async (req,res) => {
    const newDocumento = new Documento(req.body)
    await newDocumento.save()

    res.send({message: 'Documento creado'})
}

userCtrl.updateDocumento = async (req,res) => {
    await Documento.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Documento actualizado'})
}
userCtrl.deleteDocumento = async (req,res) => {
    await Documento.findByIdAndDelete(req.params.id)
    res.json({status: 'Documento eliminado'})
}

module.exports = userCtrl;

