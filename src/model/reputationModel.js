const connection = require('../config/mysql')

module.exports = {
  postReputation: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO reputation SET ?',
        data,
        (error, result) => {
          if (!error) {
            const newResult = {
              reputation_id: result.insertId,
              ...data
            }
            resolve(newResult)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  deleteReputation: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM reputation WHERE reputation_id = '${id}'`,
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
  getReputationByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM reputation WHERE resto_id = '${id}'`,
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
