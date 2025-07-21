document.body.style.margin = '0px';

// HEADER

const header = document.createElement('header');
header.style.cssText = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #ddd;
  font-family: sans-serif;
`;

const left = document.createElement('div');
left.style.display = 'flex';
left.style.alignItems = 'center';
left.style.gap = '24px';


const logo = document.createElement('div');
logo.textContent = 'LOGO';
logo.style.fontWeight = 'bold';
left.appendChild(logo);


const navLinks = ['How it works', 'About', 'Instructions', 'Accounts', 'Platforms', 'Contact'];
navLinks.forEach(text => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = text;
    link.style.textDecoration = 'none';
    link.style.color = '#111';
    link.style.fontSize = '14px';
    left.appendChild(link);
});


const right = document.createElement('div');
right.style.display = 'flex';
right.style.alignItems = 'center';
right.style.gap = '12px';

const langs = ['EN', 'UA', 'DE', 'FR'];

const langSelect = document.createElement('select');

langs.forEach(lang => {
    const langOption = document.createElement('option');
    langOption.value = lang;
    langOption.textContent = lang;
    langSelect.appendChild(langOption);
});

right.appendChild(langSelect);

const signInBtn = document.createElement('button');
signInBtn.textContent = 'SIGN IN FOR FREE';
signInBtn.style.cssText = `
  padding: 8px 16px;
  background: #6A4DF4;
  color: white;
  border: none;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
right.appendChild(signInBtn);

header.appendChild(left);
header.appendChild(right);

// HEADER

// TRADE DIV

const tradeDiv = document.createElement('div');
tradeDiv.style.cssText = 'display: flex'

const tradeTextDiv = document.createElement('div');

const tradeTitle = document.createElement('h1');
tradeTitle.textContent = 'Trade everywhere. Invest here!'

const tradeDescription = document.createElement('p');
tradeDescription.textContent = 'We provide only the best trading software.' +
    ' The trading terminal MetaTrader4 is the most popular and convenient platform' +
    ' for access to global exchanges. You can work anywhere.';

tradeTextDiv.appendChild(tradeTitle);
tradeTextDiv.appendChild(tradeDescription);

const tradeBlocksImage = document.createElement('img');
tradeBlocksImage.src = 'assets/blocks.svg';

tradeDiv.appendChild(tradeTextDiv);
tradeDiv.appendChild(tradeBlocksImage);



// TRADE DIV


// GETTING STARTED DIV
const stepsData = [
    {
        number: "01.",
        title: "Register",
        text: "Complete the simple registration to get your trading credentials."
    },
    {
        number: "02.",
        title: "Verification",
        text: "Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes."
    },
    {
        number: "03.",
        title: "Deposit funds",
        text: "Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps."
    },
    {
        number: "04.",
        title: "Start Trading",
        text: "Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account."
    }
];

const gettingStartedDiv = document.createElement('div');

const heading = document.createElement('h1');
heading.className = 'heading';
heading.innerHTML = 'Getting Started Is <span class="highlight">Fast & Easy</span>';
gettingStartedDiv.appendChild(heading);

const stepsContainer = document.createElement('div');
stepsContainer.className = 'steps';

stepsData.forEach(step => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';

    const number = document.createElement('div');
    number.className = 'step-number';
    number.textContent = step.number;

    const title = document.createElement('div');
    title.className = 'step-title';
    title.textContent = step.title;

    const text = document.createElement('div');
    text.className = 'step-text';
    text.textContent = step.text;

    stepDiv.appendChild(number);
    stepDiv.appendChild(title);
    stepDiv.appendChild(text);
    stepsContainer.appendChild(stepDiv);
});

gettingStartedDiv.appendChild(stepsContainer);
// GETTING STARTED DIV


document.body.prepend(header, tradeDiv, gettingStartedDiv);

