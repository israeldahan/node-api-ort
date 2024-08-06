const express  = require('express')
const router = express.Router()
const userController = require('../controllers/users-controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.createUser)
router.put('/:id', userController.upsertUser)
router.delete('/:id', userController.deleteUser)


module.exports = router