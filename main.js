const globalDataObject = () => {
    // Объект содержащий кол-во элементов и расширение экрана
    const data = {
        elementsOnPage: 4,
        screenResolution: 1920
    }

    return data
}

const showElementsOnPage = (elements, resolution) => {
    // Получаем все элементы навигации и его родителя
    const navItems = document.querySelectorAll('.nav-item')
    const navigationContainer = document.querySelector('.navigation')

    // Проверяем необходимость в доп. меню
    if (navItems.length > 6) {
        // Все элементы получают класс доп. меню
        for (let item of navItems) {
            item.classList.add('extra-menu__item')
        }


        // Получаем элементы которые должны быть отображены в навигации
        const arrNavItems = Array.from(navItems).slice(0, elements)

        // Добавяем доп. меню
        const menu = document.createElement('div')
        menu.classList.add('extra-menu')
        navigationContainer.appendChild(menu)
        
        const menuItem = document.createElement('p')
        menuItem.classList.add('extra-menu__title')
        menu.appendChild(menuItem)
        menuItem.innerHTML = 'echo'
        

        // Элементы которые должны быть отображены получают уникальный класс
        for (let item of arrNavItems) {
            item.classList.add('nav-menu__item')
            item.classList.remove('extra-menu__item')
        }

        return arrNavItems
    }
}

const createExtraMenu = () => {
    // Получаем extra-menu
    const extraMenu = document.querySelector('.extra-menu')
    
    // Создаем контейнер для extra-menu
    const extraMenuContainer = document.createElement('div') 
    extraMenuContainer.classList.add('extra-menu__container')
    extraMenuContainer.classList.add('hidden')
    extraMenu.appendChild(extraMenuContainer)

    const extraMenuItems = document.querySelectorAll('.extra-menu__item')

    

    // Событие на клик по extra-menu
    extraMenu.addEventListener('click', () => {
        extraMenuContainer.innerHTML = ''

        // Проверяем наличие класс hidden и выполняем следующие манипуляции с контейнером
        if (!extraMenuContainer.classList.toggle('hidden')) {

            extraMenuItems.forEach((item) => {
                // item.classList.remove('extra-menu__item')
                extraMenuContainer.insertAdjacentHTML('afterbegin', `
                    ${item}
                `)
            })
        }
    })
}

showElementsOnPage(
    // (elements, resolution)
    globalDataObject().elementsOnPage, 
    globalDataObject().screenResolution
)

createExtraMenu()