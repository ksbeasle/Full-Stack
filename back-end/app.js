const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const morgan = require('morgan')
const gameRouter = require('./routes/gameRoutes')
const cors = require('cors')

//App
const app = express()

//cors -- Used so the front end can recieve data without a network error
app.use(cors())

//Morgan middleware
app.use(morgan('common'))
app.use(express.json())

//Mongo User
const user = process.env.mongoUser
//Mongo Pass
const pass = process.env.mongoPass
//Connect to Mongo database 

// mongoose.connect('', 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(() => {
//     app.listen(3000, () => {
        
//     })
// }).catch((err) => {
    
// })

//DB URI
let uri = 'mongodb+srv://'+user+':'+pass+'@node.ut56y.mongodb.net/project-1-games?retryWrites=true&w=majority'

//Start server
async function startServer(URI){
   try {
            await mongoose.connect(URI,
                {
                     useNewUrlParser: true,
                     useUnifiedTopology: true,
                     useFindAndModify: false,
                     useCreateIndex: true
                }, (error) =>{
                    if(error){
                        console.log(chalk.red.bgBlack.bold.underline('Error connecting to DB: ', err.message))
                    }else{
                        console.log(chalk.blueBright.bgBlack.bold.underline('Database connected!'))
                    }
                })      
   } catch (err) {
    console.log(chalk.red.bgBlack.bold.underline('Error connecting to DB: ', err.message))
   }
   setTimeout(() => {
       app.listen(3000, () => {
        console.log(chalk.blueBright.bgBlack.bold.underline('Listening on port 3000!'))
       })
   }, 3000)
}

// Start the server
startServer(uri)

/* --- Routes --- */

app.use(gameRouter)


module.exports = startServer