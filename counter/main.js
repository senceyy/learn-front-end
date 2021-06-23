//SELECTOR
const value = document.querySelector('.num')
const btns = document.querySelectorAll('.btn')

//inital count
let count = 0

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        if(e.target.classList.contains('decrease')) {
            count--
        }
        else if (e.target.classList.contains('increase')) {
            count++
        } else {
            count = 0
        }
        value.innerHTML = count
    })
})


