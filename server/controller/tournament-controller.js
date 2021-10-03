const tournamentModel = require("../models/tournament-model");

createTournament = async (req,res) => {
    // return res.send("hellow super");
    
    const body = req.body;

    // if(!body){
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide complete details of tournament'
    //     })
    // }else{
    // console.log(body);
    // // res.send(body);
    // res.send("hellow super");

    // }
    const tournament = await new tournamentModel(body);

    // if(!tournament){
    //     return res.status(200).json({
    //         success: false,
    //         message: "nope"
    //     })    
    // }
    // if(!tournament){
    //     return res.status(400).json({success: false, error: err});
    // }

    await tournament
        .save()
        .then(()=>  {
            return res.status(201).json({
                success: true,
                id: tournament._id,
                message: 'Tournament created',
            })
        })
        .catch( () => {
            error=>{
                return res.status(400).json({
                    error,
                    message: "Tournament not created",
                })
            }
        })
}

getTournaments = async (req, res) => {
    await tournamentModel.find({}, (err, tournaments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tournaments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tournaments not found` })
        }
        return res.status(200).json({ success: true, data: tournaments })
    }).catch(err => console.log(err))
}

module.exports = {
    createTournament,
    getTournaments,
}