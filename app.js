// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

const playBtn = document.getElementById("play-button")
playBtn.addEventListener("click" , ()=>{
    location.href = "./game.html"
})
