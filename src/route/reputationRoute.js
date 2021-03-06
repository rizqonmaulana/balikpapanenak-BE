const router = require('express').Router()

const {
  postReputation,
  deleteReputation,
  getReputationByRestoId
} = require('../controller/reputationController')

router.get('/:id', getReputationByRestoId)
router.post('/', postReputation)
router.delete('/:id', deleteReputation)

module.exports = router
