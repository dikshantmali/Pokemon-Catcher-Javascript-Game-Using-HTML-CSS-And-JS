score = 0;
cross = true;

audio1 = new Audio('music.mp3');

audiogo = new Audio('2.mp3');
	setTimeout(() => {
	audio1.play();
		},1000);

document.onkeydown = function (e) {
	// body...
	console.log("key code is ",e.keyCode)
	if(e.keyCode == 38)
	{
		dino = document.querySelector('.dino');
		dino.classList.add('animateDino');
		setTimeout(() => {
			dino.classList.remove('animateDino')

		},700);
	}
	if(e.keyCode == 39)
	{
		dino = document.querySelector('.dino');
		dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left = dinoX + 112 +"px";
	}
	if(e.keyCode == 37)
	{
		dino = document.querySelector('.dino');
		dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left = (dinoX - 112) +"px";
	}
}

setInterval(() => {
	dino = document.querySelector('.dino');
	gameover = document.querySelector('.gameOver');
	obstacle = document.querySelector('.obstacle');
	dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
	dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
	ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
	oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
	offsetx = Math.abs(dx-ox);
	offsetY = Math.abs(dy-oy);
	if(offsetx < 93 && offsetY<52)
	{
		gameover.innerHTML = "Game Over Buddy: Reload To Restart";
		obstacle.classList.remove('obstacleAni')
		audiogo.play();
		setTimeout(() => {

				audiogo.pause();
			
		},1000);
	
	setTimeout(() => {

	
			audio1.pause();		
		},10000);	

	}
	else if(offsetx < 145 && cross){
		score+=1;
		updateScore(score);
		cross = false;
		setTimeout(() => {
			cross = true;
		},1000);


	}
},10)

function updateScore(score)
{
	scoreCont.innerHTML = "Your Score: " + score
}