const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()

const allowedOrigins = ['http://localhost:3000', 'https://nahuel.vercel.app']

const corsOptions = {
  origin: allowedOrigins
}

app.use(express.urlencoded({
  extended: false
}))

app.use(cors(corsOptions))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.post('/send-email', (req, res) => {

  const { name, company, subject, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: name,
    to: 'lnahuelfernandezb@gmail.com',
    subject: subject,
    html: `
      <h1>Datos: </h1>
        <ul>
          <li>
          <bold>Nombre:</bold> ${name}
          </li>
          <li>
            <bold>Empresa:</bold> ${company}
          </li>
          <li>
            <bold>Email:</bold> ${email || 'No ha sido ingresado'}
          </li>
        </ul>
      <h2>Mensaje:</h2>
        ${message}
      `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res
        .status(500)
        .send(error.message)
    }
    console.log('Email enviado!')
    res
      .status(200)
      .json(req.body)
  })
  console.log(req.body)
  console.log(mailOptions)
  res.status(201)
  transporter.close()
})

app.listen(process.env.PORT, () => {
  console.log(`Sever on port ${process.env.PORT}`)
})