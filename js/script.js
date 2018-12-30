/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Please note that this file uses >= ECMA2015 syntax 

/* 
quotes array with objects in it
Minimum requirements: 
    5 objects
    each object with "quote" and "source"
    min 1 object with "year" and/or "citation" 
*/
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



/* 
The following function will return an random object of the quotes array
It uses the getRandomIndex function
 */
const getRandomQuote = array => {
  const randomIndex = getRandomIndex(array);
  return array[randomIndex];
}

/* 
The following function will generate a number/index according the length of the given quotes array
e.g. if additional quotes will be added to the quotes array, the function will provide a random number that includes all quotes in the array
Please note: the function will provide a number starting from 0, because a array is 0 index based
 */
const getRandomIndex = array =>  Math.floor(Math.random() * array.length);


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

const printQuote = () => {
  const quote = getRandomQuote(quotes);
  //const { quote,source,citation,year} = quote;
  const string = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}${quote.citation ? `<span class="citation">${quote.citation}</span>` : ""}${quote.year ? `<span class="year">${quote.year}</span>` : ""}</p>`
  printStringToHTML(string);
}

const printStringToHTML = string => document.getElementById('quote-box').innerHTML = string;



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.