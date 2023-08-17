while(true){
    let num=prompt("Guess a number from 1 to 9");
    num=Number(num);
    let randomNumber=Math.ceil(Math.random())*9;
    if(num==randomNumber){
        alert("You Win!!!");
    }
    else if(num<1 || num>9){
        alert("The number guessed is beyond the limit");
    }
    else{
        alert("You guessed the wrong number");
    }
}