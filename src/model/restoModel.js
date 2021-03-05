const connection = require('../config/mysql')

module.exports = {
  createResto: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO resto (user_id) VALUES (${id})`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getRestoById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user JOIN resto ON user.user_id = resto.user_id WHERE resto.user_id = '${id}' AND user_status = 1`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  updateResto: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE resto SET ? WHERE user_id = ?',
        [data, id],
        (error, result) => {
          if (!error) {
            console.log(result)
            if (data.user_password) {
              resolve(result)
            } else {
              resolve(data)
            }
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteResto: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM resto WHERE user_id = '${id}'`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  }
}
