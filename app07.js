const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const myRoutes = require('./routes/route07.js')

app.use(express.urlencoded( {
    extended: false
}))

app.use(myRoutes)


app.listen(8000, () => {
    console.log('Server is running at port 8000')
})