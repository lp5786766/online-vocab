DROP DATABASE IF EXISTS online_vocab;
CREATE DATABASE online_vocab;
USE online_vocab;

CREATE TABLE words (
 id INTEGER AUTO_INCREMENT NOT NULL,
 word VARCHAR(255) NOT NULL,
 partSpeech VARCHAR(255) NOT NULL,
 definition VARCHAR(255) NOT NULL,
 book VARCHAR(255) NOT NULL,
 author VARCHAR(255) NOT NULL,
 sentence TEXT NOT NULL,
 PRIMARY KEY(id)
);