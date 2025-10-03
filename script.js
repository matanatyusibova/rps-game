let playerScore =0
let compterScore =0
 
const result = document.getElementById("result")
const choicesDisplay = document.getElementById("choices")
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")

const choices = ["rock", "paper", "scissors"]

function computerChoice() {
    return choices [Math.floor(Math.random()*3)]
    
}
function playRound(playerSelection) {
    const computerSelection = computerChoice()

    choicesDisplay.textContent = `Sen secdin: ${playerSelection} | komputer secdi: ${computerSelection}`

    if (playerSelection===computerSelection) {
        result.textContent = `It is a draw! You both choose ${playerSelection}`
        return
        
    }
    if (
        (playerSelection==="rock"&&computerSelection==="scissors")||
        (playerSelection==="scissors"&&computerSelection==="paper")||
        (playerSelection==="paper"&&computerSelection==="rock")
    ) {playerScore++
        result.textContent=`You Win! ${playerSelection} > ${computerSelection}`
        
    }else{
        compterScore++
        result.textContent=`You Lose! ${computerSelection} > ${playerSelection}`
        
    }
    playerScoreDisplay.textContent=playerScore
    computerScoreDisplay.textContent=compterScore

    
    
    
    }
    document.getElementById("rock").addEventListener("click" , () => playRound("rock"))
    document.getElementById("paper").addEventListener("click" , () => playRound("paper"))
    document.getElementById("scissors").addEventListener("click" , () => playRound("scissors"))