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

const quotes = [
  // Objects and their properties
  {quote: "Life is a mystery to be lived, not a problem to be solved", source: "Gandhi" },
  {quote: "Wise men speak because they have something to say; Fools because they have to say something.", source: "Plato" },
  {quote: "Poetry is to feelings what philosophy is to thoughts", source: "Novalis" },
  {quote: "We are always in our own company", source: "Friedrich Nietzsche", citation: "<i>The Gay Science</i>", year: "<i>1882</i>"},
  {quote: "Contentment is natural wealth, luxury is artificial poverty.", source: "Socrates" },
  {quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", source: "Lao Tzu" },
  {quote: "Others have seen what is and asked why. I have seen what could be and asked why not.", source: "Pablo Picasso" },
  {quote: "I don’t believe in art. I believe in artists.", source: "Marcel Duchamp" },
  {quote: "Love is friendship set to music.", source: "Jackson Pollock" },
  {quote: "No one should be ashamed to admit he is wrong, which is but saying, in other words, that he is wiser today than he was yesterday.", source: "Alexander Pope"},
  {quote: "The noblest pleasure is the joy of understanding", source: "Leonardo Da Vinci" },
  {quote: "Opinion is the medium between knowledge and ignorance.", source: "Plato" }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // Generates a random number between zero and the last index in the `quotes` array
  let random = Math.floor(Math.random() * quotes.length);
  // Return the variable storing the random quote object
  return quotes[random];
}



/***
 * `printQuote` function
***/

function printQuote() {
  // Stock the result of getRandomQuote() in a variable
  let randomQuote = getRandomQuote();
  // Stock the final message in a variable html, which will be used to display in the browser (js:63)
  let html = `<p class="quote">${randomQuote.quote}</p>` +
             `<p class="source">${randomQuote.source}`
      // Tests the condition and adds the code block to 'html' if evaluates true
      if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }
    // Concatenate the closing tag to 'html'. Therefore the code blocks in the 'if statements' will be added in between if condition is true
    html += `</p>`;
    // Display the quotes in the browser
     document.getElementById('quote-box').innerHTML = html;
    }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

