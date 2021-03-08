const connection = require('../config/mysql')

module.exports = {
  getAllMenu: (where, type, kecamatan, price, search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu JOIN resto ON menu.resto_id = resto.resto_id ${where} ${type}${kecamatan}${price}${search} GROUP BY menu.menu_id`,
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
  getNewMenu: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM menu JOIN resto ON menu.resto_id = resto.resto_id GROUP BY menu.menu_id ORDER BY `menu`.`menu_created_at`  DESC LIMIT 10',
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
  postMenu: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO menu SET ?', data, (error, result) => {
        if (!error) {
          const newResult = {
            menu_id: result.insertId,
            ...data
          }
          resolve(newResult)
        } else {
          reject(error)
        }
      })
    })
  },
  updateMenu: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE menu SET ? WHERE menu_id = ?',
        [data, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              menu_id: id,
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
  getMenuById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu WHERE menu_id = ${id}`,
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
  getMenuByRestoId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu WHERE resto_id = ${id}`,
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
  deleteMenu: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM menu WHERE menu_id = ?',
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
  },
  //   menu image
  postMenuImage: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO menu_image SET ?',
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
  getMenuImageById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu_image WHERE image_id = ${id}`,

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
  getImageByMenuId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu_image WHERE menu_id = ${id}`,
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
  getOneImageByMenuId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM menu_image WHERE menu_id = ${id} LIMIT 1`,
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
  deleteMenuImage: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM menu_image WHERE image_id = ?',
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
