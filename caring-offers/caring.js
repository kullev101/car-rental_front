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
const customSelect = document.querySelector('.custom-select');
        const selectContainer = document.querySelector('.select-container');
        const optionsContainer = document.querySelector('.options-container');
        const options = document.querySelectorAll('.options-container li');

        // Открытие/закрытие выпадающего списка
        customSelect.addEventListener('click', () => {
            selectContainer.classList.toggle('open');
            optionsContainer.classList.toggle('open');
        });

        // Выбор опции
        options.forEach(option => {
            option.addEventListener('click', () => {
                customSelect.textContent = option.textContent;
                selectContainer.classList.remove('open');
                optionsContainer.classList.remove('open');
            });
        });

        // Закрытие списка при клике вне его
        document.addEventListener('click', (event) => {
            if (!customSelect.contains(event.target) && !optionsContainer.contains(event.target)) {
                selectContainer.classList.remove('open');
                optionsContainer.classList.remove('open');
            }
        });




        document.addEventListener('DOMContentLoaded', function() {
            const cards = [
                { text: 'Volkswagen ID.4', category: 'category1', image: 'car5.png', monthlyRate: '180$/month', weeklyRate: '180$/week', cities: 'Hrodno, Minsk, Brest' },
                { text: 'BMW iX', category: 'category2', image: 'car9.png', monthlyRate: '250$/month', weeklyRate: '80$/week', cities: 'Minsk, Brest' },
                { text: 'Tesla Model 3', category: 'category3', image: 'car4.png', monthlyRate: '500$/month', weeklyRate: '180$/week', cities: 'Hrodno, Minsk' },
                { text: 'Audi e-Tron', category: 'category4', image: 'car9.png', monthlyRate: '350$/month', weeklyRate: '120$/week', cities: 'Brest, Minsk' },
                { text: 'Mercedes EQC', category: 'category1', image: 'armada.webp', monthlyRate: '300$/month', weeklyRate: '110$/week', cities: 'Minsk, Brest' },
                { text: 'Porsche Taycan', category: 'category2', image: 'cosySec.webp', monthlyRate: '550$/month', weeklyRate: '200$/week', cities: 'Hrodno, Minsk' },
                { text: 'Jaguar I-PACE', category: 'category3', image: 'car4.png', monthlyRate: '400$/month', weeklyRate: '150$/week', cities: 'Minsk, Brest' },
                { text: 'Volkswagen ID.4', category: 'category1', image: 'car5.png', monthlyRate: '180$/month', weeklyRate: '180$/week', cities: 'Hrodno, Minsk, Brest' },
                { text: 'BMW iX', category: 'category2', image: 'car9.png', monthlyRate: '250$/month', weeklyRate: '80$/week', cities: 'Minsk, Brest' },
                { text: 'Tesla Model 3', category: 'category3', image: 'car4.png', monthlyRate: '500$/month', weeklyRate: '180$/week', cities: 'Hrodno, Minsk' },
                { text: 'Audi e-Tron', category: 'category4', image: 'car9.png', monthlyRate: '350$/month', weeklyRate: '120$/week', cities: 'Brest, Minsk' },
                { text: 'Mercedes EQC', category: 'category1', image: 'armada.webp', monthlyRate: '300$/month', weeklyRate: '110$/week', cities: 'Minsk, Brest' },
                { text: 'Porsche Taycan', category: 'category2', image: 'cosySec.webp', monthlyRate: '550$/month', weeklyRate: '200$/week', cities: 'Hrodno, Minsk' },
                { text: 'Jaguar I-PACE', category: 'category3', image: 'car4.png', monthlyRate: '400$/month', weeklyRate: '150$/week', cities: 'Minsk, Brest' },
                { text: 'Nissan Leaf', category: 'category3 category1', image: 'minicopper.png', monthlyRate: '180$/month', weeklyRate: '70$/week', cities: 'Brest, Hrodno' }
                
            ];
        
            const container = document.getElementById('cardsContainer');
            const searchInput = document.querySelector('.input-container input');
            const optionItems = document.querySelectorAll('.options-container li');
        
            let activeCategory = 'all'; // Начальная категория
        
            // Функция для создания карточки
            function createCard(cardData) {
                const card = document.createElement('div');
                card.className = `card iteam ${cardData.category}`;
                card.innerHTML = `
                    <div class="car-img-container">
                      <img class="car-img" src="${cardData.image}" alt="Car image">
                    </div>
                    <div class="card-textcontainer">
                        <div class="main-text-card">${cardData.text}</div>
                        <div class="less-text-card">Monthly Rate: ${cardData.monthlyRate}</div>
                        <div class="less-text-card">Weekly Rate: ${cardData.weeklyRate}</div>
                        <div class="less-text-card">Cities: ${cardData.cities}</div>
                    </div>
                    <div class="card-button-container">
                      <div class="card-button">
                         <a class="card-button" href="caring-card/caringcard.html"><div class="card-text-button">More</div></a>
                      </div>
                    </div>
                `;
                return card;
            }
        
            // Функция для отрисовки всех карточек
            function renderCards() {
                container.innerHTML = ''; // Очистить контейнер
                cards.forEach(cardData => {
                    const cardElement = createCard(cardData);
                    container.appendChild(cardElement);
                });
            }
        
            // Функция для фильтрации карточек
            function filterCards() {
                const searchText = searchInput.value.toLowerCase();
        
                // Добавляем все карточки в DOM
                renderCards();
        
                const cardElements = document.querySelectorAll('.iteam');
        
                // Удаляем неподходящие карточки
                cardElements.forEach(card => {
                    const cardText = card.querySelector('.main-text-card').textContent.toLowerCase();
                    const matchesSearch = cardText.includes(searchText);
                    const matchesCategory = activeCategory === 'all' || card.classList.contains(activeCategory);
        
                    if (!matchesSearch || !matchesCategory) {
                        card.style.display = 'none'; // Убираем карточку из отображения
                    } else {
                        card.style.display = 'block'; // Показываем карточку
                        setTimeout(() => {
                            card.classList.add('visible'); // Добавляем класс для анимации
                        }, 10);
                    }
                });
            }
        
            // Установка обработчиков кликов на элементы списка
            optionItems.forEach(item => {
                item.addEventListener('click', () => {
                    activeCategory = item.dataset.value || 'all'; // Обновляем активную категорию
                    optionItems.forEach(i => i.classList.remove('active')); // Убираем активный класс
                    item.classList.add('active'); // Добавляем активный класс
                    filterCards(); // Фильтруем карточки
                });
            });
        
            // Слушатель для поиска
            searchInput.addEventListener('input', filterCards);
        
            // Начальная отрисовка карточек
            renderCards();
            filterCards(); // Показываем все карточки изначально
        });