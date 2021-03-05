const helper = require('../helper/response')

const {
  getRestoById,
  updateResto,
  getAllResto
} = require('../model/restoModel')

module.exports = {
  getAllResto: async (req, res) => {
    try {
      const result = await getAllResto()

      if (result.length > 0) {
        return helper.response(res, 200, 'Success get all resto data', result)
      } else {
        return helper.response(res, 403, 'Data not found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  updateResto: async (req, res) => {
    try {
      const {
        user_id,
        resto_name,
        resto_phone,
        resto_address,
        resto_kecamatan,
        resto_open_hour,
        resto_close_hour,
        resto_open_day,
        resto_close_day,
        resto_desc
      } = req.body

      const user = await getRestoById(user_id)

      if (user.length < 1) {
        return helper.response(res, 403, 'Account not found')
      }

      const data = {
        resto_name,
        resto_phone,
        resto_address,
        resto_kecamatan,
        resto_open_hour,
        resto_close_hour,
        resto_open_day,
        resto_close_day,
        resto_desc,
        resto_updated_at: new Date()
      }

      const result = await updateResto(data, user_id)

      return helper.response(res, 200, `Success Update user ${user_id}`, result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
