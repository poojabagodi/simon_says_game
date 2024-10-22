let gameseq=[];
let userseq=[];
let started=false;
let level=0;

let h2=document.querySelector("h2");


let btns=["red","yellow","green","purple"];

document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }

});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },350);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },350);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranidx=Math.floor(Math.random()*3);
    let rancolor=btns[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    gameflash(ranbtn);
}

function checkans(idx){
   
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
            let max=0;
            max=Math.max(max,level);
            h2.innerHTML=`Game over. your score was <b>${level}</b> <br>Press any key to start.<br>YOUR HIGHEST SCORE : ${max}`;

             
         
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function (){
                document.querySelector("body").style.backgroundColor="white"; 
            },250);

            reset();
     }
    
}

function btnpressed(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpressed)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
