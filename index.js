const express = require('express')
const app = express()
const port = 3000
const YoutubeMusicApi = require('youtube-music-api')

const api = new YoutubeMusicApi()


app.get('/', (req, res) => {
    api.initalize().then(info => {
        api.search("sorry").then(result => {
            res.send(result)
            console.log(result)
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})