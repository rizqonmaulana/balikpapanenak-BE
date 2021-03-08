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

router.get('/:id', isLogin, getUserById)
router.post('/register', register)
router.patch('/activate', activateAccount)
router.post('/login', login)
router.patch('/update/password', isLogin, updatePassword)
router.patch('/forgot', forgotPassword)
router.patch('/reset', resetPassword)

module.exports = router
