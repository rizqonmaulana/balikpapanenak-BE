const helper = require('../helper/response')

const {
  postReputation,
  deleteReputation,
  getReputationByRestoId
} = require('../model/reputationModel')
const { checkRoleZero } = require('../model/userModel')
const { getRestoByRestoId } = require('../model/restoModel')

module.exports = {
  postReputation: async (req, res) => {
    try {
      const {
        resto_id,
        user_id,
        reputation_comment,
        reputation_rating
      } = req.body

      const checkUser = await checkRoleZero(user_id)
      if (checkUser < 1) {
        return helper.response(res, 403, 'user not found')
      }
      const checkResto = await getRestoByRestoId(resto_id)
      if (checkResto < 1) {
        return helper.response(res, 403, 'resto not found')
      }

      const data = {
        resto_id,
        user_id,
        reputation_comment,
        reputation_rating
      }

      const result = await postReputation(data)

      if (result) {
        return helper.response(
          res,
          200,
          'Thanks for your rating & comment',
          result
        )
      } else {
        return helper.response(
          res,
          403,
          "Oops, there's something wrong, make sure you fill all form data & have a good internet connection."
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteReputation: async (req, res) => {
    try {
      const { id } = req.params

      const result = await deleteReputation(id)

      if (result.affectedRows > 0) {
        return helper.response(res, 200, 'Delete successful', result)
      } else {
        return helper.response(res, 403, 'not found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getReputationByRestoId: async (req, res) => {
    try {
      const { id } = req.params

      const result = await getReputationByRestoId(id)

      if (result.length > 0) {
        return helper.response(res, 200, 'Success get reputation data', result)
      } else {
        return helper.response(
          res,
          403,
          `reputation for resto by id ${id} is not found`
        )
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
