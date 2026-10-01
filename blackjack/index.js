let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById('cards-el')
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let sumEl =  document.getElementById('sum-el')
let messageEl = document.getElementById("message-el")


let player = {
    name : 'JoJo',
    chips : 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard(){
let randomNumber = Math.floor(Math.random()* 13 ) +1
if(randomNumber === 1){
    return 11
}
else if (randomNumber > 10){
    return 10
}
else{
    return randomNumber
}

}
function startGame(){
    renderGame()
}
function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    }
     else if (sum === 21){
        message = "Wohoo! Youve got BlackJacked"
        hasBlackJack = true
}
    else{
        message = "Youre out of the game"
        isAlive = false
    }
    cardsEl.textContent = 'Cards: '
    for(let i = 0; i< cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
    messageEl.textContent = message
}

function newCard(){
    if(isAlive=== true && hasBlackJack === false){
         let card = getRandomCard()
    sum += card
    cards.push(card)
    }
   startGame()
}






    




    



