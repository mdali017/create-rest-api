const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./models/users.model');
const usersRouter = require('./routes/users.route');
const app = express();

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// user Related api
app.use("/users", usersRouter)


// app.get('/users', (req, res) => {
//     res.status(200).json({users})
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html')
})

// not found route
app.use((req, res, next) => {
   res.status(404).json({message: 'route not found'})
})

// server error
app.use((err, req, res, next) => {
    res.status(500).json({message: "Something Broke"})
})

module.exports = app;