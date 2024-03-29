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

// My words elements
const myCardsArea = $('.word-cards');
const deleteBtn = $('.delete');

// GET words to display on the page
const getWords = () => {
  let words = [];
  $.get('/api/words', (data) => {
    words = data;
    myCardsArea.empty();
    // loop over the words array and create a card for Each
    words.forEach((word, i) => {
      const wordCard = $(
        `<ul class="collapsible col s4">
      <li>
        <div class="collapsible-header">
          <p class="my-words" name="word">${word.word}</p>
          <p class="part-of-speech">${word.partSpeech}</p>
        </div>
        <div class="collapsible-body" style>
          <p class="definition">
            ${word.definition}
          </p>
          <b class="sentence"
            >"${word.sentence}"</b
          >
          <p class="book">
            ${word.book} <i class="author">by ${word.author}</i>
          </p>
          <a
            class="waves-effect waves-light btn-small tooltipped light-green"
            data-position="bottom"
            data-tooltip="Edit"
            ><i class="material-icons">edit</i></a
          >
          <a
            class="waves-effect waves-light btn-small tooltipped red lighten-1 delete"
            id="${word.id}"
            data-position="bottom"
            data-tooltip="Delete"
            ><i class="material-icons">delete_forever</i></a
          >
        </div>
      </li>
    </ul>`
      );
      myCardsArea.prepend(wordCard);
      $('.collapsible').collapsible();
      $('.tooltipped').tooltip();
    });
  });
};




$(document).ready(() => {
  // Materialize js
  $('.collapsible').collapsible();
  $('select').formSelect();
  $('.tooltipped').tooltip();


 

 

  // This function grabs words from the database and updates the view
  getWords();



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
  };
  $.post('/api/words', word, getWords);
};
addBtn.click((event) => {
  // prevent reloading while building, delete later
  event.preventDefault();
  insertWord();

});

// DELETE
// TODO: add confirmation prompt
function deleteWord(event) {
  event.stopPropagation();

  const wordId = this.id;
  
  $.ajax({
    method: 'DELETE',
    url: '/api/words/' + wordId,
    // TODO reload for now, but in the future, fix tool tip hanging
  }).then(location.reload());
  }
  $(document).on('click', 'a.delete', deleteWord);


  $('.tooltipped').tooltip();

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
});








