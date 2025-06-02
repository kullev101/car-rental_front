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
document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.button-container');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupButton = document.getElementById('closePopup');

    // Проверяем, существуют ли элементы на странице
    if (!buttonContainer || !popupOverlay || !closePopupButton) {
        console.error('Один из элементов не найден!');
        return;
    }


    buttonContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('boton')) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            popupOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Блокировка прокрутки страницы
        }
    });

    // Закрытие попапа при клике на крестик
    closePopupButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстановление прокрутки страницы
    });

    // Закрытие попапа при клике вне его области
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Восстановление прокрутки страницы
        }
    });
});