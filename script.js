const canvas=document.createElement("canvas");
document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}

resize();
window.addEventListener("resize",resize);

let hearts=[];

for(let i=0;i<80;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*6+3,
speed:Math.random()*1+0.4
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff6aa8";

hearts.forEach(h=>{

ctx.beginPath();

ctx.arc(h.x,h.y,h.size,0,Math.PI*2);

ctx.fill();

h.y-=h.speed;

if(h.y<0){
h.y=canvas.height+20;
h.x=Math.random()*canvas.width;
}

});

requestAnimationFrame(draw);

}

draw();
