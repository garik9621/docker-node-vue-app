const express = require('express')

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello world!')
})

app.listen(3002, () => {
    console.log('Сервер запущен')
})
