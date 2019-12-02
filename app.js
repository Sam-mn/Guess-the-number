// const MY_NUMBER = 29;
// let number = prompt("What do you think the number is?");
/**
 
  STEG 1
  Sätt ett tal i en variabel. 
  Be användaren att gissa talet. 
  Om det är fel, fråga igen. 
  Om det är rätt, visa en alert med ett grattis-meddelande.
  Om användaren skriver in talet 0 så ska spelet avslutas.
  
   
  STEG 1.5
  Berätta för användaren om gissningen är för låg eller för hög.
  Naturligtvis ska de få gissa igen efter detta.
  
  
  STEG 2
  Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
  
  STEG 3
  Spara ner hur många gissningar som krävdes.
  Visa antalet gissningar när användaren gissat rätt.
 
  STEG 4
  Efter att man gissat rätt så slumpas ett nytt tal fram och spelet startar igen.
  Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
  Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på ${tries} antal försök men din highscore är ${highscore}".
  Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 */
/*const GUESSING_NUMBER = () =>{
        return prompt("Guess the number :)");
};
console.log(GUESSING_NUMBER());
const MY_NUMBER = Math.floor(Math.random() * 100 + 1);
//const GUESSING_NUMBER = prompt("Guess the number :)");

for(let i = 0; i <= 10; i++){
    if(GUESSING_NUMBER() == MY_NUMBER){
        
        console.log("congrats");
        break;


    }else if(GUESSING_NUMBER() > MY_NUMBER){
        console.log("It's to high");
    }else{
        console.log("it's to low")
    }

}*/
    /*console.log(MY_NUMBER);
    if(GUESSING_NUMBER() == MY_NUMBER){
        alert("congrats")
    }else if(GUESSING_NUMBER() > MY_NUMBER){
        alert("Last guess was too high!")

    }else(
        alert("Last guess was too low!")
    )*/
// if(number == MY_NUMBER){
//     alert("congrats");
    
// }else if(number > MY_NUMBER){
//     console.log("it's less than this");
// }else{
//     console.log ("it bigger than this");
// }
/*
// NEW WAY
let randomNumber = 40;
//Math.floor(Math.random()*100 + 1);
let winOrNot;
let triesNumber = [];
let highScore = []
let theDiv = document.getElementById("result");
let theList = document.getElementById("list");
let outPut;
let howManyTimes;
let result;
for(let i = 0; i <= 3; i++){
    let guessTheNumber = parseInt(prompt("Guess a number between 0 and 100"));
    if(guessTheNumber === 0){
        console.log("See you soon");
        break;
        
    }else{
        if(guessTheNumber === randomNumber){
            howManyTimes += `<p>Congrats</p>`
            console.log("Congrats");
            triesNumber.push(i);
            winOrNot = true;
   
            break;
        }else if(guessTheNumber > randomNumber){
            howManyTimes += `<li>${guessTheNumber} is high</li>`;
            console.log(`${guessTheNumber} is high`);
            triesNumber.push(i);
            winOrNot = false;

        }else if(guessTheNumber < randomNumber ){
             howManyTimes += `<li>${guessTheNumber} is low</li>`;
            console.log(`${guessTheNumber} is low`);
            triesNumber.push(i);
            winOrNot = false;
          
        }
    }
}

if(winOrNot === true){
    outPut += `<p>You try ${triesNumber.length } times until you win</p>`
    console.log(`You try ${triesNumber.length } times until you win`);
}else{
    outPut += `<p>You try ${triesNumber.length } times but you didn't do it</p>`
    console.log(`You try ${triesNumber.length} times but you didn't do it`);
}

theList.innerHTML= howManyTimes;
theDiv.innerHTML= outPut;
*/
const firstInputLabel = document.querySelector('#first-label');
const firstInput = document.querySelector('#first-input');
const firstOutput = document.querySelector('#your-number');
const secondOutput = document.querySelector('#tries-number');
const resultOutput = document.querySelector('#result');
//const firstBtns = document.querySelectorAll('#levelGroup button');
//const secondBtns = document.querySelector('#submit');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const easyLevel = document.getElementById('easy-level');
const mediumLevel = document.getElementById('medium-level');
const hardLevel = document.getElementById('hard-level');
let triesTime = 10;
let theNumbersYouTried =[];


const getRandomNumber = (max)=>{
    return Math.ceil(Math.random() * max)
};

let theNumber = getRandomNumber(10);
/*
firstBtns.forEach((btn) =>{
    btn.addEventListener('click', function(e){
        e.preventDefault();
        switch(e.target.id){
        case 'easy-level':
            theNumber = getRandomNumber(30);
        break;
        case 'medium-level':
            theNumber = getRandomNumber(60);
        break;
        case 'hard-level' :
            theNumber = getRandomNumber(100); 
                    }
                   
    })
})
*/

let refresh = ()=>{
    triesTime = 10;
    resultOutput.innerText= ' ';
    firstInput.value = 0;
    theNumbersYouTried = [];
    firstOutput.innerText = ' ';
    secondOutput.innerText = 1;
}

hardLevel.addEventListener('click', function(e) {
    e.preventDefault()
    theNumber = getRandomNumber(100)
    firstInputLabel.innerText = `Guess a number between 1 and 100`;
    refresh();
})

mediumLevel.addEventListener('click', function(e) {
    e.preventDefault()
    theNumber = getRandomNumber(50)
    firstInputLabel.innerText = `Guess a number between 1 and 50`;
    refresh();
})

easyLevel.addEventListener('click', function(e) {
    e.preventDefault()
    theNumber = getRandomNumber(20)
    firstInputLabel.innerText = `Guess a number between 1 and 20`;
      refresh();
})


submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        
        
        if(triesTime === 1){
            resultOutput.innerText= 'GAME OVER';
           e.target.disabled = true;
        }else{
            triesTime--;
            secondOutput.innerText = 11 - triesTime;
            if(firstInput.value == theNumber){
                resultOutput.innerText= 'Congrats! You did it!';
                resultOutput.style.background = 'green';
                e.target.disabled = true;
            }else if(firstInput.value < theNumber){
                resultOutput.innerText= 'Last guess was low!';
                resultOutput.style.background = 'black';
            }else if(firstInput.value > theNumber){
                resultOutput.innerText= 'Last guess was high!'
                resultOutput.style.background = 'black';
            }
        }
        theNumbersYouTried.push(firstInput.value);


        firstOutput.innerText = theNumbersYouTried.join(' , ');
    })



resetBtn.addEventListener('click', function(e){
    refresh();
    firstInputLabel.innerText = ' Chose the level'
    submitBtn.disabled = false;

})
//vhs test
//test branch 2
console.log('hello basel munawwar')