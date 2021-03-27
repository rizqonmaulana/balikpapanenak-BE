const router = require('express').Router()
const { isLogin } = require('../middleware/auth')

const {
  postReputation,
  deleteReputation,
  getReputationByRestoId
} = require('../controller/reputationController')

router.post('/', isLogin, postReputation)
router.get('/:id', getReputationByRestoId)
router.delete('/:id', isLogin, deleteReputation)

module.exports = router
