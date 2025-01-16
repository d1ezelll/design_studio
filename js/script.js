document.getElementById('contact-form-button').addEventListener('click', function() {
    document.getElementById('contact-form').reset();
  }
);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
    
})

window.addEventListener('click', (e) => {
    const header = document.querySelector("header");
    const isClickInsideHeader = header.contains(e.target);
    const isClickOnContactButton = e.target === burger;

    if (!isClickInsideHeader && !isClickOnContactButton) {
        header.classList.remove('open');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Создаем ссылки на элементы
    reviewsPrevArrow = document.querySelector(".arrow-prev");
    reviewsNextArrow = document.querySelector(".arrow-next");
    
    // Создаем ссылки на слайды
    firstSlide = document.getElementById("firstItem");
    secondSlide = document.getElementById("secondItem");

    // Функция для показа следующего слайда
    function showNextSlide() {
        firstSlide.style.display = 'none';
        secondSlide.style.display = 'block';
    }

    // Функция для показа предыдущего слайда
    function showPreviousSlide() {
        secondSlide.style.display = 'none';
        firstSlide.style.display = 'block';
    }

    // Добавляем обработчики событий
    reviewsPrevArrow.addEventListener('click', showPreviousSlide);
    reviewsNextArrow.addEventListener('click', showNextSlide);

    // Инициализация слайдера (показаем первый слайд)
    showNextSlide();
});