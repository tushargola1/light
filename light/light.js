let btn = document.getElementById('button')
// let bright = document.getElementById('light') 
let bright = document.querySelector('.light')

function toggleBtn() {
    btn.classList.toggle('active')
    bright.classList.toggle('on')
}