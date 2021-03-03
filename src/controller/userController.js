const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/response')
const nodemailer = require('nodemailer')
const fs = require('fs')

const {
  register,
  checkEmail,
  activateAccount,
  checkActiveEmail,
  updateUser
} = require('../model/userModel.js')

module.exports = {
  register: async (req, res) => {
    try {
      const { user_name, user_email, user_name_person } = req.body
      let { user_password } = req.body

      const salt = bcrypt.genSaltSync(10)
      user_password = bcrypt.hashSync(user_password, salt)

      const crypto = require('crypto')
      const user_key = crypto.randomBytes(20).toString('hex')

      const data = {
        user_name,
        user_email,
        user_password,
        user_key,
        user_name_person,
        user_created_at: new Date()
      }

      const checkDuplicateEmail = await checkEmail(user_email)

      if (checkDuplicateEmail.length > 0) {
        return helper.response(
          res,
          400,
          'Duplicate Email, email has been used by another account'
        )
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_NAME, // generated ethereal user
          pass: process.env.EMAIL_PASS // generated ethereal password
        }
      })
      const mailOptions = {
        from: '"Balikpapan Enak" <balikpapanenak@gmail.com', // sender address
        to: user_email, // list of receivers
        subject: 'Balikpapan Enak - Activate account', // Subject line
        html: `<p>Hallo ${user_name}, terimakasih karena sudah mendaftarkan resto / kedai anda, </p>
          <p>Silakan klik link dibawah untuk mengaktifkan akun anda</p>
          <a href="${process.env.URL}/active/${user_key}">Aktifkan akun saya</a>`
      }
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          return helper.response(res, 400, 'Email not send !')
        } else {
          console.log(info)
          register(data)
          return helper.response(
            res,
            200,
            'Terimakasih telah mendaftarkan resto / kedai anda, silakan cek email untuk mengaktifkan akun anda'
          )
        }
      })
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  activateAccount: async (req, res) => {
    try {
      const { user_key } = req.body

      const result = await activateAccount(user_key)
      return helper.response(
        res,
        200,
        'Akun anda telah aktif, silakan login dan lengkapi data profile anda',
        result
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  login: async (req, res) => {
    try {
      const { user_email, user_password } = req.body
      const checkUserData = await checkActiveEmail(user_email)

      if (checkUserData.length > 0) {
        const checkPassword = bcrypt.compareSync(
          user_password,
          checkUserData[0].user_password
        )

        if (checkPassword) {
          const { user_id, user_name, user_email } = checkUserData[0]

          const payload = {
            user_id,
            user_name,
            user_email
          }

          const token = jwt.sign(payload, 'RAHASIA', { expiresIn: '24h' })
          const result = { ...payload, token }
          return helper.response(res, 200, 'Login Success', result)
        } else {
          return helper.response(res, 400, 'Password invalid')
        }
      } else {
        return helper.response(res, 400, 'Account not Registered')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  updateUser: async (request, response) => {
    try {
      const {
        user_email,
        user_name,
        user_phone,
        user_address,
        user_kecamatan,
        user_open_hour,
        user_close_hour,
        user_open_day,
        user_close_day,
        user_desc,
        // user_logo,
        user_name_person
      } = request.body

      // let newLogo
      // const user = await checkActiveEmail(user_email)

      // if (request.file === undefined) {
      //   newLogo = user[0].user_logo
      // } else {
      //   if (user[0].user_logo !== '' && user[0].user_logo !== null) {
      //     fs.unlink(`./uploads/${user[0].user_logo}`, function (err) {
      //       if (err) throw err
      //       console.log('File deleted!')
      //     })
      //   }
      //   newLogo = user[0].user_logo
      // }

      const data = {
        user_name,
        // user_pic: newLogo,
        user_phone,
        user_address,
        user_kecamatan,
        user_open_hour,
        user_close_hour,
        user_open_day,
        user_close_day,
        user_desc,
        // user_logo,
        user_name_person,
        user_updated_at: new Date()
      }

      const result = await updateUser(data, user_email)

      return helper.response(
        response,
        200,
        `Success Update user ${user_email}`,
        result
      )
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
