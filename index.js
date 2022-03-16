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

//1.get access to each sentence
//2. touch each word
//3. capitalize each first letter only
//4. return the array




const titleCased = () => {
  return tutorials.map((phrase) => {
    const words = phrase.split(" ");
    const catPhrase = words.map((word) => {
     return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const answer = catPhrase.join(" ")
    return answer;
  });

  


   

/*const titleCased = () => {
  let words = tutorials.split(" ");
  let firstLetter = tutorials.map(element => words.charAt(0).toUpperCase());
  let restOf = tutorials.map(element => element.slice(1));
  console.log(words);
  return firstLetter + restOf;*/
}

