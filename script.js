const minNum = 1; 
const maxNum = 3;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(guess);
    
    if(isNaN(guess)){
        window.alert(`Enter a valid number.`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Enter a valid number.`);
    } 
    else {
        attempts++;
        if(answer < guess){
            window.alert(`It's too HIGH, Try Again`);
        }
        else if(answer > guess){
            window.alert(`It's too LOW, Try Again`);
        }
        else{
            window.alert(`Correct answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }  
}
