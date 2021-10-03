const mongoose = require('mongoose')
const uri = "mongodb+srv://shyam_baba:123@cluster0.schge.mongodb.net/bhakti_db?retryWrites=true&w=majority";
const dbName = "bhakti_db";

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db



// extra unused code

// async function run() {
//     try {
//          await client.connect();
//          console.log("Connected correctly to server");
//          const db = client.db(dbName);
//          // Use the collection "people"
//          const col = db.collection("tournaments");
//          // Construct a document                                                                                                                                                              
//          let personDocument = {
//              "name": { "first": "Alan", "last": "Turing" },
//              "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
//              "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
//              "contribs": [ "Turing machine", "Turing test", "Turingery" ],
//              "views": 1250000
//          }
//          // Insert a single document, wait for promise so we can read it back
//          const p = await col.insertOne(personDocument);
//          // Find one document
//          const myDoc = await col.findOne();
//          // Print to the console
//          console.log(myDoc);
//         } catch (err) {
//          console.log(err.stack);
//      }
 
//      finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);


// client.connect(err => {
//   const collection = client.db("bhakti_db").collection("tournaments");
//   // perform actions on the collection object
//   // console.log(client);
//   client.close();
// });

