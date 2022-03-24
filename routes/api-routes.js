const db = require('../models');

module.exports = function (app) {
  // GET route for getting all of the posts
  app.get('/api/words/', (req, res) => {
    db.Word.findAll({}).then((dbWord) => {
      res.json(dbWord);
    });
  });
};
