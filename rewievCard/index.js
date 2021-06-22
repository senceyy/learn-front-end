const img = document.querySelector('.img')
const username = document.querySelector('.name')
const job = document.querySelector('.job')
const next = document.querySelector('.next-btn')
const prew = document.querySelector('.prew-btn')
const randomBtn = document.querySelector('.btn')

const users = [
    {id: 1, name: 'Sencer', job: 'Python Developer', img: 'image/avatar-1300582_1280.png'},
    {id: 2, name: 'Susan Smith', job: 'Web Developer', img: 'image/woman-6311910_1920.png'},
    {id: 3, name: 'Hasan Piker', job: 'Streamer', img: 'image/man-6259833_1920.png'}
]

next.addEventListener('click', nextCard)
prew.addEventListener('click', prewCard)
randomBtn.addEventListener('click', getRandomUser) 

let currentUser = 0

function showUsers(person) {
    const user = users[person]
    img.src = user.img
    username.innerText = user.name
    job.innerText = user.job
    
}

function prewCard() {
    currentUser--
    showUsers(currentUser)
}

function nextCard() {
    currentUser++
    if(currentUser > users.length -1) {
        currentUser = 0
    }
    showUsers(currentUser)
}
function getRandomUser() {
    let randomNum = Math.floor(Math.random() * users.length)
    showUsers(randomNum)
    console.log('helelo')
}