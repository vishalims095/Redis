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
    redisClient.get('photos', async (err, photos) =>{
        if(err) console.log(err)
        if(photos != null){
            return res.json(JSON.parse(photos))
        } else {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/',{params : {albumId}})
            res.send({data})
            redisClient.setex('photos', default_expiration, JSON.stringify (data))
        }
    })
})


function getOrSetCache(key , cb) {
    return new Promise((res, rej) =>{
        redisClient.get(key, async (error, data) => {
            if (error) rej (error)
            if(data != null) res (JSON.parse(data))
            const freshData = await cb()
            redisClient.setex(key, default_expiration, freshData)
            resolve(freshData)
        })
    })
}


app.listen(process.env.PORT, () => {
    console.log("Server is running on",process.env.PORT)
})