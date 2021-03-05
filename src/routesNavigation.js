const router = require('express').Router()
const user = require('./route/userRoute')
const resto = require('./route/restoRoute')

router.use('/user', user)
router.use('/resto', resto)

module.exports = router
