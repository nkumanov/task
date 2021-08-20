import { generateTemplate } from "./example.js";




async function start() {
    let response = await fetch('./entries/money.json');
    let data = await response.json();

    generateTemplate(data.rates)

    let pairs = document.querySelectorAll('#value');
    
    let finishTime = 300000;
    let currentTime = 0;
    let fiveSeconds = 5000;

    let timer = setInterval(function () {
        if (currentTime == finishTime  - fiveSeconds) {
            clearInterval(timer);
        }
        if (Math.floor(currentTime / 60000) % 2 == 0) {
            Array.from(pairs).map(e => {
                if(Number(e.textContent) < 1.0001){
                    e.textContent = 1.0001;
                    e.style.background = 'green';
                }else{
                    e.textContent = Number(e.textContent) + 0.0001;
                    e.textContent = Number(e.textContent).toFixed(4);
                    e.style.background = 'green';
                }
            })
            currentTime += fiveSeconds;
        } else if (Math.floor(currentTime / 60000) % 2 != 0) {
            Array.from(pairs).map(e => {
                if (Number(e.textContent) - 0.0001 <= 1.0001) {
                    e.textContent = 1.0001;
                } else {
                    e.textContent = Number(e.textContent) - 0.0001;
                    e.textContent = Number(e.textContent).toFixed(4);
                    e.style.background = 'red';
                }

            })
            currentTime += fiveSeconds;
        }
    }, fiveSeconds)

}



start();
