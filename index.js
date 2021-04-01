const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const YoutubeMusicApi = require('youtube-music-api')
const { listCharts, getChart } = require('billboard-top-100');
var moment = require('moment-timezone');

const api = new YoutubeMusicApi()


app.get('/search', (req, res) => {
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

app.get('/getartists', (req, res) => {
    getChart('artist-100',moment().tz("America/Los_Angeles").format("YYYY-MM-DD"), (err, chart) => {
        if (err) console.log(err);
        res.send(chart)
    });
})

app.get('/topalbums', (req, res) => {
    getChart('top-album-sales',moment().tz("America/Los_Angeles").format("YYYY-MM-DD"), (err, chart) => {
        if (err) console.log(err);
        res.send(chart)
    });
})

app.get('/topsongs', (req, res) => {
    getChart('hot-100',moment().tz("America/Los_Angeles").format("YYYY-MM-DD"), (err, chart) => {
        if (err) console.log(err);
        res.send(chart)
    });
})

app.get('/lists', (req, res) => {
    listCharts((err, charts) => {
        if (err) console.log(err);
        res.send(charts)
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})