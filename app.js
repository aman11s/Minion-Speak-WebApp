var inputText = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function textTranslate(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something wrong with the server. Try again after sometime.")
}

function clickHandler() {
    var textInput = inputText.value;
    fetch(textTranslate)
        .then(response => response.json())
        .then(json => {
                var translatedText = json.contents.translated;
                translatedText.innerText;
            }
        })
        .catch(errorHandler);


    btnTranslate.addEventListener("click", clickHandler);