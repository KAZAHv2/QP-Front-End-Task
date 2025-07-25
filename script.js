import {header} from "./components/header.js";
import {tradeDiv} from "./components/trade.js";
import {gettingStartedDiv} from "./components/gettingStart.js";
import {sliderContainer} from "./components/slider.js";
import {questionsDiv} from "./components/questions.js";
import {container} from "./components/form.js";
import {footer} from "./components/footer.js";

document.body.style.margin = '0px';

console.log({
    header,
    tradeDiv,
    gettingStartedDiv,
    sliderContainer,
    questionsDiv,
});

document.body.prepend(header, tradeDiv, gettingStartedDiv, sliderContainer, questionsDiv, container, footer);

