const wordOutput = $('.my-words');
const partSpeechOutput = $('.part-of-speech');
const definitionOutput = $('.definition');
const sentenceOutput = $('.sentence');
const bookOutput = $('.book');
const authorOutput = $('.author');

// Input elements
const addBtn = $('.add');
const newWordInput = $('#new-word-input');
const partSpeechInput = $('#part-speech-input');
const sentenceInput = $('#sentence-input');
const bookInput = $('#book-input');
const definitionInput = $('#definition-input');
const authorInput = $('#author-input');

// GET all words
const getWords = () => {
  $.get('/api/words', function (data) {
    console.log('Words', data);
    words = data;
  });
};

// POST a new word
// TODO: present a quick confirmation form on 'add' click before saving the word to make sure there are no mistakes
const insertWord = () => {
  const word = {
    word: newWordInput.val().trim(),
    partSpeech: partSpeechInput.val(),
    definition: definitionInput.val().trim(),
    book: bookInput.val().trim(),
    author: authorInput.val().trim(),
    sentence: sentenceInput.val().trim(),
  }
  $.post("/api/words", word, getWords);
}

$(document).ready(() => {
  $('.collapsible').collapsible();
  $('select').formSelect();

  $('.tooltipped').tooltip();

  let words = [];

  // This function grabs words from the database and updates the view
  
  getWords();
});


addBtn.click((event) => {
  // prevent reloading while building, delete later
  event.preventDefault();
  insertWord();
});


// This function inserts a new todo into our database and then updates the view
//  const saveWord = (event) => {
//   event.preventDefault();
//   const word = {
//     text: $newItemInput.val().trim(),
//     complete: false
//   };

//   $.post("/api/words", todo, getTodos);
//   $newItemInput.val("");
// }

// This page will display:

// - Navbar (My Books, My languages) potentially the whole page is reflecting only one language

// - Add a new word form (word, sentence, book, additional details)

// - My recent words as cards (with collapsible info)
// API Call to Back End:

// HERE we can start by reading the words that are in the database already and create new cards for them
// ADD EDIT FUNCTION

// - list of books/languages
