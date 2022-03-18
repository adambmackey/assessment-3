
let myColor = document.querySelector('#color')
let myPlace = document.querySelector('#place')
let myRitual = document.querySelector('#ritual')

function favColor(e){
    alert('My favorite Color is red.')
}

function favPlace(e){
    alert('My favorite place is Phoenix.')
}

function favRitual(e){
    alert('My favorite ritual is eating dinner every night.')
}

myColor.addEventListener('click', favColor)
myPlace.addEventListener('click', favPlace)
myRitual.addEventListener('click', favRitual)