// Iteration 8: Making scoreboard functional

const scoreBoard = document.getElementById("score-board")
scoreBoard.innerHTML = localStorage.getItem("Squad56")

const playAgain = document.getElementById("play-again-button")
playAgain.addEventListener("click" , ()=>{
    location.href = "./index.html"
})
