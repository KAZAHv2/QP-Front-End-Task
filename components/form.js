// Create container
import {createButton} from "./shared/button.js";

export const container = document.createElement('div');
container.classList = 'main-form-div';

export const containerDescriptions = document.createElement('div');
container.appendChild(containerDescriptions);
containerDescriptions.className = 'main-cont-desc';

// Create heading
const heading = document.createElement('h1');
heading.textContent = 'Contact us!';
heading.className = 'museo-56';
containerDescriptions.appendChild(heading);

// Create description
const description = document.createElement('p');
description.textContent = 'The support staff and customer service are available to help you with any questions or needs you might have. Just drop us a line.';
description.className = 'montserrat-18';
containerDescriptions.appendChild(description);

// Create company info
const companyInfo = document.createElement('p');
companyInfo.textContent = 'This site is owned and operated by Kode Tech Solutions LTD';
companyInfo.className = 'montserrat-16';
containerDescriptions.appendChild(companyInfo);

const companyPhone = document.createElement('p');
companyPhone.textContent = 'Phone:';
companyPhone.classList = 'museo-15-500 comp-info-title';
containerDescriptions.appendChild(companyPhone);

const phone = document.createElement('p');
phone.textContent = '442038857261';
phone.classList = 'montserrat-16 comp-info-description';
containerDescriptions.appendChild(phone);

const companyEmail = document.createElement('p');
companyEmail.textContent = 'Email:';
companyEmail.classList = 'museo-15-500 comp-info-title';
containerDescriptions.appendChild(companyEmail);

const email = document.createElement('p');
email.textContent = 'help@google.com';
email.classList = 'montserrat-16 comp-info-description';
containerDescriptions.appendChild(email);

const companyAddress = document.createElement('p');
companyAddress.textContent = 'Address:';
companyAddress.classList = 'museo-15-500 comp-info-title';
containerDescriptions.appendChild(companyAddress);

const address = document.createElement('p');
address.textContent = 'Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands, MH 96960';
address.classList = 'montserrat-16 comp-info-description';
containerDescriptions.appendChild(address);

// Create form container
const formContainer = document.createElement('div');
formContainer.classList = 'form-container';


// Create form
const form = document.createElement('form');
form.id = 'contactForm';
form.style = `
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Create input fields
const inputs = [
    { label: 'Name', type: 'text', id: 'name' },
    { label: 'Email', type: 'email', id: 'email' },
    { label: 'Message', type: 'textarea', id: 'message' }
];

inputs.forEach(input => {

    let inputElement;
    if (input.type === 'textarea') {
        inputElement = document.createElement('textarea');
        inputElement.rows = 4;
        inputElement.placeholder = input.label;
        inputElement.classList = 'form-input montserrat-16';
    } else {
        inputElement = document.createElement('input');
        inputElement.type = input.type;
        inputElement.placeholder = input.label;
        inputElement.classList = 'form-input montserrat-16';
    }
    inputElement.id = input.id;
    inputElement.name = input.id;
    inputElement.style = `
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  `;

    // Error message element
    const errorMsg = document.createElement('span');
    errorMsg.id = `${input.id}-error`;
    errorMsg.style = `
    font-size: 12px;
    display: block;
    margin-top: 5px;
    visibility: hidden;
  `;

    if (input.id === 'email') {
        inputElement.required = true;
        form.appendChild(inputElement);
        form.appendChild(errorMsg);
    } else {
        form.appendChild(inputElement);
    }
});

// Create submit button
const submitBtn = createButton('SEND');
const buttonDivForm = document.createElement('div');
buttonDivForm.classList = 'form-button-container';
submitBtn.type = 'submit';
buttonDivForm.appendChild(submitBtn);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const errorMsg = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        email.style.borderColor = 'red';
        errorMsg.textContent = 'Please enter a valid email address.';
        errorMsg.style.color = 'red';
        errorMsg.style.visibility = 'visible';
    } else {
        email.style.borderColor = 'green';
        errorMsg.textContent = 'Email is valid!';
        errorMsg.style.color = 'green';
        errorMsg.style.visibility = 'visible';
        setTimeout(() => {
            alert('Form submitted successfully!');
            form.reset();
            email.style.borderColor = '#ccc';
            errorMsg.style.visibility = 'hidden';
        }, 500);
    }
});

// Append form to form container and container
form.appendChild(buttonDivForm);
formContainer.appendChild(form);
container.appendChild(formContainer);

// Add basic CSS for body
