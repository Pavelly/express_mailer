const { request } = require("express");

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'exampletest123@mail.ru',
        pass: 'Test123123'
    }
})

const mailer = message => {
    transporter.sendMail(message, (err,info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}
module.exports = mailer