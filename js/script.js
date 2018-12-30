/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
const quotes = [
  {
    quote: "Every new beginning comes from some other beginning's end.",
    source: "Seneca",
  },
  {
    quote: "Later equals never.",
    source: "Dave LeBlanc",
  },
  {
    quote: "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    source: "Douglas Hofstadter",
    year: "1979",
    citation: "Gödel, Escher, Bach: An Eternal Golden Braid",
  },
  {
    quote: "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    source: " Tom Cargill",
    citation: "Bell Labs",
  },
  {
    quote: "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.",
    source: "Bill Gates",
  },
]




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

const getRandomQuote = () => {

}


// The following function will generate a number according the length of the given quotes array
// e.g. if additional quotes will be added to the quotes array, the function will provide a random number that includes all quotes in the array
// Please note: the function will provide a number starting from 0, because a array is 0 index based
const getRandomNumber = (array) => {
  return Math.floor(Math.random() * array.length);
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.