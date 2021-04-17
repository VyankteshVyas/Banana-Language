let btnTranslate=document.querySelector("#btn-translate");
let textAreainp=document.querySelector("#txt-input");
let outputarea=document.querySelector("#output");
console.log(btnTranslate);
btnTranslate.addEventListener("click",cel);
function cel(){
    var inputText = textAreainp.value; 
    console.log("hai");
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputarea.innerText = translatedText;
           })
        .catch(errorHandler)
}


var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}




