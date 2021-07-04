const express = require ('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.listen(process.env.PORT, () => {
    console.log("Server is running on",process.env.PORT)
})