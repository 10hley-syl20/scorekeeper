

let p1Butt = document.querySelector("#p1");
let p2Butt = document.querySelector("#p2");
let reButt = document.querySelector("#re");
let p1D = document.querySelector("#p1Display");
let p2D = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let wonscoreD = document.querySelector("p span");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let wonScore = 5;


p1Butt.addEventListener("click", function(){

  if( !gameOver){ 
    p1Score++;

    if(p1Score === wonScore){
      p1D.classList.add("winner")
      gameOver = true;
    }
    p1D.textContent = p1Score;}
 
});




 p2Butt.addEventListener("click", function(){
   if(!gameOver){ 
    p2Score++;
     if(p2Score === wonScore){
      p2D.classList.add("winner")
      gameOver = true;
    }
     p2D.textContent = p2Score;}
 });

 reButt.addEventListener("click",function(){
 reset();
 })


numInput.addEventListener("change",function(){
  wonscoreD.textContent = numInput.value;
  wonScore = Number(numInput.value);
  reset();
})

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1D.textContent = 0;
  p2D.textContent = 0;
  p2D.classList.remove("winner")
  p1D.classList.remove("winner")
  gameOver = false;
  
}