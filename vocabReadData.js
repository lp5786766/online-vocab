var mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  // get all of our configuration values from the .env file
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  //   addWord();
  //   updateWord();
  deleteWord();
  queryNouns();
  afterConnection();
});

//INSERT (CREATE)
const addWord = () => {
  connection.query(
    'INSERT INTO words SET ?',
    {
      word: 'lustrous',
      part_speech: 'adjective',
      definition: 'having luster; shining',
      book: 'Billy Bud, Sailor',
      author: 'Herman Melville',
      sentence:
        'It was a hot noon in July; and his face, lustrous with perspiration, beamed with barbaric good humor.',
    },
    (err, result) => {
      if (err) {
        throw err;
      }
    }
  );
};

// UPDATE
const updateWord = () => {
  connection.query(
    'UPDATE words SET ? WHERE ?',
    [
      {
        author: 'Keren',
      },
      {
        id: 2,
      },
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
    }
  );
};

// READ (SELECT)
// Query only nouns
function queryNouns() {
  const query = connection.query(
    'SELECT * FROM words WHERE part_speech=? AND book=?',
    ['noun', 'All Quiet on the Western Front'],
    (err, res) => {
      if (err) throw err;
      res.forEach((row) => {
        console.log(row.id, row.word, row.book);
      });
    }
  );
  // logs the actual query being run
  console.log(query.sql);
}

function afterConnection() {
  connection.query('SELECT * FROM words', function (err, res) {
    if (err) throw err;
    console.log(res);
    //from this data you can choose individual rows
    res.forEach((row) => {
      console.log(row.word);
    });
    connection.end();
  });
}

const deleteWord = () => {
    connection.query('DELETE FROM words WHERE ?', 
    {
        id: 3,
    },
     (err, result) => {
        if (err) {
            throw err;
        }
    });
}
