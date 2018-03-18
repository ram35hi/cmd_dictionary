#!/usr/bin/env node

const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const wordnikApi = require('./apis/wordnikapi');

if (process.argv.length == 2) {
    console.log('Getting word of the day...');
    wordnikApi.wordOfTheDay();
}
program.arguments('command', 'word').action(async(command, word) => {
    switch (command) {
        case "def":
            {
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Definition" of the word: "%s" \n', word);
                    wordnikApi.getDefinition(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        case "syn":
            {
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Synonyms" of the word: "%s" \n', word);
                    wordnikApi.getSynonym(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        case "ant":
            {
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Antonyms" of the word: "%s" \n', word);
                    wordnikApi.getAntonym(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        case "ex":
            {
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Example" of the word: "%s" \n', word);
                    wordnikApi.getExample(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        case "dict":
            {
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Details" of the word: "%s" \n', word);
                    wordnikApi.getDefinition(word)
                    wordnikApi.getSynonym(word)
                    wordnikApi.getAntonym(word)
                    wordnikApi.getExample(word)
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        case "play":
            {
                if (word && typeof word == 'string') {
                    console.log('\nPreparing the ground for a game \n');
                    wordnikApi.startGame(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
        default:
            {
                if (typeof word == 'object')
                    var word = command;
                if (word && typeof word == 'string') {
                    console.log('\nGetting "Details" of the word : "%s". \n', word);
                    wordnikApi.getDefinition(word);
                    wordnikApi.getSynonym(word);
                    wordnikApi.getAntonym(word);
                    wordnikApi.getExample(word);
                } else {
                    console.log('Please enter valid word \n');
                }
                break;
            }
    }
}).parse(process.argv);