const router = require('express').Router()
const uploadImage = require('../middleware/menuImage')

const {
  getAllMenu,
  getNewMenu,
  getMenuById,
  getMenuByRestoId,
  postMenu,
  updateMenu,
  deleteMenu,
  postMenuImage,
  deleteMenuImage
} = require('../controller/menuController')

router.get('/', getAllMenu)
router.get('/:id', getMenuById)
router.get('/new', getNewMenu)
router.get('/resto/:id', getMenuByRestoId)
router.post('/', postMenu)
router.patch('/update', updateMenu)
router.delete('/delete/:id', deleteMenu)
router.post('/image', uploadImage, postMenuImage)
router.delete('/image/delete/:id', deleteMenuImage)

module.exports = router
