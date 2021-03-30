const express = require('express')
const app = express()
const port = 3000
const YoutubeMusicApi = require('youtube-music-api')

const api = new YoutubeMusicApi()


app.get('/', (req, res) => {
    api.initalize().then(info => {
        api.search("sorry").then(result => {
            res.send(result)
        })
    })
})

app.get('/artists', (req, res) => {
    api.initalize().then(info => {
        api.search("justin bieber", "artist").then(result => res.send(result))
    })
})

app.get('/artistslist', (req, res) => {
    api.initalize().then(info => {
        api.getArtist("UCGvj8kfUV5Q6lzECIrGY19g").then(result => res.send(result))
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})