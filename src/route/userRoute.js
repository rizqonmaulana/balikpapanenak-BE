const router = require('express').Router()
const { register, activateAccount } = require('../controller/userController')

router.post('/register', register)
router.patch('/activate', activateAccount)

module.exports = router
