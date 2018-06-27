var key = 'CrFrGJ9Ljdp4BXk5Y1PbUc1rXkYoNqi7';
var base_url = 'https://api.giphy.com/v1/gifs/search';
var limit = 5;
var rating = 'pg';

const result = document.querySelector('.result')
const form = document.querySelector('form');
const input = document.querySelector('.query');

form.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault()
    let myURL = base_url + '?q=' + input.value + '&limit=' + limit + '&rating=' + rating  + '&api_key=' + key;

    fetch(myURL)
    .then((res) => {return res.json()})
    .then((json) => displayResults(json))
}

function displayResults(res){
 for (gif of res.data) {
     console.log(gif)
     //1 create the html elements we want
    let title = document.createElement('h2')
    let img = document.createElement('iframe')

     //2 add info to the html elements - hint img.src = "imgurlhere"
    title.textContent = gif.title ;
    img.src = gif.images.downsized_large.url;
    // img.alt = 'sorry, an error ocurred';

     //3 append them to the HTML 
     result.appendChild(title);
     result.appendChild(img)
 }
}