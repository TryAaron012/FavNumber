function fvNum (){
    let fvNum = 12;
    let guessfvNum;

    while (guessfvNum !== fvNum){
    let guessfvNum = parseInt(prompt("Guess my favorite number:"));
    
    if (guessfvNum > fvNum){
        alert("Too high! Try again.");
    } else if (guessfvNum < fvNum){
        alert("Too low! Try again.");
        break;
    } else{
        alert(" You guessed my favorite number.");
        break;
    }
    }
}