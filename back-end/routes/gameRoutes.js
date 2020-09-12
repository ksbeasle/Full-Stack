const {Router} = require('express')
const gameController = require('../controller/gameController')
//Router
let router = Router()

router.get('/', gameController.all_get)
router.put('/game/add', gameController.add_game)


module.exports = router