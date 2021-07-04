const express = require ('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const Redis = require('redis')
const redisClient = Redis.createClient()
const axios = require('axios');

default_expiration = 3600
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/test', async (req, res) =>{
    const albumId = req.params.albumId
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/',{params : {albumId}})
    res.send({data})
    redisClient.setex('photos', default_expiration, JSON.stringify (data))
})
app.listen(process.env.PORT, () => {
    console.log("Server is running on",process.env.PORT)
})