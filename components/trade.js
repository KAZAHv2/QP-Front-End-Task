import {createButton} from "./shared/button.js";

export const tradeDiv = document.createElement('div');
tradeDiv.className = 'trade';

const tradeTextDiv = document.createElement('div');
tradeTextDiv.className = 'trade-title'

const tradeTitle = document.createElement('h1');
tradeTitle.textContent = 'Trade everywhere. Invest here!'
tradeTitle.className = 'museo-64';

const tradeDescription = document.createElement('p');
tradeDescription.textContent = 'We provide only the best trading software.' +
    ' The trading terminal MetaTrader4 is the most popular and convenient platform' +
    ' for access to global exchanges. You can work anywhere.';
tradeDescription.className = 'montserrat-18';

tradeTextDiv.appendChild(tradeTitle);
tradeTextDiv.appendChild(tradeDescription);
const button = createButton('START TRADING');
button.classList.add('trade-button');
tradeTextDiv.appendChild(button);

const tradeDivImg = document.createElement('div');
tradeDivImg.className = 'trade-img';
const tradeBlocksImage = document.createElement('img');
tradeBlocksImage.src = 'assets/blocks.svg';
tradeDivImg.appendChild(tradeBlocksImage);

tradeDiv.appendChild(tradeTextDiv);
tradeDiv.appendChild(tradeDivImg);

