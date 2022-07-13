
let cards = []

let sum

let sumel = document.getElementById('sum-el')
let cardel = document.getElementById('card-el')

let isAlive = true
let hasBlackJack = false

const msg = document.getElementById('message-el')

function getRandom() {
  const x = Math.floor(Math.random()*13) + 1
  if (x > 10) {
    return 10
  } else if (x==1) {
    return 11
  } else {
    return x
  }
}

function start() {
  isAlive = true
  let firstCard = getRandom()
  let secondCard = getRandom()
  cards = [firstCard, secondCard]
  sum =  firstCard + secondCard
  renderGame()
}
function renderGame() {
  cardel.textContent = 'Cards : '
  for (let i = 0; i < cards.length; i++) {
    cardel.textContent += cards[i] + " "
  }
  sumel.textContent = 'Sum : ' + sum
  if (sum < 21) {
    msg.innerText = 'You are Still Alive, Want to draw a card?'
  } else if (sum === 21) {
    msg.innerText = 'Wooh! You Won'
    hasBlackJack = true
  } else {
    msg.innerText = 'You Lose'
    isAlive = false
  }
}