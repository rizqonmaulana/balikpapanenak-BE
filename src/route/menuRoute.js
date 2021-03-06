const router = require('express').Router()
const uploadImage = require('../middleware/multer')

const {
  postMenu,
  updateMenu,
  deleteMenu,
  postMenuImage,
  deleteMenuImage
} = require('../controller/menuController')

router.post('/', postMenu)
router.patch('/update', updateMenu)
router.delete('/:id', deleteMenu)
router.post('/image', uploadImage, postMenuImage)
router.delete('/image/:id', deleteMenuImage)

module.exports = router
