const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    word: DataTypes.STRING,
    partSpeech: DataTypes.STRING,
    definition: DataTypes.STRING,
    book: DataTypes.STRING,
    author: DataTypes.STRING,
    sentence: DataTypes.STRING,
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });
  return Word;
};
