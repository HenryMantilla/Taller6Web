const{Schema, model} = require('mongoose')

const userDocument = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, requiered: false}
},{
    versionKey: false
})

module.exports = model('Documento', userDocument);