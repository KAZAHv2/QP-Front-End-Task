const stepsData = [
    {
        number: "01.",
        title: "Register",
        text: "Complete the simple registration to get your trading credentials."
    },
    {
        number: "02.",
        title: "Verification",
        text: "Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.",
        imageClass: "first-line"
    },
    {
        number: "03.",
        title: "Deposit funds",
        text: "Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.",
        imageClass: "second-line"
    },
    {
        number: "04.",
        title: "Start Trading",
        text: "Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.",
        imageClass: "third-line"
    }
];

export const gettingStartedDiv = document.createElement('div');
gettingStartedDiv.className = 'getting-start';

const heading = document.createElement('h1');
heading.classList = 'heading museo-56';
heading.innerHTML = 'Getting Started Is <span class="highlight">Fast & Easy</span>';
gettingStartedDiv.appendChild(heading);

const stepsContainer = document.createElement('div');
stepsContainer.className = 'steps';

const stepsDivLeft = document.createElement('div');
stepsDivLeft.className = 'steps-left';

const stepsDivRight = document.createElement('div');
stepsDivRight.className = 'steps-right';

stepsData.forEach(step => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';

    const number = document.createElement('p');
    number.classList = 'step-number museo-15-500';
    number.textContent = step.number;

    const title = document.createElement('h1');
    title.classList = 'step-title museo-24';
    title.textContent = step.title;

    const text = document.createElement('p');
    text.classList = 'step-text montserrat-18';
    text.textContent = step.text;

    stepDiv.appendChild(number);
    stepDiv.appendChild(title);
    stepDiv.appendChild(text);
    const image = document.createElement('img');
    image.src = 'assets/gettstarted-line.svg';
    if (step?.imageClass) image.className = step.imageClass;


    const stepImageDiv = document.createElement('div');
    stepImageDiv.appendChild(stepDiv);
    stepImageDiv.className = 'step-image';

    if (['02.', '04.', '03.'].includes(step.number)) stepImageDiv.appendChild(image);

    if (['01.', '03.'].includes(step.number))     stepsDivLeft.appendChild(stepImageDiv);
    if (['02.', '04.'].includes(step.number))     stepsDivRight.appendChild(stepImageDiv);

    window.addEventListener('resize', function () {
        const stepsDivLeft = document.querySelector('.steps-left');
        const stepsDivRight = document.querySelector('.steps-right');
        const stepImageDivs = document.querySelectorAll('.step-image');

        // Очищаем содержимое steps-left и steps-right
        stepsDivLeft.innerHTML = '';
        stepsDivRight.innerHTML = '';

        if (window.innerWidth < 768) {
            // Мобильная версия: 01 и 02 в steps-left, 03 и 04 в steps-right
            stepImageDivs.forEach(stepImageDiv => {
                const stepNumber = stepImageDiv.querySelector('.step-number').textContent;
                if (['01.', '02.'].includes(stepNumber)) {
                    stepsDivLeft.appendChild(stepImageDiv);
                }
                if (['03.', '04.'].includes(stepNumber)) {
                    stepsDivRight.appendChild(stepImageDiv);
                }
            });
        } else {
            // Десктопная версия: 01 и 03 в steps-left, 02 и 04 в steps-right
            stepImageDivs.forEach(stepImageDiv => {
                const stepNumber = stepImageDiv.querySelector('.step-number').textContent;
                // Создаем изображение для шагов 02, 03, 04
                if (['02.', '03.', '04.'].includes(stepNumber)) {
                    const image = document.createElement('img');
                    image.src = 'assets/gettstarted-line.svg';
                    // Назначаем класс изображения в зависимости от шага
                    if (stepNumber === '02.') image.className = 'first-line';
                    if (stepNumber === '03.') image.className = 'second-line';
                    if (stepNumber === '04.') image.className = 'third-line';
                    // Удаляем старое изображение, если оно есть
                    const existingImage = stepImageDiv.querySelector('img');
                    if (existingImage) existingImage.remove();
                    // Добавляем новое изображение
                    stepImageDiv.appendChild(image);
                } else {
                    // Для шага 01 удаляем изображение, если оно есть
                    const existingImage = stepImageDiv.querySelector('img');
                    if (existingImage) existingImage.remove();
                }

                // Распределяем шаги
                if (['01.', '03.'].includes(stepNumber)) {
                    stepsDivLeft.appendChild(stepImageDiv);
                }
                if (['02.', '04.'].includes(stepNumber)) {
                    stepsDivRight.appendChild(stepImageDiv);
                }
            });
        }
    });
});
stepsContainer.appendChild(stepsDivLeft);
stepsContainer.appendChild(stepsDivRight);

gettingStartedDiv.appendChild(stepsContainer);
