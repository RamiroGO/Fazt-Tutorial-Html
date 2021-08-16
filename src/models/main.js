document.querySelector('.menu-btn').addEventListener('click', ()=>{
    // console.log('click');
    // alternar entre añadir y quitar la clase show en el elemento .menu-btn.
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
