var names = window.prompt("Enter your name:") // the entered value isn't in sting datatype, the real games actually uses html forms for players query....
let player = {
    name: names,
    chips: 145
}
let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" //Declaring a variable called message and assigning its value to any empty string
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.getElementById("player-el")

if(player.name === null){
    playerEl.textContent = " "
}
else {
playerEl.textContent = player.name + ": $" + player.chips
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    if(sum === 0){
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    }
    isAlive = true
    renderGame()
}
function getRandomCard() {
    let cardRand = Math.floor( Math.random() * 13 ) + 1  
    if(cardRand === 1) {
        return 11
    }
    else if(cardRand > 10) {
        return 10
    }
    else {
        return cardRand 
    }
    }

function renderGame() {
    sumEl.textContent = "Sum: " + sum //11
    
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    //13
    if (sum <= 20) {
        message = "Do you want to draw a new card?"//reassigning the message variable to the string 
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
console.log(hasBlackJack)
console.log(isAlive)
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}