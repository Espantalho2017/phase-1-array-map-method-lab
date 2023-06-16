const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
// code from above that does this lab with map() method
// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");
// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
//   }).join(" ");
// 

function titleCased() {
  return tutorials.map((title) => {
      
      const words = title.split(" ");
      return words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");
    }) ;
  };

console.log(titleCased());

