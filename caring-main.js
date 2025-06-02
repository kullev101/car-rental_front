function checkScreenWidth() {
    const navButtons = document.querySelectorAll('.nav-button');
    const navbarButtons = document.querySelectorAll('.navbar-button');

    if (window.innerWidth < 930) {
        navButtons.forEach(button => {
            button.style.display = 'none'; 
        });
        navbarButtons.forEach(button => {
            button.style.display = 'block';
        });
    } else {
        navButtons.forEach(button => {
            button.style.display = 'block'; 
        });
        navbarButtons.forEach(button => {
            button.style.display = 'none'; 
        });
    }
}


checkScreenWidth();


window.addEventListener('resize', checkScreenWidth);

document.addEventListener('DOMContentLoaded', () => {
    const navbarButton = document.querySelector('.navbar-button');
    const closeButton = document.querySelector('.close-button');
    const sidebar = document.querySelector('.sidebar');

    navbarButton.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Переключаем класс active
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('active'); // Убираем класс active
    });
});