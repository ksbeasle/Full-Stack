const {Router} = require('express')
const gameController = require('../controller/gameController')
//Router
let router = Router()

router.get('/', gameController.all_get)
router.get('/game/:id',gameController.get_game)
router.put('/game/add', gameController.add_game)
router.patch('/game/update/:id', gameController.update_game)
router.delete('/game/delete/:id', gameController.delete_game)


module.exports = router