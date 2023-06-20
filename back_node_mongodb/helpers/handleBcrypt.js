const bcrypt = require('bcryptjs')  //librería que hemos instalado previamente con npm i bcryptjs -S

//Encryptamos
const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 10)  //genera el hash (cadena de caracteres)
    return hash
}

//Comparamos
const compare = async (PasswordPlain, hashPassword) => {
    return await bcrypt.compare(PasswordPlain, hashPassword)
}

module.exports = {encrypt, compare}