const db = require('../models');

module.exports = function (app) {
  // GET route for getting all of the words
  app.get('/api/words/', (req, res) => {
    db.Word.findAll({}).then((dbWord) => {
      res.json(dbWord);
    });
  });

  // POST route for saving a new word
  app.post('/api/words', (req, res) => {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Word.create({
      word: req.body.word,
      partSpeech: req.body.partSpeech,
      definition: req.body.definition,
      book: req.body.book,
      author: req.body.book,
      sentence: req.body.sentence,
    }).then((dbWord) => {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbWord);
    });
  });
   // DELETE route for deleting words.
  app.delete("/api/words/:id", (req, res) => {
    db.Word.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWord) {
      res.json(dbWord);
    });
  });
};
