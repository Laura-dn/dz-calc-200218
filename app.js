function calc(ev) {
    let clickBtn = ev.target.value,
        iFace = document.querySelector("#iFace");
    
    switch(clickBtn) {
        case "/":
            iFace.innerHTML += clickBtn;
            break;
        case "7":
            iFace.innerHTML += clickBtn;
            break;
        case "8":
            iFace.innerHTML += clickBtn;
            break;
        case "9":
            iFace.innerHTML += clickBtn;
            break;
        case "*":
            iFace.innerHTML += clickBtn;
            break;
        case "4":
            iFace.innerHTML += clickBtn;
            break;
        case "5":
            iFace.innerHTML += clickBtn;
            break;
        case "6":
            iFace.innerHTML += clickBtn;
            break;
        case "-":
            iFace.innerHTML += clickBtn;
            break;
        case "1":
            iFace.innerHTML += clickBtn;
            break;
        case "2":
            iFace.innerHTML += clickBtn;
            break;
        case "3":
            iFace.innerHTML += clickBtn;
            break;
        case "+":
            iFace.innerHTML += clickBtn;
            break;
        case ".":
            iFace.innerHTML += clickBtn;
            break;
        case "0":
            iFace.innerHTML += clickBtn;
            break;
        case "←":
            iFace.innerHTML = iFace.innerHTML.substring(0, iFace.innerHTML.length - 1);
            break;
        case "AC":
            iFace.innerHTML = "";
            break;
        case "=":
            iFace.innerHTML = eval(iFace.innerHTML); //Данный метод нельзя использовать. Переводится в народе как "зло"
            break;
        default:
            break;
    }
}

// проходим for по всем кнопкам и вешаем обработчик событий
let DOMInput = document.querySelectorAll("input");

for(let i = 0; i < DOMInput.length; i++) {
    DOMInput[i].addEventListener("click", calc);
}