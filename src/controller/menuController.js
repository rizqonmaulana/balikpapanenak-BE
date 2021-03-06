const helper = require('../helper/response')

const {
  postMenu,
  updateMenu,
  getMenuById,
  deleteMenu
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
  }
}
