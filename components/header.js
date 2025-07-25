import {createButton} from "./shared/button.js";

export const header = document.createElement('header');
header.className = 'header';

const left = document.createElement('div');
left.style.display = 'flex';
left.style.alignItems = 'center';
left.style.gap = '24px';


const logo = document.createElement('div');
logo.textContent = 'LOGO';
logo.classList = 'museo-15-700 header-logo';
left.appendChild(logo);


const navLinks = ['How it works', 'About', 'Instructions', 'Accounts', 'Platforms', 'Contact'];
const navLinksDiv = document.createElement('div');
navLinksDiv.classList = 'nav-links';
navLinks.forEach(text => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = text;
    link.style.textDecoration = 'none';
    link.className = 'museo-15-500';
    navLinksDiv.appendChild(link)
});

left.appendChild(navLinksDiv);

const right = document.createElement('div');
right.style.display = 'flex';
right.style.alignItems = 'center';
right.style.gap = '12px';

const langs = ['EN', 'UA', 'DE', 'FR'];

const langSelect = document.createElement('select');
langSelect.className = 'lang-select';

langs.forEach(lang => {
    const langOption = document.createElement('option');
    langOption.value = lang;
    langOption.textContent = lang;
    langSelect.appendChild(langOption);
});

right.appendChild(langSelect);

const menu = document.createElement('img');
menu.className = 'menu';
menu.src = './assets/menu.svg';
menu.alt = 'Menu icon';

const navContainer = document.createElement('nav');
navContainer.className = 'nav-container';

const navList = document.createElement('ul');
navList.className = 'nav-list';

navLinks.forEach(linkText => {
    const li = document.createElement('li');
    li.classList = 'nav-item montserrat-18';
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = '#';
    a.textContent = linkText;
    li.appendChild(a);
    navList.appendChild(li);
});

navContainer.appendChild(navList);
document.body.appendChild(menu);
document.body.appendChild(navContainer);

menu.addEventListener('click', () => {
    const isOpen = navContainer.classList.contains('open');
    navContainer.classList.toggle('open', !isOpen);
    menu.src = isOpen ? './assets/menu.svg' : './assets/close.svg';
    menu.alt = isOpen ? 'Menu icon' : 'Close menu';
});

const button = createButton('SIGN IN FOR FREE');
button.classList.add('nav-button');

right.appendChild(button);
right.appendChild(menu);

header.appendChild(left);
header.appendChild(right);
