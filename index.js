const images = [...document.querySelectorAll('.slider__item')];

const clearActiveClass = () => {
    images.forEach(img => img.classList.remove('active'))  
};

const setActiveClass = node => {
    node.classList.add('active')
};

images.forEach(img => {
    img.addEventListener('click', () => {
        clearActiveClass()
        setActiveClass(img);
    })
})