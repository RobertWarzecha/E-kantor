let nameElement = document.querySelector(".form__input");
let formElement = document.querySelector(".form");
let me = document.querySelector(".imie");
let me1 = document.querySelector(".imie1");

let form2Element = document.querySelector(".form2");
let euroElement = document.querySelector(".euro");
let dolarElement = document.querySelector(".dolar");
let koronaElement = document.querySelector(".korona");
let jenElement = document.querySelector(".jen");

let form3Element = document.querySelector(".form3");
let zlotyElement = document.querySelector(".zloty");
let euro = document.querySelector(".euroEnd");
let dolar = document.querySelector(".dolarEnd");
let jen = document.querySelector(".jenEnd");
let korona = document.querySelector(".koronaEnd");

formElement.addEventListener ("submit", (event) => {
    event.preventDefault();
    let date = nameElement.value;
    let length = nameElement.value.length
    let first = date.slice(0, 1);
    let all = date.slice(1, length);
    let bigFirst =first.toUpperCase();
    let bigName = bigFirst+all;
    console.log(bigName);
    me.innerText = bigName;
    me1.innerText = bigName;
}
)

form2Element.addEventListener ("submit", (event) => {
    event.preventDefault();
    let euro1 = euroElement.value;
    let dolar1 = dolarElement.value;
    let jen1 = jenElement.value;
    let korona1 = koronaElement.value;
    console.log("Kurs Euro "+euro1);
    console.log("Kurs Dolara "+dolar1);
    console.log("Kurs Korony "+korona1);
    console.log("Kurs Jena "+jen1);
    

}
)
form3Element.addEventListener ("submit", (event) => {
    event.preventDefault();
    let euro1 = euroElement.value;
    let dolar1 = dolarElement.value;
    let jen1 = jenElement.value;
    let korona1 = koronaElement.value;
    let zloty = zlotyElement.value
    console.log("W E-portwelu znajduje się "+zloty+" PLN");
    let finishEuro = zloty/euro1
    let finishDolar = zloty/dolar1
    let finishJen = zloty/jen1
    let finishKorona = zloty/korona1
    euro.innerText = finishEuro.toFixed(2);
    dolar.innerText = finishDolar.toFixed(2);
    jen.innerText = finishJen.toFixed(2);
    korona.innerText = finishKorona.toFixed(2);
}
)