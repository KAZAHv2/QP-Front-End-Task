const faqData = [
    {
        question: "How do I change my details?",
        answer: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
    },
    {
        question: "How do I change my details?",
        answer: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
    },
    {
        question: "How do I change my details?",
        answer: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
    },
    {
        question: "How do I change my details?",
        answer: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
    },
    {
        question: "How do I change my details?",
        answer: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
    }
];

export const questionsDiv = document.createElement('div');
questionsDiv.classList = 'questions-div';

const questionsHeading = document.createElement('h1');
questionsHeading.classList = 'heading museo-56';
questionsHeading.innerHTML = 'Frequently asked <p class=\"highlight\">questions</p>';
questionsDiv.appendChild(questionsHeading);

faqData.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';

    const question = document.createElement('div');
    question.classList = 'faq-question museo-24';
    const toggleBtn = document.createElement('img');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.src = 'assets/plus.svg';
    question.innerHTML = `${item.question} `;
    question.appendChild(toggleBtn);

    const answer = document.createElement('div');
    answer.classList = 'faq-answer montserrat-16';
    answer.textContent = item.answer;

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    questionsDiv.appendChild(faqItem);

    toggleBtn.addEventListener('click', () => {
        const isActive = faqItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.toggle-btn').src = 'assets/plus.svg';
        });

        if (!isActive) {
            faqItem.classList.add('active');
            toggleBtn.src = 'assets/close.svg';
        }
    });
});

