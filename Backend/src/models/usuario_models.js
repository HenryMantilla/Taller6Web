const{Schema, model} = require('mongoose')

const userDocument = new Schema({
    nombre: {type: String},  //required: true opcional
    descripcion: {type: String}
},{
    versionKey: false
})

module.exports = model('Documento', userDocument);