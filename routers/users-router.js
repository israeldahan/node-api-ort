const express  = require('express')
const router = express.Router()
const userController = require('../controllers/users-controller')
const checkLegalId = require('../middlewares/checkLegalId')

router.get('/', userController.getUsers)
router.get('/:id', checkLegalId, userController.getUser)
router.post('/', userController.createUser)
router.put('/:id', checkLegalId, userController.upsertUser)
router.delete('/:id', checkLegalId, userController.deleteUser)


module.exports = router