let box=document.getElementById("box");
let x=0;
let y=0;

document.addEventListener("keydown", event=>{
    box.style.backgroundColor="tomato";
    box.textContent="you boy"
})
document.addEventListener("keyup", event=>{
    box.style.backgroundColor="aqua";
    box.textContent="😀"
})

document.addEventListener("keydown",event=>{
 
    if(event.key.startsWith("Arrow")){
           switch(event.key){
            case "ArrowUp":
               y-=10;
               box.textContent="⬆️"
               break
            case "ArrowDown":
               y+=20;
               box.textContent="⬇️"
               break
            case "ArrowLeft":
               x-=20;
               box.textContent="⬅️"
               break
            case "ArrowRight":
               x+=20;
               box.textContent="➡️"
               break
           }
           box.style.left=`${x}px`;
           box.style.top= `${y}px`
    }
})

// let button=document.getElementById("btn");
// let body=document.querySelector("body")

// button.addEventListener("click",event=>{
//     if(body.style.backgroundColor=="black"){
//         body.style.backgroundColor="white";
//         button.textContent="darken"
//     }
//     else{
//         body.style.backgroundColor="black"
//         button.textContent="lighten"
//     }
// })