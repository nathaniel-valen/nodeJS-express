const express = require('express')

const app = express() 

app.use('/page1', (req, res) => {
    res.send('<h1>Hello from express page 1</h1>')
})

app.use('/page2', (req, res) => {
    res.send('<h1>Hello from express page 2</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>')
    next()
})

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})