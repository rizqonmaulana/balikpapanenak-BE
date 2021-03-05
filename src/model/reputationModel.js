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
  }
}
