export const sliderContainer = document.createElement('div');
sliderContainer.className = 'slider-container';
document.body.appendChild(sliderContainer);


const slideTitle = document.createElement('h2');
slideTitle.classList = 'slide-title museo-56';
slideTitle.innerHTML = 'People love <span class=\"big\">Big</span> <span class=\"highlight-big\">Big Invest</span> <span class=\"highlight-invest\">Invest</span>';
sliderContainer.appendChild(slideTitle);

const sliderPagination = document.createElement('div');
sliderPagination.className = 'slider-pagination';
const slider = document.createElement('div');
slider.className = 'slider';
sliderPagination.appendChild(slider)
sliderContainer.appendChild(sliderPagination);

const slideData = [
    {
        title: "People love Big Invest",
        author: "Albert Abello",
        job: "Director of Growth",
        quote: "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market."
    },
    {
        title: "People love Big Invest",
        author: "Albert Abello",
        job: "Director of Growth",
        quote: "Another great feature that boosts our growth significantly!"
    },
    {
        title: "People love Big Invest",
        author: "Albert Abello",
        job: "Director of Growth",
        quote: "Another great feature that boosts our growth significantly!"
    },
    {
        title: "People love Big Invest",
        author: "Albert Abello",
        job: "Director of Growth",
        quote: "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market."
    }
];

slideData.forEach((data, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = 'slide-' + index;

    const slideContent = document.createElement('div');
    slideContent.className = 'slide-content';

    const slideText = document.createElement('div');
    slideText.className = 'slide-text';

    const img = document.createElement('img');
    img.className = 'img-user';
    img.src = 'assets/user.png';
    const imgTitle = document.createElement('div');
    imgTitle.style = 'display: grid; place-items: center;'
    const name = document.createElement('div');
    name.className = 'user-title';
    const p = document.createElement('p');
    p.classList = 'name-user museo-18';
    p.textContent = data.author;
    const pJob = document.createElement('p');
    pJob.classList = 'job-user montserrat-16';
    pJob.textContent = data.job;
    name.appendChild(p)
    name.appendChild(pJob)
    imgTitle.appendChild(name);


    slideText.appendChild(img);
    slideText.appendChild(imgTitle);

    const testimonial = document.createElement('div');
    testimonial.className = 'testimonial';
    const testimonialDot = document.createElement('img');
    testimonialDot.src = 'assets/sliderDot.svg';
    const testimonialQuote = document.createElement('p');
    testimonialQuote.classList = 'testimonial-quote museo-24';
    testimonialQuote.textContent = data.quote;
    const dot = document.createElement('div');
    dot.appendChild(testimonialDot)
    dot.className = 'testimonial-dot';
    testimonial.appendChild(dot);
    testimonial.appendChild(testimonialQuote);

    slideContent.appendChild(slideText);
    slideContent.appendChild(testimonial);
    slide.appendChild(slideContent);
    slider.appendChild(slide);
});

const prevBtn = document.createElement('button');
prevBtn.className = 'nav-btn prev-btn';
prevBtn.textContent = '<';
sliderContainer.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.className = 'nav-btn next-btn';
nextBtn.textContent = '>';
sliderContainer.appendChild(nextBtn);

const pagination = document.createElement('div');
pagination.className = 'pagination';
const pageIndicator = document.createElement('span');
pageIndicator.className = 'page-indicator museo-15-500';
pagination.appendChild(pageIndicator);
sliderPagination.appendChild(pagination)


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideWidth = slides[0]?.offsetWidth || 0;

function updateSlider() {
    slideWidth = slides[0]?.offsetWidth || 0;
    if (currentSlide !== 0) {
        slider.style.transform = `translateX(-${currentSlide * (slideWidth + 115)}px)`;
    } else  slider.style.transform = `translateX(-38px)`
    pageIndicator.textContent = `${String(currentSlide + 1).padStart(2, '0')}/${String(slides.length).padStart(2, '0')}`;
}

function goToSlide(index) {
    currentSlide = index;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateSlider();
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

window.addEventListener('resize', updateSlider);

updateSlider();
