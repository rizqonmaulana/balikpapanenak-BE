const router = require('express').Router()
const user = require('./route/userRoute')
const resto = require('./route/restoRoute')
const reputation = require('./route/reputationRoute')

router.use('/reputation', reputation)
router.use('/user', user)
router.use('/resto', resto)

module.exports = router
