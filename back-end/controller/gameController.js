const Game = require('../models/game')
const chalk = require('chalk')

/* GET all games from the database */
module.exports.all_get = (req, res) => {
        Game.find({}, function(err, games) {
        if(err){
            console.log(chalk.bgBlack.red.bold.underline('Error retrieving all games: '. err.message))
            res.send(err.message)
            res.end()
        }
        console.log(chalk.bgGreenBright.blue(games))
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

/* GET a specific game based on title */
module.exports.get_game = async (req,res) => {
    
}

