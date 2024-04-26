console.log("Hello Nathan!")
console.log("This is a popup!")

const graphs = document.querySelectorAll('p');

//will contain
const cleanWords =[];
//cycle through graphs
graphs.forEach( (p) =>{
  //take the text content of the graph
  const pText = p.textContent;
  //assemble it into an array
  const wordMatchRegExp = /[^\s]+/g;
  const words = pText.matchAll(wordMatchRegExp);
  const rawWords = [...words];
  //gather into cleanWords
  //console.log(rawWords);
  rawWords.forEach((word)=>{
    cleanWords.push(word[0])
  })
  }
)
console.log(cleanWords)


