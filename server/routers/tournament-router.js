const express = require('express')

const TournamentController = require("../controller/tournament-controller")

const router = express.Router()

router.get('/tournaments', TournamentController.getTournaments)
router.post('/tournament', TournamentController.createTournament)
    

module.exports = router