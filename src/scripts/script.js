
let guessResult = document.getElementById("guessResult");
  let userInput = document.getElementById("userInput");
  let randomNumber = Math.ceil(Math.random()*100);  
function bodyLoad(){
  
  console.log(randomNumber)
}
function checkGuess(){
    let guessNumber = parseInt(userInput.value);
    if(guessNumber > randomNumber){
      guessResult.textContent = "Its Too High!!";
    }
    else if(guessNumber < randomNumber){
        guessResult.textContent = "Its Too Low!!";
      }
    else if(guessNumber === randomNumber){
        guessResult.textContent = "Congragulation you got the number";
      }
}