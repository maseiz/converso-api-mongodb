const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//LOGIN 
const loginCtrl = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email})

    if(!user) {
        res.statuts(404)
        res.send({error: 'User not found'})
    }
     //aquí va a comprar el password de texto plano con el user.password, es decir, el hash generado encriptado
    const checkPassword = await compare(password, user.password)  
    const tokenSession = await tokenSign(user)
    if (checkPassword) { //esto se cumple si la contraseña es correcta
        res.send({
            data: user,
     })
     return
    }
    if (!checkPassword) {
        res.status(409)
        res.send({
            error:'Invalid password'
    })
        return
}


// TODO: registramos usuario
const registerCtrl = async (req, res) => {
    try{
        // datos que se envían desde el front 
        const { email, password, name } = req.body
        const passwordHash = await encrypt(password)  //<--------encriptando
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({data: registerUser})

    } catch (e) {
        httpError(res, e)
    }
}}