let brosScore = 0;
let CompScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const brosscoreNo = document.querySelector("#bros-score");
const comptuerscoreNo = document.querySelector("#comptuer-score");

//get computer choice
const compChoice = () =>{
    const option=["rock","paper","scissor"]
    const randomIdx= Math.floor(Math.random() *3);
    return option[randomIdx];
}

//get user choice
choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id");
        guess(userChoice);
    })
});

//display the winner
const showWinner = (userWin,userChoice,getCompChoice) =>{
    if(userWin){
        brosScore++;
        brosscoreNo.innerText=brosScore;
        // console.log("You Win");
        msg.innerText=`You win!\n ${userChoice} (Yours) beats ${getCompChoice} (computers)`;
        msg.style.backgroundColor="green";
    }else{
        CompScore++;
        comptuerscoreNo.innerText=CompScore;
        // console.log("You loose");
        msg.innerText=`You loose!\n ${getCompChoice} (computers) beats ${userChoice} (Yours)`;
        msg.style.backgroundColor="red";
    }
}

// call user and computer choice
const guess=(userChoice)=>{
    // console.log("Your choose ->",userChoice);
    const getCompChoice= compChoice();
    // console.log("Computer choose ->",getCompChoice);

//if choice is draw
const drawGame = () =>{
    // console.log("Game was Draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
}

    // -------------logic-------------
    if(userChoice === getCompChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=="rock"){
            //paper or sicssor [if it was rock then it be draw]
            userWin = getCompChoice === "paper" ? false : true;
        }else if(userChoice=="paper"){
            //rock or sicssor [if it was paper then it be draw]
            userWin = getCompChoice === "scissor" ? false : true;
        }else{
            //rock or paper [if it was sicssor then it be draw]
            userWin = getCompChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,getCompChoice);
    }
}