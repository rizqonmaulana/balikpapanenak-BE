const router = require('express').Router()
const {
  register,
  activateAccount,
  login,
  updatePassword,
  forgotPassword,
  resetPassword,
  getUserById
} = require('../controller/userController')
const { isLogin } = require('../middleware/auth')

router.post('/register', register)
router.patch('/activate', activateAccount)
router.post('/login', login)
router.patch('/update/password', isLogin, updatePassword)
router.patch('/forgot', forgotPassword)
router.patch('/reset', resetPassword)
router.get('/get/:id', isLogin, getUserById)

module.exports = router
