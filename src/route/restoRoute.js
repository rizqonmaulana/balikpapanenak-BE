const router = require('express').Router()
const {
  getAllResto,
  getTopResto,
  getRestoByRestoId,
  updateResto
} = require('../controller/restoController')
// const uploadImage = require('../middleware/multer')

router.get('/all', getAllResto)
router.get('/top', getTopResto)
router.get('/:id', getRestoByRestoId)
router.patch('/update', updateResto)

module.exports = router
