function appear() {
    document.getElementById('a-bots').style.display= 'block';
    document.getElementById('btn-appear').style.display= 'none';
    document.getElementById('btn-hyde').style.display= 'block';
}
function hyde() {
    document.getElementById('a-bots').style.display= 'none';
    document.getElementById('btn-appear').style.display= 'block';
    document.getElementById('btn-hyde').style.display= 'none';
}

//
const url = 'https://luisprediccionj.cognitiveservices.azure.com/luis/prediction/v3.0/apps/e17c360a-696e-465b-aeb1-22afb1eb6556/slots/production/predict?verbose=true&show-all-intents=true&log=true&subscription-key=fd6fb4b6568348108372c7ee2f5e4fa8&query=hola';
fetch(url)
.then(response => response.json())
.then(data =>{ console.log(data)})
