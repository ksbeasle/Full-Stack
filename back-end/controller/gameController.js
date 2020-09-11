const mongoose = require('mongoose')
const Game = require('../models/game')
const chalk = require('chalk')

module.exports.all_get = async (req, res) => {
   const allGames = Game.find({}, function(err, games) {
        if(err){
            console.log(chalk.bgBlack.red.bold.underline('Error retrieving all games: '. err.message))
            res.end()
        }
        console.log(chalk.bgGreenBright.blue(allGames))
        console.log(chalk.bgGreenBright.blue(games))
        res.send(games)
    })

    
}

