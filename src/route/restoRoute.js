const router = require('express').Router()
const {
  getAllResto,
  updateResto,
  getRestoById
} = require('../controller/restoController')
// const uploadImage = require('../middleware/multer')

router.get('/:id', getRestoById)
router.get('/all', getAllResto)
router.patch('/update', updateResto)

module.exports = router
