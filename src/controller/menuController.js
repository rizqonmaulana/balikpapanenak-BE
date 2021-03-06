const helper = require('../helper/response')
const fs = require('fs')

const {
  postMenu,
  updateMenu,
  getMenuById,
  deleteMenu,
  postMenuImage,
  getMenuImageById,
  deleteMenuImage,
  getImageByMenuId
} = require('../model/menuModel')
const { getRestoByRestoId } = require('../model/restoModel')

module.exports = {
  postMenu: async (req, res) => {
    try {
      const {
        resto_id,
        menu_name,
        menu_category,
        menu_price,
        menu_desc
      } = req.body

      const check = await getRestoByRestoId(resto_id)
      if (check.length < 1) {
        return helper.response(res, 403, 'Resto not found')
      }

      const data = {
        menu_name,
        menu_category,
        menu_price,
        menu_desc
      }

      const result = await postMenu(data, resto_id)

      if (result) {
        return helper.response(res, 200, 'Success add menu', result)
      } else {
        return helper.response(
          res,
          400,
          "Oops there's something wrong, make sure you fill all form data",
          result
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  updateMenu: async (req, res) => {
    try {
      const {
        menu_id,
        menu_name,
        menu_category,
        menu_price,
        menu_desc
      } = req.body

      const check = await getMenuById(menu_id)
      if (check.length < 1) {
        return helper.response(res, 403, 'Menu not found')
      }

      const data = {
        menu_name,
        menu_category,
        menu_price,
        menu_desc
      }

      const result = await updateMenu(data, menu_id)

      if (result) {
        return helper.response(res, 200, 'Success update menu', result)
      } else {
        return helper.response(
          res,
          400,
          "Oops there's something wrong, make sure you fill all form data",
          result
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteMenu: async (req, res) => {
    try {
      const { id } = req.params

      const check = await getMenuById(id)
      if (check.length < 1) {
        return helper.response(res, 403, 'Menu not found')
      }

      const result = await deleteMenu(id)

      if (result) {
        return helper.response(res, 200, 'Success delete menu')
      } else {
        return helper.response(
          res,
          400,
          "Oops there's something wrong.",
          result
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  postMenuImage: async (req, res) => {
    try {
      const { menu_id } = req.body

      const check = await getMenuById(menu_id)
      // any menu ?
      if (check.length < 1) {
        if (req.file.filename) {
          fs.unlink(`./uploads/menu/${req.file.filename}`, function (err) {
            if (err) throw err
            console.log('File deleted!')
          })
        }
        return helper.response(res, 403, `Menu by id ${menu_id} not found`)
      }
      // max 3 image each menu
      const checkImage = await getImageByMenuId(menu_id)
      if (checkImage.length > 2) {
        fs.unlink(`./uploads/menu/${req.file.filename}`, function (err) {
          if (err) throw err
          console.log('File deleted!')
        })
        return helper.response(
          res,
          400,
          'You can only add 3 picture on each menu'
        )
      }

      const data = {
        menu_id,
        image_name: req.file === undefined ? '' : req.file.filename
      }

      const result = await postMenuImage(data)

      if (result) {
        return helper.response(res, 200, 'Success add image menu', result)
      } else {
        fs.unlink(`./uploads/menu/${req.file.filename}`, function (err) {
          if (err) throw err
          console.log('File deleted!')
        })
        return helper.response(res, 400, "Oops there's something wrong", result)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteMenuImage: async (req, res) => {
    try {
      const { id } = req.params

      const check = await getMenuImageById(id)
      console.log(check)
      if (check.length < 1) {
        return helper.response(res, 403, `Menu Image by id ${id} not found`)
      }

      const result = await deleteMenuImage(id)

      if (result) {
        fs.unlink(`./uploads/menu/${check[0].image_name}`, function (err) {
          if (err) throw err
          console.log('File deleted!')
        })
        return helper.response(
          res,
          200,
          `Success delete menu image by id ${id}`
        )
      } else {
        return helper.response(
          res,
          400,
          "Oops there's something wrong.",
          result
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
