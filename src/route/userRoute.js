const router = require('express').Router()
const {
  register,
  activateAccount,
  login,
  updateUser,
  updatePassword,
  forgotPassword,
  resetPassword
} = require('../controller/userController')

router.post('/register', register)
router.patch('/activate', activateAccount)
router.post('/login', login)
router.patch('/update/profile', updateUser)
router.patch('/update/password', updatePassword)
router.patch('/forgot', forgotPassword)
router.patch('/reset', resetPassword)

module.exports = router
