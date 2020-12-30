const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mailer = require('./NodeMailer')

let user = undefined

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/req', function(request, response){
    if(!request.body.Name || !request.body.Phone) return response.sendStatus(400)
    const message = {
        from: '<exampletest123@mail.ru>',
        to: 'exampletest123@mail.ru',
        subject: 'Новая заявка',
        text: `Имя: ${request.body.Name}
        Телефон: ${request.body.Phone}`
    }
    mailer(message)
    user = request.body
    response.redirect('/req')
})

app.get('/req', function(request, response){
    if(typeof user !== 'object') return response.sendFile(__dirname + '/req.html')
    response.send('GOOD')
    user = undefined
});
app.listen(3001,() => console.log(`http://localhost:3001/req`))