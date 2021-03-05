const helper = require('../helper/response')

const { postReputation } = require('../model/reputationModel')

module.exports = {
  postReputation: async (req, res) => {
    try {
      const {
        resto_id,
        user_id,
        reputation_comment,
        reputation_rating
      } = req.body

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
  }
}
