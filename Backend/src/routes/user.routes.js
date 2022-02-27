const {Router} = require('express')
const router = Router ()

const userCtrl = require('../controllers/usuario_controller.js')

router.get('/', userCtrl.getDocumentos)
router.get('/:id', userCtrl.getDocumento)
router.post('/', userCtrl.createDocumento)
router.put('/:id', userCtrl.updateDocumento)
router.delete('/:id', userCtrl.deleteDocumento)

module.exports = router