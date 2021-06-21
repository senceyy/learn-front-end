//LIST OF COLOR
const colors = ["#ff0000","#0000ff","#3cb371","#ee82ee","#ffa500"]

//Create a random number between 0 and 4
let randomNum = Math.random()
randomNum = Math.round((randomNum * 4))

//Selectors
const body = document.querySelector('.main')
const btn = document.querySelector('.btn')
const title = document.querySelector('.title')

//Events
btn.addEventListener('click', changeColor)

//Functions
function changeColor() {
    body.style="background:"+colors[randomNum]
    title.innerText = colors[randomNum]
}