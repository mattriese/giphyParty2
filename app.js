'use strict';


$("#submit-btn").on('submit', searchGiphy)

//make fn that gets the value of the form's input;
//let response;
let response;

async function searchGiphy(e) {
    e.preventDefault();
    let searchTerm = $('#search').val();
    response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:searchTerm, api_key:'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    console.log("response.data is", response.data);
    console.log("response image is", response.data.data[0].images.original.url);
    let image = response.data.data[0].images.original.url;
    appendGiphy(image);
}
console.log("Let's get this party started!");

function appendGiphy(imgUrl){
    $("#images").append(`<img src="${imgUrl}">`)
}
