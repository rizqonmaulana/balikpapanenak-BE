const router = require('express').Router()
const { getAllResto, updateResto } = require('../controller/restoController')
// const uploadImage = require('../middleware/multer')

router.get('/all', getAllResto)
router.patch('/update', updateResto)

module.exports = router
