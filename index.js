import express from 'express'

const app = express()


app.get('/', async (req, res) => {
    res.send('is working!!!')
})

app.listen(80, '185.68.16.34' ,() => {
    console.log('server started.');
})

