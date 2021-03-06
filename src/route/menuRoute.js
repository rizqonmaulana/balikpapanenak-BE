const router = require('express').Router()

const {
  postMenu,
  updateMenu,
  deleteMenu
} = require('../controller/menuController')

router.post('/', postMenu)
router.patch('/update', updateMenu)
router.delete('/:id', deleteMenu)

module.exports = router
