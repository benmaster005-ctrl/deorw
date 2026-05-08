const menu = document.querySelector('#burger-menu');

menu.addEventListener('click', function (e) {
    e.stopPropagation()
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.overlay').classList.add('active');

})
document.querySelector('nav').addEventListener('click', (e) => {
    e.stopPropagation();
});
document.querySelectorAll('nav li, nav a').forEach(item => item.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}))

document.addEventListener('click', function () {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('nav').classList.remove('active');
})



const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

let index = 0;

const slideNumber = document.createElement('span');
slideNumber.textContent = `${index + 1} / ${slide.length}`;
slideNumber.style.fontSize = '.7rem'
slideNumber.style.marginLeft = 'auto'



const dots = document.querySelector('.dots');

for(let i = 0; i <= slide.length - 1; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dots.append(dot);
}

dotItems =  document.querySelectorAll('.dot');
dotItems[0]?.classList.add('active')

dotItems.forEach((_, i) => _.onclick = () => updateCarousel(i))

document.querySelector('.next')?.addEventListener('click', () =>  {
    index ++;
    if(index == slide.length) index = 0;
    updateCarousel(index);
})

document.querySelector('.prev')?.addEventListener('click', () =>  {
    if (index == 0) index = slide.length;
    index --;
    updateCarousel(index);
})

function updateCarousel(index) {
    slides.style.transform = `translateX(-${index * 100}%)`
    dotItems.forEach(dot => dot.classList.remove('active'));
    dotItems[index].classList.add('active')
slideNumber.textContent = `${index + 1} / ${slide.length}`;
}

setInterval (() => {
    index = (index + 1) % slide.length;
    updateCarousel(index);
}, 5000)

const carousel = document.querySelector('.carousel');
carousel?.addEventListener('mouseenter', () => {
    document.querySelector('.prev').style.visibility = 'visible';
    document.querySelector('.next').style.visibility = 'visible';
    document.querySelector('.carousel__overlay').style.visibility = 'visible';
})
carousel?.addEventListener('mouseleave', () => {
    document.querySelector('.prev').style.visibility = 'hidden';
    document.querySelector('.next').style.visibility = 'hidden';
    document.querySelector('.carousel__overlay').style.visibility = 'hidden';

})


document.querySelector('.carousel__header').appendChild(slideNumber)

const faq = document.querySelectorAll('.faq__item');
faq.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveFAQ();
        item.classList.add('active');
    })
})

const removeActiveFAQ = () => {
    faq.forEach(faq => {
        faq.classList.remove('active')
    });
}

