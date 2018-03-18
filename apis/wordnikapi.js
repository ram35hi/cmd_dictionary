const request = require('request');
const appConfig = require('../config');
module.exports = {
    getDefinition: async(word) => {
        request(appConfig.wordnik.url + '/word.json/' + word + '/definitions?limit=1&includeRelated=true&sourceDictionaries=ahd&useCanonical=false&includeTags=false&api_key=' + appConfig.wordnik.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                var defArray = JSON.parse(body);
                if (defArray && Array.isArray(defArray) && defArray.length > 0) {
                    var def = "";
                    defArray.forEach((obj) => {
                        def += obj.text + "\n";
                    })
                    console.log('\nDefinition:', def);
                } else {
                    console.warn('The word doesn\'t exist')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    },
    wordOfTheDay: () => {
        request(appConfig.wordnik.url + '/word.json/wordOfTheDay?api_key=' + appConfig.wordnik.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                var wordOfTheDay = JSON.parse(body);
                if (wordOfTheDay) {
                    console.log("\nwordOfTheDay: " + (wordOfTheDay && wordOfTheDay.word ? wordOfTheDay.word : ''))
                } else {
                    console.warn('Failed while getting the antonyms of word.')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    },
    getSynonym: (word) => {
        request(appConfig.wordnik.url + '/word.json/' + word + '/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=' + appConfig.wordnik.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                var synArray = JSON.parse(body);
                if (synArray && Array.isArray(synArray) && synArray.length > 0) {
                    console.log("\nSynonyms: " + (synArray[0] ? synArray[0].words.join(",") : ''));
                } else {
                    console.warn('Failed while getting the synonyms of word.')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    },
    getAntonym: (word) => {
        request(appConfig.wordnik.url + '/word.json/' + word + '/relatedWords?useCanonical=true&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=' + appConfig.wordnik.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                var antArray = JSON.parse(body);
                if (antArray && Array.isArray(antArray) && antArray.length === 0) {
                    console.warn('Failed while getting the antonyms of word.')
                } else {
                    console.log("\nAntonyms: " + (antArray[0] ? antArray[0].words.join(",") : ''));
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });

    },
    getExample: (word) => {
        request(appConfig.wordnik.url + '/word.json/' + word + '/topExample?useCanonical=true&api_key=' + appConfig.wordnik.apiKey, async(error, response, body) => {
            if (error)
                console.warn('Oops! Something went wrong!!!\n Error :', error);
            if (response && response.statusCode == 200) {
                var exObj = JSON.parse(body);
                if (exObj) {
                    console.log("\nExample: " + (exObj && exObj.text ? exObj.text : ''))
                } else {
                    console.warn('Failed while getting the antonyms of word.')
                }
            } else {
                console.warn('Oops! Something went wrong!!!\n Error :', body);
            }
        });
    },
    startGame: () => {
        console.warn('Work in progress');
    }
}