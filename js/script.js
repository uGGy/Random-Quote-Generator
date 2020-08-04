/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {quote: "Life is a mystery to be lived, not a problem to be solved", source: "Gandhi" },
  {quote: "Wise men speak because they have something to say; Fools because they have to say something.", source: "Plato" },
  {quote: "Poetry is to feelings what philosophy is to thoughts", source: "Novalis" },
  {quote: "We are always in our own company", source: "Friedrich Nietzsche", citation: "<i> - The Gay Science</i>", date: " <i>1882</i>"},
  {quote: "Contentment is natural wealth, luxury is artificial poverty.", source: "Socrates" },
  {quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", source: "Lao Tzu" },
  {quote: "Others have seen what is and asked why. I have seen what could be and asked why not.", source: "Pablo Picasso" },
  {quote: "I don’t believe in art. I believe in artists.", source: "Marcel Duchamp" },
  {quote: "Love is friendship set to music.", source: "Jackson Pollock" },
  {quote: "No one should be ashamed to admit he is wrong, which is but saying, in other words, that he is wiser today than he was yesterday.", source: "Alexander Pope"},
  {quote: "The noblest pleasure is the joy of understanding", source: "Leonardo Da Vinci" },
  {quote: "Opinion is the medium between knowledge and ignorance.", source: "Plato" }
];

let randomQuote =  "";

/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
 var quoteIndex = Math.floor(Math.random() * quotes.length);
 for (i = 0; i < quote.length ; i++) {
   let randomQuote = array[quoteIndex];

} return randomQuote;

 
}



/***
 * `printQuote` function
***/

function printQuote() {
  

}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);