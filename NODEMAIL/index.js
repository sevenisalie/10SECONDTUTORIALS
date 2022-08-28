const nodemailer = require("nodemailer")
require("dotenv").config()



//get status of email 
const getStatus = (_emailObject) => {
    const rawStatus = _emailObject.response.split(" ")
    const status = rawStatus[0]
    return status
  }

//wrap it in async function

async function main () {
//create transporter aka your credentials on email server
// I'm using SendGrid + gmail >>

    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "apikey", // generated ethereal user
        pass: process.env.SENDGRID_APIKEY, // generated ethereal password
        },
    })

    //construct email as a nodemail object

    const email = await transporter.sendMail({
        from: '"Sevenisalie 🎰" <sevenisalie@gmail.com>', // sender address
        to: "cbiniamow@gmail.com, nolan.e.terry@gmail.com", // list of receivers
        subject: "Click 4 a Good Time", // Subject line
        text: "https://www.youtube.com/watch?v=A7IMBnMU5a4", // plain text body
        html:`
            <a href=https://www.youtube.com/watch?v=A7IMBnMU5a4>Not a Virus</a>
        `
    })

    const status = getStatus(email)
    //log it
    console.log(email)
    console.log(`
    $$$$$$$$$$$$ SEVENMAIL $$$$$$$$$$$$$$$$
    $                                     
    $                                     
    $   EmailID:      ${email.messageId}  
    $   Status:       ${status}       
    $                                     
    $                                     
    $                                     
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    `)
}

main()