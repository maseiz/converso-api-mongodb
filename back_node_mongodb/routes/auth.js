const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controlles.auth')

// TODO login

router.post('/login', loginCtrl)

// TODO registrar un usuario
router.post('/register', registerCtrl)

module.exports = router