const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/response')
const nodemailer = require('nodemailer')

const {
  register,
  checkEmail,
  activateAccount,
  checkActiveEmail,
  updateUser,
  resetPassword,
  getUserByEmail,
  deleteAccount
} = require('../model/userModel.js')

const { createResto, deleteResto } = require('../model/restoModel')

module.exports = {
  register: async (req, res) => {
    try {
      const { user_email, user_role } = req.body
      let { user_password } = req.body

      const salt = bcrypt.genSaltSync(10)
      user_password = bcrypt.hashSync(user_password, salt)

      const crypto = require('crypto')
      const user_key = crypto.randomBytes(20).toString('hex')

      const data = {
        user_email,
        user_password,
        user_key,
        user_role,
        user_status: 0,
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

      const createUser = await register(data)

      if (createUser) {
        if (user_role == 1) {
          createResto(createUser.user_id)
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
          html: `<p>Hallo ${user_email}, terimakasih karena sudah mendaftarkan resto / kedai anda, </p>
            <p>Silakan klik link dibawah untuk mengaktifkan akun anda</p>
            <a href="${process.env.URL}/active/${user_key}">Aktifkan akun saya</a>`
        }
        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error)
            deleteAccount(user_email)
            deleteResto(createUser.user_id)
            return helper.response(
              res,
              400,
              "Oops, there's something wrong. make sure you use an available email !"
            )
          } else {
            console.log(info)
            return helper.response(
              res,
              200,
              'Thank you for registration, please check your email to activate your account'
            )
          }
        })
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  activateAccount: async (req, res) => {
    try {
      const { user_key } = req.body

      const result = await activateAccount(user_key)
      if (result.changedRows) {
        return helper.response(
          res,
          200,
          'Akun anda telah aktif, silakan login dan lengkapi data profile anda',
          result
        )
      } else {
        return helper.response(res, 403, 'not found')
      }
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
          const { user_id, user_email, user_role } = checkUserData[0]

          const payload = {
            user_id,
            user_email,
            user_role
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
  updatePassword: async (req, res) => {
    try {
      const { user_email, user_password } = req.body

      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)

      const userCheck = await checkActiveEmail(user_email)

      const data = {
        user_password: encryptPassword
      }

      if (userCheck.length > 0) {
        const result = await updateUser(data, user_email)
        return helper.response(
          res,
          200,
          `Success updated password ${user_email}`,
          result
        )
      } else {
        return helper.response(res, 400, 'Akun tidak ditemukan')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { user_email } = req.body

      const emailCheck = await checkActiveEmail(user_email)

      if (emailCheck.length < 1) {
        return helper.response(res, 400, 'Account not found')
      }

      const crypto = require('crypto')
      const user_key = crypto.randomBytes(20).toString('hex')

      const data = {
        user_key
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
        subject: 'Balikpapan Enak - Reset password', // Subject line
        html: `<p>Hallo ${user_email}, kami mendapatkan informasi bahwa anda lupa password anda, </p>
            <p>Silakan klik link dibawah untuk mengaktifkan melakukan reset password</p>
            <a href="${process.env.URL}/forgot/${user_key}">reset password</a>`
      }
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
          return helper.response(res, 400, 'Email not send !')
        } else {
          console.log(info)
          updateUser(data, user_email)
          return helper.response(
            res,
            200,
            'Please check your email to reset your password '
          )
        }
      })
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { user_password, user_key } = req.body

      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)

      const result = await resetPassword(encryptPassword, user_key)
      console.log(result.changedRows)
      if (result.changedRows) {
        return helper.response(
          res,
          200,
          'Password anda berhasil di reset, silakan login ',
          result
        )
      } else {
        return helper.response(res, 403, 'user key tidak ditemukan')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getUserByEmail: async (request, response) => {
    try {
      const { user_email } = request.params
      const result = await getUserByEmail(user_email)
      return helper.response(response, 200, 'Success get User', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
