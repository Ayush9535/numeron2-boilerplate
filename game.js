operations = ["plus" , "minus" , "mul" , "divide" , "modulus"]
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
let op;

function generateRandomNumber(){
    let n1 = Math.round(Math.random()*100)
    let n2 = Math.round(Math.random()*100)
    
    number1.innerHTML = n1
    number2.innerHTML = n2
}

function randomOperation(a,b,operations){
    op = operations[Math.floor(Math.random()*operations.length)]
    let ans;
    if (op == "plus"){
        ans = a + b;
    }else if (op == "minus"){
        ans = a-b;
    }else if(op == "mul"){
        ans = a*b;
    }else if (op == "divide"){
        ans = Math.trunc(a/b);
    }else if (op == "modulus"){
        ans = a%b;
    }

    number3.innerHTML = ans
}
generateRandomNumber()
randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)

// Iteration 3: Creating variables required to make the game functional

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

let score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

plus.addEventListener("click",()=>{
    if (op == "plus"){
        score++
        generateRandomNumber()
        randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)
        resetTimer(timerID)
    }else{
        location.href = "./gameover.html"
    }
})
minus.addEventListener("click",()=>{
    if (op == "minus"){
        score++
        generateRandomNumber()
        randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)
        resetTimer(timerID)
    }else{
        location.href = "./gameover.html"
    }
})
mul.addEventListener("click",()=>{
    if (op == "mul"){
        score++
        generateRandomNumber()
        randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)
        resetTimer(timerID)
    }else{
        location.href = "./gameover.html"
    }
})
divide.addEventListener("click",()=>{
    if (op == "divide"){
        score++
        generateRandomNumber()
        randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)
        resetTimer(timerID)
    }else{
        location.href = "./gameover.html"
    }
})
modulus.addEventListener("click",()=>{
    if (op == "modulus"){
        score++
        generateRandomNumber()
        randomOperation(parseInt(number1.innerHTML) , parseInt(number2.innerHTML) , operations)
        resetTimer(timerID)
    }else{
        location.href = "./gameover.html"
    }
})

// Iteration 7: Making Timer functional

const timer = document.getElementById("timer")
var timerID;

function timerFunc(){
    let n = 10;
    timerID = setInterval(()=>{
        timer.innerHTML = n
        n--;

        localStorage.setItem("Squad56" , score)

        if (n == -1){
            clearInterval()
            location.href = "./gameover.html"
        }

    } , 1000)
}

function resetTimer(intervalId){
    clearInterval(intervalId)
    timerFunc()
}

timerFunc()
