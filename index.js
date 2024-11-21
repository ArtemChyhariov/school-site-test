import express from 'express'

const app = express()


app.get('/', async (req, res) => {
    res.send('is working!!!')
})

app.listen(443,() => {
    console.log('server started.');
})

