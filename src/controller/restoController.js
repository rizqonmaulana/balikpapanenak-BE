const helper = require('../helper/response')

const {
  getRestoByRestoId,
  updateResto,
  getAllResto
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
        if (rating) {
          data = {
            ...getResto[0],
            rating,
            review_by
          }
        } else {
          data = {
            ...getResto[0],
            rating: 0
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
        resto_open_hour,
        resto_close_hour,
        resto_open_day,
        resto_close_day,
        resto_desc
      } = req.body

      const user = await getRestoByRestoId(resto_id)

      if (user.length < 1) {
        return helper.response(res, 403, 'Account not found')
      }

      const data = {
        resto_name,
        resto_phone,
        resto_address,
        resto_kelurahan,
        resto_kecamatan,
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
  }
}
