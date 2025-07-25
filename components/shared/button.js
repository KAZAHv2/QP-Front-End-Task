export function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    return button;
}
