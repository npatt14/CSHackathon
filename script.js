console.log("Hello Nathan!")
console.log("This is a popup!")

const body = document.querySelector("body")
const allText = body.textContent



async function fetchRhyme(arrOfWords) {
    const apiKey = 'lexfrJwqiYUwurjKTTUUDQ==oMPeRCnE2FSqlfJA'
    // iterate over first 4 words of array
    for(let i = 0; i < 4; i++) {
        const word = arrOfWords[i]
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/rhyme?word=' + word,
            headers: {'X-Api-Key': apiKey}, 
            contentType: 'application/json', 
            success: function(result) {
                console.log(result);
            }, 
            error: function ajaxError(jqXHR) {
                console.log('Error: We got an error!!!!', jq.XHR.responseText);
            }
        })
    }
}


const targetArray = ['Nathan', 'Mickey', 'Bike', 'Automobile', 'Orange']
console.log(fetch(targetArray));


