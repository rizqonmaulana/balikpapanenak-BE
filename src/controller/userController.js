const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const helper = require('../helper/response')
const nodemailer = require('nodemailer')
// const fs = require('fs')

const {
  register,
  checkEmail,
  activateAccount
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
  }
}
