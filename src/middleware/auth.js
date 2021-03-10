const jwt = require('jsonwebtoken')
const helper = require('../helper/response')

module.exports = {
  isLogin: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, 'RAHASIA', (error, result) => {
        if (
          (error && error.name === 'JsonWebTokenError') ||
          (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(response, 403, error.message)
        } else {
          request.token = result
          next()
        }
      })
    } else {
      return helper.response(response, 400, 'Please login first !')
    }
  },
  isAdmin: (request, response, next) => {
    const userData = request.token

    if (userData.user_role !== 1) {
      return helper.response(
        response,
        400,
        'Your are not allowed to access this page'
      )
    } else {
      next()
    }
  }
}
