const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const morgan = require('morgan')
const gameRouter = require('./routes/gameRoutes')

//App
const app = express()

//Morgan middleware
app.use(morgan('common'))

//Mongo User
const user = process.env.MONGO_USER
//Mongo Pass
const pass = process.env.MONGO_PASS

//Connect to Mongo database 
mongoose.connect('mongodb+srv://'+user+':'+pass+'@node.ut56y.mongodb.net/project-1-games?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(3000, () => {
        console.log(chalk.blueBright.bgBlack.bold.underline('Database connected! Now Listening on port: 3000'))
    })
}).catch((err) => {
    console.log(chalk.red.bgBlack.bold.underline('Error connecting to DB: ', err.message))
})

/* --- Routes --- */

app.use(gameRouter)