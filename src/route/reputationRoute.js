const router = require('express').Router()

const { postReputation } = require('../controller/reputationController')

router.post('/', postReputation)

module.exports = router
