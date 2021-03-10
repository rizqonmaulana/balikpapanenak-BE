const router = require('express').Router()
const { isLogin } = require('../middleware/auth')

const {
  postReputation,
  deleteReputation,
  getReputationByRestoId
} = require('../controller/reputationController')

router.get('/:id', isLogin, getReputationByRestoId)
router.post('/', isLogin, postReputation)
router.delete('/:id', isLogin, deleteReputation)

module.exports = router
