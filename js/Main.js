function draw(){//繪製圖像
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawBG();
	drawPlayer();

	drawblock();
	drawItem();
	drawBullet();
	if(blowUp.length!=0)drawBlowUp();

	drawTimer();
	drawScore();
	drawFlyHeight();
	drawLife();
	drawKill();
	drawSkill();
	drawPilot();
	drawStageTitle();
	if(gamePause==true)drawPause();

	skillCheck();
	levelCheck();
	if(life>0)collision();

	if(gameEndMessege==true)drawEnd();
	
	if(gamePause==false){
		if(rightPress&&player.posX<canvas.width-player.width){
			player.posX +=player.speed;
		}
		if(leftPress&&player.posX>0){
			player.posX -=player.speed;
		}
		if(upPress&&player.posY>0){
			player.posY -=player.speed;
		}
		if(downPress&&player.posY<canvas.height-player.height){
			player.posY +=player.speed;
		}
	}
	
	check();
		
	/*if(audioElement.currentTime.toFixed(1)==282.1){//音樂循環
		audioElement.currentTime=0.89;
	}*/
	
	animate=requestAnimationFrame(draw);//開始動畫循環
		//requestAnimationFrame(draw);
}

if(gameStart){//待解決 尋求停止動畫的方法	
	/*gameLoop = setInterval(createblock, 1000);
	counter = setInterval(timeCount, 1000);
	draw();*/
	//animate=requestAnimationFrame(draw);
}else{
	drawMenu();
}