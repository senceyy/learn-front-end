const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector('.btn')
const title = document.querySelector('.title')

btn.addEventListener('click', changeHex)

function changeHex () {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    title.innerText = hexColor
    document.body.style.backgroundColor = hexColor
    console.log(hexColor)
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}