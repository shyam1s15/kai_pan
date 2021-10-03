const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Tournament = new Schema(
    {
        game_name: { type: String, required: true },
        game_type: { type: String, required: true },
        player_participant: { type: Number, required: true },
        total_player: {  type: Number, required: true},
        place: {type: String, required: true},
        start_date: {type: Date, required: false},
        end_date: {type: Date, required: false},
        entry_fees: { type: Number, required: true },
        win_price: { type: Number, required: true },
    }
)
module.exports = mongoose.model('tournaments', Tournament)

// client.connect(err => {
//   const collection = client.db("bhakti_db").collection("tournaments");
//   // perform actions on the collection object
//   // console.log(client);
//   client.close();
// });

// {
//     game_name: "avengers: startgame",
//     game_type: "sarvival battle 2",
//     player_participant: 30,
//     total_player: 10,
//     place: "Earth",
//     start_date: "{{currentDate}}",
//     end_date: "{{currentDate}}",
//     entry_fees: 550,
//     win_price: 20000
// }
