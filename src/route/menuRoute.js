const router = require('express').Router()
const uploadImage = require('../middleware/menuImage')
const { isLogin, isAdmin } = require('../middleware/auth')

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
router.post('/', isLogin, isAdmin, postMenu)
router.patch('/update', isLogin, isAdmin, updateMenu)
router.delete('/delete/:id', isLogin, isAdmin, deleteMenu)
router.post('/image', isLogin, isAdmin, uploadImage, postMenuImage)
router.delete('/image/delete/:id', isLogin, isAdmin, deleteMenuImage)

module.exports = router
