const helper = require('../helper/response')
const fs = require('fs')

const {
  getRestoByRestoId,
  updateResto,
  getAllResto,
  postRestoImage,
  getRestoImageById,
  deleteRestoImage,
  getOneImageByRestoId,
  getImageByRestoId
} = require('../model/restoModel')

const {
  getAvgRatingByRestoId,
  getCountRatingByRestoId
} = require('../model/reputationModel')

module.exports = {
  getAllResto: async (req, res) => {
    try {
      const result = await getAllResto()

      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          result[i].rating = await getAvgRatingByRestoId(result[i].resto_id)
        }
      }

      if (result.length > 0) {
        return helper.response(res, 200, 'Success get all resto data', result)
      } else {
        return helper.response(res, 403, 'Data not found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getTopResto: async (req, res) => {
    try {
      const getResto = await getAllResto()

      const resultArr = []

      if (getResto.length > 0) {
        for (let i = 0; i < getResto.length; i++) {
          getResto[i].rating = await getAvgRatingByRestoId(getResto[i].resto_id)
          const getImage = await getOneImageByRestoId(getResto[i].resto_id)

          if (getImage.length > 0) {
            getResto[i].resto_image = getImage[0].image_name
          } else {
            getResto[i].resto_image = null
          }

          resultArr.push(getResto[i])
        }
      }

      const result = resultArr.sort(function (a, b) {
        return b.rating - a.rating
      })

      if (result.length > 0) {
        return helper.response(
          res,
          200,
          'Success get top resto data',
          result.slice(0, 6)
        )
      } else {
        return helper.response(res, 403, 'Data not found')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getRestoByRestoId: async (req, res) => {
    try {
      const { id } = req.params
      const getResto = await getRestoByRestoId(id)

      let data
      if (getResto.length > 0) {
        const rating = await getAvgRatingByRestoId(getResto[0].resto_id)
        const review_by = await getCountRatingByRestoId(getResto[0].resto_id)
        const resto_image = await getImageByRestoId(getResto[0].resto_id)
        if (rating) {
          data = {
            ...getResto[0],
            rating,
            review_by,
            resto_image
          }
        } else {
          data = {
            ...getResto[0],
            rating: 0,
            resto_image
          }
        }
      } else {
        return helper.response(res, 403, 'Resto not found')
      }

      return helper.response(res, 200, 'Success get resto data', data)
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  updateResto: async (req, res) => {
    try {
      const {
        resto_id,
        resto_name,
        resto_phone,
        resto_address,
        resto_kelurahan,
        resto_kecamatan,
        resto_lat,
        resto_lng,
        resto_open_hour,
        resto_close_hour,
        resto_open_day,
        resto_close_day,
        resto_desc
      } = req.body

      const resto = await getRestoByRestoId(resto_id)

      if (resto.length < 1) {
        return helper.response(res, 403, 'Account not found')
      }

      const data = {
        resto_name,
        resto_phone,
        resto_address,
        resto_kelurahan,
        resto_kecamatan,
        resto_lat,
        resto_lng,
        resto_open_hour,
        resto_close_hour,
        resto_open_day,
        resto_close_day,
        resto_desc,
        resto_updated_at: new Date()
      }

      const result = await updateResto(data, resto_id)

      return helper.response(
        res,
        200,
        `Success Update user ${resto_id}`,
        result
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  postRestoImage: async (req, res) => {
    try {
      const { resto_id } = req.body

      const check = await getRestoByRestoId(resto_id)
      // any resto ?
      if (check.length < 1) {
        if (req.file.filename) {
          fs.unlink(`./uploads/resto/${req.file.filename}`, function (err) {
            if (err) throw err
            console.log('File deleted!')
          })
        }
        return helper.response(res, 403, `Menu by id ${resto_id} not found`)
      }

      const data = {
        resto_id,
        image_name: req.file === undefined ? '' : req.file.filename
      }

      const result = await postRestoImage(data)

      if (result) {
        return helper.response(res, 200, 'Success add resto image', result)
      } else {
        fs.unlink(`./uploads/resto/${req.file.filename}`, function (err) {
          if (err) throw err
          console.log('File deleted!')
        })
        return helper.response(res, 400, "Oops there's something wrong", result)
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteRestoImage: async (req, res) => {
    try {
      const { image_id } = req.params

      const check = await getRestoImageById(image_id)
      console.log(check)
      if (check.length < 1) {
        return helper.response(
          res,
          403,
          `Resto Image by id ${image_id} not found`
        )
      }

      const result = await deleteRestoImage(image_id)

      if (result) {
        fs.unlink(`./uploads/resto/${check[0].image_name}`, function (err) {
          if (err) throw err
          console.log('File deleted!')
        })
        return helper.response(res, 200, 'Success delete image')
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
