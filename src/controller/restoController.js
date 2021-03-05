const fs = require('fs')
const helper = require('../helper/response')

const { getRestoById, updateResto } = require('../model/restoModel')

module.exports = {
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

      let newImage
      const user = await getRestoById(user_id)

      if (user.length < 1) {
        return helper.response(res, 403, 'Account not found')
      }

      if (req.file === undefined) {
        newImage = user[0].resto_image
      } else {
        if (user[0].resto_image !== '' && user[0].resto_image !== null) {
          fs.unlink(`./uploads/${user[0].resto_image}`, function (err) {
            if (err) throw err
            console.log('File deleted!')
          })
        }
        newImage = req.file.filename
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
        resto_image: newImage,
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
