const connection = require('../config/mysql')

module.exports = {
  getAllResto: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user JOIN resto ON user.user_id = resto.user_id WHERE user.user_status = 1',
        (error, result) => {
          if (!error) {
            delete result.user_password
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
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
  getRestoByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM resto WHERE resto.user_id = '${id}'`,
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
  getRestoByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM user JOIN resto ON user.user_id = resto.user_id WHERE resto.resto_id = '${id}' AND user_status = 1`,
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
        'UPDATE resto SET ? WHERE resto_id = ?',
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
  },
  postRestoImage: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO resto_image SET ?',
        data,
        (error, result) => {
          if (!error) {
            const newResult = {
              image_id: result.insertId,
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
  getRestoImageById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM resto_image WHERE image_id = ${id}`,
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
  getOneImageByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM resto_image WHERE resto_id = ${id} LIMIT 1`,
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
  getImageByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM resto_image WHERE resto_id = ${id}`,
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
  deleteRestoImage: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM resto_image WHERE image_id = ?',
        id,
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
