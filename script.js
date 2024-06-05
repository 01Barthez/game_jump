const startBtn = document.querySelector("#start");
const perso = document.querySelector("#perso");
const obstacles = document.querySelectorAll("#obstacle");
const obstacle1 = obstacles[0];
const jumpBtn = document.querySelector("#jump");

startBtn.addEventListener('click', ()=>{
    start();
})

jumpBtn.addEventListener('click', jump);
document.addEventListener('keydown', (e)=>{
    if(e.key === "z" || e.key === "ArrowUp" || e.key === " "){
        jump();
    } 
});

var verification = setInterval(()=>{
    // var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'));
    var persoX = parseInt(window.getComputedStyle(perso).getPropertyValue('left'));
    var obstacleX = parseInt(window.getComputedStyle(obstacle1).getPropertyValue('left'));
    console.log(persoX);
    console.log(obstacleX);
    if(persoX === obstacleX){
        alert("Vous avez perdu !!!");
    }
})

function start(){
    obstacles.forEach(obstacle =>{
        if(obstacle.classList != "start"){
            obstacle.classList.add("start");
        }
    })
}

function jump(){
    if(perso.classList != "animation"){
        perso.classList.add("animation");
    }
    setTimeout(()=>{
        perso.classList.remove("animation");
    }, 500)
}


