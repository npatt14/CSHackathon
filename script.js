//const button = document.querySelector(".custom-button")
const graphs = document.querySelectorAll('p');
//console.log('Test test')

//will contain words from the page as an array
const cleanWords = [];
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

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button.custom-button');

    if (button) {
        button.addEventListener('click', () => {
            console.log('button clicked');
            replaceWordsWithRhymes();
        })
    } else {
        console.error('Button not found');
    }
})

// FUNCTION TO TAKE IN ARRAY OF WORDS AND CHANGE THEM TO RHYME
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


// const targetArray = ['Nathan', 'Mickey', 'Bike', 'Automobile', 'Orange']
// //console.log(fetchRhyme(targetArray));

// Function to fetch rhyming words from API
// async function fetchRhyme(word) {
//     const apiKey = 'lexfrJwqiYUwurjKTTUUDQ==oMPeRCnE2FSqlfJA'; 
//     try {
//         const response = await fetch(`https://api.api-ninjas.com/v1/rhyme?word=${word}`, { 
//             headers: { // ?
//                 'X-Api-Key': apiKey
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching rhyme:', error);
//         return [];  // Return empty array on error
//     }
// }

// Function to replace words on the page with rhyming words
// function replaceWordsWithRhymes() {
//     const allElements = document.getElementsByTagName('p'); //?
//     const elementsArray = [...allElements];

//     //console.log(elementsArray);
//     for (const element of elementsArray) {
//         if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
//             continue; // Skipt script and style elements
//         }
//         const textNodes = [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE); // gets all text elements and stores them into textNodes array
        
        
//         for (const node of textNodes) { // iterate over textNodes array
//             const words = node.textContent.trim().split(/\s+/); //'  Hello   world  !  '    ->     ['Hello', 'world', '!']


//             for (const word of words) {
//                 //const rhymes = await fetchRhyme(word); // assign rhymes to the array that fetchRhyme returns passing in word as argument
//                 //if (true/*rhymes.length > 0*/) {
//                     const newWord = "bugs"; //rhymes[0]; // assign new word to the zeroth index of returned rhymes array
//                     console.log(word);
//                     NodeList.textContent = node.textContent.replace(word, newWord);
//                 //}
//             }
//         }
//     }
// }

//replaceWordsWithRhymes();
// textNodes EXPLANATION 
// - element.childNodes returns a NodeList containing all child nodes of the given element (elements, text nodes, comments, etc.). 
// - [...allElements] used to convert the returned NodeList to an array. Now we can use .filter method on it
// - .filter(node => node.nodeType === Node.TEXT_NODE) checks if the nodeType property of each node in the array === TEXT_NODE. 
// - Node.TEXT_NODE - represents the node type for a text node (a node containing text content)
// - The result of filter is stored in the textNodes array which now only contains the child nodes of element that are text nodes

// What the hell are nodes?/Text nodes??:
// in this context, nodes are the entities that make up the HTML document that we are working with. 


