let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");


let turnX=true;

let winnings=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turnX=true;
    enablebox();
    msgcontainer.classList.add("hide");
}



box.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnX){
            box.innerText="X";
            turnX=false;
            box.classList.remove("O");

        }
        else{           
            box.innerText="O";
            box.classList.add("O");
            turnX=true;
        }
        box.disabled=true;

        checkwinner();
    });
});


const showwinner =(winner)=>{
            msg.innerText=`Congratulations, ${winner} Wins!`;
            msgcontainer.classList.remove("hide");
}

const disablebox=()=>{
    for(let boxes of box){
        boxes.disabled= true;
    }
}

const enablebox=()=>{
    for(let boxes of box){
        boxes.disabled= false;
        boxes.innerText="";
    }
}





const checkwinner =()=>{
    for(let patterns of winnings){
        let pos1=box[patterns[0]].innerText;
        let pos2=box[patterns[1]].innerText;
        let pos3=box[patterns[2]].innerText;
        if( pos1=="X" && pos2=="X" && pos3=="X"){
            msg.innerText=`Congratulations, Player 1 Wins!`;
            msgcontainer.classList.remove("hide");
            disablebox();
        }
        else if( pos1=="O" && pos2=="O" && pos3=="O"){
            msg.innerText=`Congratulations, Player 2 Wins!`;
            msgcontainer.classList.remove("hide");
            disablebox();
        }
    }
};

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);