// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// // Insert word (traversy manual)
// app.get('/addword1', (req, res) => {
//   let word = {
//     word: 'W',
//     part_speech: 'noun',
//     definition: 'win, victory',
//     book: 'quoting Evan',
//     author: 'Evan Rogers',
//     sentence: 'We need that W!',
//   };
//   let sql = 'INSERT INTO words SET ?';
//   let query = db.query(sql, word, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//     res.send('word 1 added');
//   });
// });


// //********QUERIES *******/
// //INSERT (CREATE)
// const addWord = () => {
//   connection.query(
//     'INSERT INTO words SET ?',
//     {
//       word: 'lustrous',
//       part_speech: 'adjective',
//       definition: 'having luster; shining',
//       book: 'Billy Bud, Sailor',
//       author: 'Herman Melville',
//       sentence:
//         'It was a hot noon in July; and his face, lustrous with perspiration, beamed with barbaric good humor.',
//     },
//     (err, result) => {
//       if (err) {
//         throw err;
//       }
//     }
//   );
// };

// // UPDATE
// const updateWord = () => {
//   connection.query(
//     'UPDATE words SET ? WHERE ?',
//     [
//       {
//         author: 'Keren',
//       },
//       {
//         id: 2,
//       },
//     ],
//     (err, result) => {
//       if (err) {
//         throw err;
//       }
//     }
//   );
// };

// // READ (SELECT)
// // Query only nouns
// function queryNouns() {
//   const query = connection.query(
//     'SELECT * FROM words WHERE part_speech=? AND book=?',
//     ['noun', 'All Quiet on the Western Front'],
//     (err, res) => {
//       if (err) throw err;
//       res.forEach((row) => {
//         console.log(row.id, row.word, row.book);
//       });
//     }
//   );
//   // logs the actual query being run
//   console.log(query.sql);
// }

// // DELETE
// const deleteWord = () => {
//   connection.query(
//     'DELETE FROM words WHERE ?',
//     {
//       id: 3,
//     },
//     (err, result) => {
//       if (err) {
//         throw err;
//       }
//     }
//   );
// };

// // Initial function

// function afterConnection() {
//   connection.query('SELECT * FROM words', function (err, res) {
//     if (err) throw err;
//     // console.log(res);
//     //from this data you can choose individual rows
//     res.forEach((row) => {
//       console.log(row.book);
//     });
//   });
// }
