const router = require('express').Router()
const {
  register,
  activateAccount,
  login,
  updateUser
} = require('../controller/userController')

router.post('/register', register)
router.patch('/activate', activateAccount)
router.post('/login', login)
router.patch('/update', updateUser)

module.exports = router
