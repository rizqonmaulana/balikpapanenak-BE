const router = require('express').Router()
const {
  getAllResto,
  updateResto,
  getRestoByRestoId
} = require('../controller/restoController')
// const uploadImage = require('../middleware/multer')

router.get('/all', getAllResto)
router.get('/:id', getRestoByRestoId)
router.patch('/update', updateResto)

module.exports = router
