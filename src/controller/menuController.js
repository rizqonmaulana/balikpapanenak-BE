const helper = require('../helper/response')
const fs = require('fs')

const {
  getAllMenu,
  getNewMenu,
  postMenu,
  updateMenu,
  getMenuById,
  deleteMenu,
  postMenuImage,
  getMenuImageById,
  deleteMenuImage,
  getImageByMenuId,
  getOneImageByMenuId,
  getMenuByRestoId
} = require('../model/menuModel')
const { getRestoByRestoId } = require('../model/restoModel')
const {
  getAvgRatingByRestoId,
  getCountRatingByRestoId
} = require('../model/reputationModel')

module.exports = {
  getAllMenu: async (req, res) => {
    try {
      let { type, kecamatan, price, search } = req.query

      if (type) {
        type = `menu_category = '${type}' `
      } else {
        type = ''
      }

      if (kecamatan) {
        if (type) {
          kecamatan = ` AND resto.resto_kecamatan = '${kecamatan}' `
        } else {
          kecamatan = ` resto.resto_kecamatan = '${kecamatan}' `
        }
      } else {
        kecamatan = ''
      }

      if (price === 'low') {
        if (type || kecamatan) {
          price = ' AND menu_price > 0 AND menu_price <= 20000 '
        } else {
          price = ' menu_price > 0 AND menu_price <= 20000 '
        }
      } else if (price === 'mid') {
        if (type || kecamatan) {
          price = ' AND menu_price > 20000 AND menu_price <= 50000 '
        } else {
          price = ' menu_price > 20000 AND menu_price <= 50000 '
        }
      } else if (price === 'high') {
        if (type || kecamatan) {
          price = ' AND menu_price > 50000 '
        } else {
          price = ' menu_price > 50000 '
        }
      } else {
        price = ''
      }

      if (search) {
        if (type || kecamatan || price) {
          search = ` AND menu_name LIKE'%${search}%' `
        } else {
          search = ` menu_name LIKE'%${search}%' `
        }
      } else {
        search = ''
      }

      let where = ''

      if (search || kecamatan || price || type) {
        where = 'WHERE '
      }

      const result = await getAllMenu(where, type, kecamatan, price, search)
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          const image = await getOneImageByMenuId(result[i].menu_id)
          const resto = await getRestoByRestoId(result[i].resto_id)
          result[i].image = image[0]
          result[i].resto = resto[0]
          result[i].rating = await getAvgRatingByRestoId(result[i].resto_id)
          result[i].review_by = await getCountRatingByRestoId(
            result[i].resto_id
          )
        }
        return helper.response(res, 200, 'Success all menu', result)
      } else {
        return helper.response(res, 403, 'no data')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getNewMenu: async (req, res) => {
    try {
      const result = await getNewMenu()

      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          const getImg = await getOneImageByMenuId(result[i].menu_id)
          result[i].menu_image = getImg[0]
        }
        return helper.response(res, 200, 'Success get newest menu', result)
      } else {
        return helper.response(res, 403, 'No data')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getMenuByRestoId: async (req, res) => {
    try {
      const { id } = req.params

      const result = await getMenuByRestoId(id)

      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          const getImg = await getOneImageByMenuId(result[i].menu_id)
          result[i].menu_image = getImg
        }
      }

      if (result.length > 0) {
        return helper.response(res, 200, 'Success get newest menu', result)
      } else {
        return helper.response(res, 403, 'No data')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getMenuById: async (req, res) => {
    try {
      const { id } = req.params

      let result

      const getMenu = await getMenuById(id)
      if (getMenu.length > 0) {
        const image = await getImageByMenuId(id)
        if (image.length > 0) {
          result = {
            ...getMenu[0],
            image
          }
        } else {
          result = {
            ...getMenu[0],
            image: null
          }
        }
      } else {
        return helper.response(res, 403, `Resto by id ${id} is not found`)
      }

      return helper.response(res, 200, `Success get resto by id ${id}`, result)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
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
        resto_id,
        menu_name,
        menu_category,
        menu_price,
        menu_desc
      }

      const result = await postMenu(data)

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
        return helper.response(
          res,
          200,
          `Success delete ${check[0].menu_name} from menu`
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
