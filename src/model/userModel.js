const connection = require('../config/mysql')

module.exports = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertedId,
            ...data
          }
          delete newResult.user_password
          resolve(newResult)
        } else {
          console.log(error)
          reject(new Error(error))
        }
      })
    })
  },
  checkEmail: (user_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT user_id, user_name, user_email FROM user WHERE user_email = ?',
        user_email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  activateAccount: (user_key) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET user_status = 1, user_key = NULL WHERE user_key = '${user_key}'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
