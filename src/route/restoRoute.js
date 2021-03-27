const router = require('express').Router()
const { isLogin, isAdmin } = require('../middleware/auth')
const uploadImage = require('../middleware/restoImage')

const {
  getAllResto,
  getTopResto,
  getRestoByRestoId,
  updateResto,
  postRestoImage,
  deleteRestoImage
} = require('../controller/restoController')

router.get('/all', getAllResto)
router.get('/top', getTopResto)
router.patch('/update', isLogin, isAdmin, updateResto)
router.post('/image', isLogin, isAdmin, uploadImage, postRestoImage)
router.delete('/image/delete/:image_id', isLogin, isAdmin, deleteRestoImage)
router.get('/get/:id', getRestoByRestoId)

module.exports = router
