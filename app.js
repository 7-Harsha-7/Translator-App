//input
// var userName = prompt("Give your name")
//processing
// var welcomeMessage = "This script works!! "+ userName 
//output
// alert(welcomeMessage)
var button = document.querySelector("#btn")
var text = document.querySelector("#txt")
var output = document.querySelector("#output")
// console.log(button);
// function clickEventHandler() {
//     console.log("clicked!");
    // console.log(text.value);

// };
var url = "https://api.funtranslations.com/translate/minion.json"
function constructUrl(inputtext) {
    return url + "?text=" + inputtext;
}

function errorHandler(error){
    console.log("error occured"+ error)
    alert("Something went wrong with server! try again later")
}
button.addEventListener("click", function clickEventHandler() {
    var inputtxt= text.value
    fetch(constructUrl(inputtxt))
    .then(response => response.json())
    .then(json => {
       var content = json.contents.translated
       output.innerText = content
    })
    .catch(errorHandler)
})