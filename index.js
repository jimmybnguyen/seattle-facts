'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Seattle Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The Seattle City Council designated the Great Blue Heron as the official City Bird on March 17, 2003.",
    "The Council adopted an official City Flag on July 16, 1990. The flag is a white and teal blue/green flag with a stylized portrait of Chief Stealth  ringed by the words Seattle, City of Goodwill.",
    "The dahlia was established as the City flower on November 19, 1913.",
    "The current City Seal was adopted in 1937.",
    "Seattle has two official city slogans, The City of Flowers, and The City of Goodwill.",
    "The city of Seattle is 91.5 square miles. This includes 88.5 square miles of land area, and 3 square miles of water area.",
    "Seattle's first ordinance was approved December 22, 1869, designed to regulate public conduct.",
    "Denny Park was the City's first public park, established as City Park in 1884.",
    "The population in Seattle was 1107 in 1870. It was 563,374 in the year 2000.",
    "World War 1 transformed Seattle's shipbuilding industry, which turned out 20 percent of the nation's wartime ship tonnage.",
    "Seattle the Peerless City is the official city song."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Seattle fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};