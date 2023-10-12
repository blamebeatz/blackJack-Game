

let cards = []
let totalOfCardNumbers = 0

let hasBlackJack = false 
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")


function getrandomcard() {
  let randomNumber = Math.random() * 13 ;
  let floorNumber = Math.floor(randomNumber) + 1 


  return floorNumber;
}


function startGame()
 {

            isAlive = true
            let firstCard = getrandomcard()
            let secondCard = getrandomcard()

            cards = [firstCard , secondCard]  
            totalOfCardNumbers = firstCard + secondCard 
           

            renderGame()

}

function renderGame(){
  cardEl.textContent = "Cards : "

  for ( let i = 0; i < cards.length ; i++ ) 
  {
    cardEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum : " + totalOfCardNumbers

  if (totalOfCardNumbers <= 20) {
  message = "Do you want to draw a new card? 🙂"
} 

    else if (totalOfCardNumbers === 21) {
      message = "Wohoo! You've got Blackjack! 🥳"
      hasBlackJack = true
    }
    else {
      message = "You're out of the game! 😭"
      isAlive = false
    }

    messageEl.textContent = message ;
}



function newCard() {
  if(hasBlackJack === false && isAlive === true){
  
  let card = getrandomcard()
  totalOfCardNumbers += card ;

  cards.push(card);

  renderGame();
  }
}

