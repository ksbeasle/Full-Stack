const Game = require('../models/game')
const chalk = require('chalk')
const mongoose = require('mongoose')

/* GET all games from the database */
module.exports.all_get = (req, res) => {
        Game.find({}, function(err, games) {
        if(err){
            console.log(chalk.bgBlack.red.bold.underline('Error retrieving all games: '. err.message))
            res.send(err.message)
            res.end()
        }
      //  console.log(chalk.bgGreenBright.blue(games))
        res.send(games)
    }) 
}

/* PUT create a new game  */
module.exports.add_game = async (req, res) => {
    const g = req.body;
  
    try {
      const game = await Game.create(g);
      res.status(201).json({game: game._id});
    //res.send(g.platform)
    }
    catch(err) {
      console.log(err)
      res.send(err)
    }
}

/* GET a specific game based on id */
module.exports.get_game = async (req,res) => {
    let id = req.params.id
    try {
      let data = await Game.findById(id)
      res.send(data)
    } catch(err) {
      console.log(err.message)
      res.send(err)
    }
    
}

// Mongoose.set so when we use UPDATE the returned object is the new updated object
mongoose.set('returnOriginal', false);

/* UPDATE a specific game based on id */
module.exports.update_game = async (req, res) => {
    let newBody = req.body
    let id = req.params.id

    try {
      let updated = await Game.findByIdAndUpdate(id, newBody)
      res.send(updated)
    }catch (err) {
      console.log(err.message)
      res.send(err)
    }
}
/* DELETE a single game based on the ID */
module.exports.delete_game = async (req, res) => {
  let id = req.params.id
  console.log(chalk.bgGray.blue(id))
  try{
    let deletedGame = await Game.findOneAndDelete(id)
    let noGameFound = await Game.findById(id)
    if(!noGameFound) {
      res.send('game removed successfully')
    }
    res.send('')
  }catch (err) {
    console.log(err.message)
    res.send(err)
  }
}