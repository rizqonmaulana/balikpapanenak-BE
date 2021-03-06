const router = require('express').Router()
const {
  register,
  activateAccount,
  login,
  updatePassword,
  forgotPassword,
  resetPassword
} = require('../controller/userController')
// const uploadImage = require('../middleware/multer')

router.post('/register', register)
router.patch('/activate', activateAccount)
router.post('/login', login)
router.patch('/update/password', updatePassword)
router.patch('/forgot', forgotPassword)
router.patch('/reset', resetPassword)
router.get('/')

module.exports = router
