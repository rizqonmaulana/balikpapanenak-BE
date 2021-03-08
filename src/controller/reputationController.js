const helper = require('../helper/response')

const {
  postReputation,
  deleteReputation,
  getReputationByRestoId,
  getCountRatingPerUser,
  checkRateCount
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
      if (checkUser.length < 1) {
        return helper.response(res, 403, 'user not found')
      }
      const checkResto = await getRestoByRestoId(resto_id)
      if (checkResto.length < 1) {
        return helper.response(res, 403, 'resto not found')
      }

      const checkRate = await checkRateCount(user_id, resto_id)
      if (checkRate.length > 0) {
        return helper.response(
          res,
          400,
          'You only can review once / restaurant'
        )
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
        for (let i = 0; i < result.length; i++) {
          const getUser = await checkRoleZero(result[i].user_id)
          result[i].user_email = getUser[0].user_email

          result[i].user_rate_count = await getCountRatingPerUser(
            result[i].user_id
          )
        }

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
