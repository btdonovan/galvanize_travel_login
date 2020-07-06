const express = require('express')
const bodyParser = require('body-parser')
const queries = require('./queries')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

//query to create a new user
app.post('/register', queries.registerUser)
//query to validate login
app.get('/login', queries.loginUser)