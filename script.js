window.onload=()=>{

setTimeout(()=>{

alert("Happy Birthday My Golgappa ❤️\n\nLove You Forever\n\n- Your Rasmalai");

},2000);

}

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

const canvas=document.createElement("canvas");

document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let hearts=[];

for(let i=0;i<40;i++){

hearts.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*6+3,

speed:Math.random()*1+0.3

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff6fb5";

hearts.forEach(h=>{

ctx.beginPath();

ctx.arc(h.x,h.y,h.size,0,Math.PI*2);

ctx.fill();

h.y-=h.speed;

if(h.y<0){

h.y=canvas.height;

h.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(draw);

}

draw();
