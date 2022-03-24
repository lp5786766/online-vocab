const wordOutput = $('.my-words');
const partSpeechOutput = $('.part-of-speech');
const definitionOutput = $('.definition');
const sentenceOutput = $('.sentence');
const bookOutput = $('.book');
const authorOutput = $('.author');

$(document).ready(function () {
  $('.collapsible').collapsible();
  $('select').formSelect();

  let words = [];
  
  // This function grabs posts from the database and updates the view
  const getWords = () => {
    $.get('/api/words', function (data) {
      console.log('Words', data);
      words = data; 
    });
  };
  getWords();

});

// This page will display:

// - Navbar (My Books, My languages) potentially the whole page is reflecting only one language

// - Add a new word form (word, sentence, book, additional details)

// - My recent words as cards (with collapsible info)
// API Call to Back End:

// HERE we can start by reading the words that are in the database already and create new cards for them
// ADD EDIT FUNCTION

// - list of books/languages
