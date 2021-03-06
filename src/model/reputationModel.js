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
  getReputationByRestoId: (id, limit) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM reputation WHERE resto_id = '${id}' LIMIT ${limit}`,
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
  getAvgRatingByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT AVG(reputation_rating) AS rating FROM reputation WHERE resto_id = ${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].rating)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getCountRatingByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(reputation_rating) AS total FROM reputation WHERE resto_id = ${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getCountRatingPerUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(reputation_rating) AS total FROM reputation WHERE user_id = ${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  checkRateCount: (user_id, resto_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM reputation WHERE user_id = ${user_id} AND resto_id = ${resto_id}`,
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
