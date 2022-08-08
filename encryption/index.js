const bcrypt = require("bcrypt")



const encryptPassword = async (_password) => {
    const hashedPass = await bcrypt.hash(_password, 10)
    return hashedPass
}

const verifyPassword = async (_plainText, _encryptedPassword) => {
    const compare = await bcrypt.compare(_plainText, _encryptedPassword)
    return compare
}

const main = async () => {
    const fakeUser = {
        username: "lldgroup",
        password: "evenworsepassword420"
    }

    const hash = await encryptPassword(fakeUser.password)
    const authorization = await verifyPassword(
        fakeUser.password,
        hash
    )
    console.log(`
        Username: ${fakeUser.username}
        Original Password: ${fakeUser.password}
        =======================================
        Hashed Password: ${hash}
        Authorization: ${authorization}
    `)
}

main()