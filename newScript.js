const rhymeCache = {};

//utility
const wordMatchRegExp = /[^\s]+/g;
function getRandomInt(max, exceptions = new Set() ) {
  let out = Math.floor(Math.random() * max);
  while(exceptions.has(out)){out = Math.floor(Math.random() * max)}
  return out
}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button.custom-button');

  if (button) {
      button.addEventListener('click', () => {
          console.log('button clicked');
          //replaceWordsWithRhymes();
      })
  } else {
      console.error('Button not found');
  }
})



//fetching a single rhyme
async function fetchRhyme(word) {
  word = word.toLowerCase();
  if(rhymeCache[word]===undefined){
    const apiKey = 'lexfrJwqiYUwurjKTTUUDQ==oMPeRCnE2FSqlfJA';
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/rhyme?word=' + word,
        //url: ' https://rhymebrain.com/talk?function=getRhymes&word=' + word,
        headers: {'X-Api-Key': apiKey}, 
        contentType: 'application/json', 
        success: function(result) {
            //console.log(result);
            if(result.length!=0){
              rhymeCache[word] = result;

            }
        }, 
        error: function ajaxError(jqXHR) {
            console.log('Error: We got an error!!!!', jqXHR.responseText);
        }
    })
  }
  return rhymeCache[word]
}

//
//build up cache of random words to replace from the page

function scanPage() {
  const text = document.querySelectorAll('h1, h2, h3, h4, h5, p')

  //pick 50 words randomly to get rhymes for

  for(let i = 0; i < 5; i++) {
    const wordArray =[];
    //parse out words of paragrah into array
    const graph = text[i].textContent;
    const words = graph.matchAll(wordMatchRegExp);
    const rawWords = [...words];
    rawWords.forEach((word) =>{
      wordArray.push(word[0])
    }
    )
  
    for(let i = 0; i < 5 && i<wordArray.length; i++){
      const index = getRandomInt(wordArray.length);
      fetchRhyme(wordArray[index])
    }

  }

}

scanPage();


//setTimeout(console.log(rhymeCache), 1000);

function replaceWords(){ 

  const text = document.querySelectorAll('h1, h2, h3, h4, h5, p')
  console.log(rhymeCache);
  for (keyWord in rhymeCache) {
    console.log('looping');
    for(let i=0; i<text.length; i++) {
      console.log(i);
      if (text[i].innerHTML.includes(keyWord)) {
        text[i].innerHTML = text[i].innerHTML.replace(keyWord, rhymeCache[keyWord][0])
      }
    }
  }
}

setTimeout(replaceWords(), 2000);



