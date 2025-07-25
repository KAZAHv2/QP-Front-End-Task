export const footer = document.createElement('div');
footer.className = 'footer';

const logoSection = document.createElement('div');
logoSection.className = 'logo-section';
const logo = document.createElement('div');
logo.classList= 'logo museo-15-700';
logo.textContent = 'LOGO';
logoSection.appendChild(logo);
footer.appendChild(logoSection);

const infoSection = document.createElement('div');
infoSection.classList = 'info-section montserrat-16';
const infoTitle = document.createElement('h3');
infoTitle.classList = 'section-title museo-18';
infoTitle.textContent = 'Information and high risk warning:';
const infoText = document.createElement('p');
infoText.className = 'section-text';
infoText.textContent = 'Trading with foreign exchange (FX), contract for differences (CFDs) and precious metals carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade foreign exchange or contract for differences, carefully consider your investment objectives, experience level, and risk tolerance.';
infoSection.appendChild(infoTitle);
infoSection.appendChild(infoText);
footer.appendChild(infoSection);

const legalSection = document.createElement('div');
legalSection.classList = 'legal-section montserrat-16';
const legalTitle = document.createElement('h3');
legalTitle.classList = 'section-title museo-18';
legalTitle.textContent = 'Legal disclaimer:';
const legalText = document.createElement('p');
legalText.className = 'section-text';
legalText.textContent = 'Forex trading entails significant risks and is not appropriate for all investors. The possibility of incurring substantial losses should be taken into account. It is therefore important to understand the possible consequences of investing. Traders should weigh their earning potential against the risks involved and act accordingly. Interactive Trade Ltd operating under brand and using domain link within the European Economic Area.';
legalSection.appendChild(legalTitle);
legalSection.appendChild(legalText);
footer.appendChild(legalSection);

const aboutSection = document.createElement('div');
aboutSection.className = 'about-section';
const aboutList = document.createElement('ul');
aboutList.className = 'about-list';
['About us', 'Instructions', 'Platforms', 'Contact Us', 'Sign in', 'Sign up for free'].forEach(item => {
    const li = document.createElement('li');
    li.classList = 'about-item museo-15-700';
    li.textContent = item;
    aboutList.appendChild(li);
});
aboutSection.appendChild(aboutList);
footer.appendChild(aboutSection);

const copyrightSection = document.createElement('div');
copyrightSection.className = 'copyright-section';
const links = document.createElement('div');
links.className = 'copyright-links';
['Copyright 2020, All Right Reserved', 'Terms and Conditions', 'Privacy Policy', 'Risk Warnings', 'Anti-Money Laundering'].forEach(link => {
    const span = document.createElement('span');
    span.classList = 'copyright-link montserrat-16';
    span.textContent = link;
    span.addEventListener('click', () => alert(`${link} clicked!`));
    links.appendChild(span);
});
copyrightSection.appendChild(links);
footer.appendChild(copyrightSection);

document.body.appendChild(footer);
