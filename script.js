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


async function fetchRhyme(arrOfWords) {
    const apiKey = 'lexfrJwqiYUwurjKTTUUDQ==oMPeRCnE2FSqlfJA'
    // iterate over first 4 words of array
    for(let i = 0; i < 4; i++) {
        const word = arrOfWords[i];
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/rhyme?word=' + word,
            //url: ' https://rhymebrain.com/talk?function=getRhymes&word=' + word,
            headers: {'X-Api-Key': apiKey}, 
            contentType: 'application/json', 
            success: function(result) {
                console.log(result);
            }, 
            error: function ajaxError(jqXHR) {
                console.log('Error: We got an error!!!!', jqXHR.responseText);
            }
        })
    }
}


const targetArray = ['Nathan', 'Mickey', 'Bike', 'Automobile', 'Orange']
//console.log(fetchRhyme(targetArray));


