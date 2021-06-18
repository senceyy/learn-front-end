// LIST
const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: '././images/item-1.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, eius. Eaque, ab commodi itaque libero repellendus, totam, esse accusamus rerum dolore quae.'
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.50,
        img: '././images/item-2.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, eius. Eaque, ab commodi itaque libero repellendus, totam, esse accusamus rerum dolore quae.'
    }
]

//SELECTOR
const menuContainer = document.querySelector('.Menu')
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
})
filterBtns.forEach(element => {
    element.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id
        const menuCatagory = menu.filter((menuItem) => {
            if(menuItem.category === category) {
                return menuItem
            }
        })
        if(category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCatagory)
        }
        // switch (category) {
        //     case 'breakfast':
        //         displayMenuItems(menu)
        //         console.log('hiddd')
        //         break;
        //     case 'lunch':
        //         displayMenuItems(menu)
        //         console.log('hi')
        //         break;
        //     default:                
        //         break;
        // }
    })
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="Menu-item">
                    <img src=${item.img} alt="food" class="Menu-item-img">
                    <div class="Menu-item-content">
                        <a href="#">${item.title} <span class="price">$${item.price}</span></a>
                        <hr>
                        <p class="Menu-item-content-text">${item.desc}</p>
                    </div>
                </article>
        `
    })
    displayMenu = displayMenu.join('')
    menuContainer.innerHTML = displayMenu
}
