function keyDownHandler(e){//按下鍵盤
	if(e.keyCode == 39){//right
		rightPress = true;
		if(manualPage==true&&manualSelect!=1){
			if(manualSelect==4)manualSelect=2;
			else if(manualSelect!=1)manualSelect++;
			seBeep();
		}
		if(playerDataPage==true&&playerDataSelect>2){
			if(playerDataSelect==5)playerDataSelect=3;
			else playerDataSelect++;
			seBeep();
		}
		if(characterPage==true&&characterSelect!=3){
			if(characterSelect==2)characterSelect=1;
			else characterSelect++;
			seBeep();
		}
		if(configPage==true&&configSelect==1){
			var e1=parseInt(localStorage.BGMVolume);
			if(localStorage.BGMVolume!=100){
				e1+=5;
				seBeep();
			}
			audioElement2.volume=e1/100;
			localStorage.BGMVolume=e1;					
		}
		if(configPage==true&&configSelect==2){
			var e1=parseInt(localStorage.SEVolume);
			if(localStorage.SEVolume!=100){
				e1+=5;
				seBeep();
			}
			localStorage.SEVolume=e1;					
		}
	}
	if(e.keyCode == 37){
		leftPress = true;
		if(manualPage==true&&manualSelect!=1){
			if(manualSelect==2)manualSelect=4;
			else manualSelect--;
			seBeep();
		}
		if(playerDataPage==true&&playerDataSelect>2){
			if(playerDataSelect==3)playerDataSelect=5;
			else playerDataSelect--;
			seBeep();
		}
		if(characterPage==true&&characterSelect!=3){
			if(characterSelect==1)characterSelect=2;
			else characterSelect--;
			seBeep();
		}
		if(configPage==true&&configSelect==1){
			var e1=parseInt(localStorage.BGMVolume);
			if(localStorage.BGMVolume!=0){
				e1-=5;
				seBeep();
			}
			audioElement2.volume=e1/100;
			localStorage.BGMVolume=e1;					
		}
		if(configPage==true&&configSelect==2){
			var e1=parseInt(localStorage.SEVolume);
			if(localStorage.SEVolume!=0){
				e1-=5;
				seBeep();
			}
			localStorage.SEVolume=e1;					
		}
	}
	
	if(e.keyCode == 38){
		upPress = true;
		if(menuPage==true){
			if(menuSelect==1)menuSelect=5;
			else menuSelect--;
			seBeep();
		}
		if(playerDataPage==true&&playerDataSelect!=3&&playerDataSelect!=5){
			if(playerDataSelect==2)playerDataSelect=4;
			else if(playerDataSelect==4)playerDataSelect=1;
			else playerDataSelect++;
			seBeep();
		}
		if(manualPage==true){
			if(manualSelect==1){
				manualSelect=3;
				seBeep();
			}					
		}
		if(configPage==true){
			if(configSelect==1)configSelect=3;
			else configSelect--;
			seBeep();
		}
		if(gameOverPage==true){
			if(gameOverSelect==1)gameOverSelect=2;
			else gameOverSelect--;
			seBeep();
		}
		if(gamePause==true){
			if(pauseSelect==1)pauseSelect=3;
			else pauseSelect--;
			seBeep();
		}
		if(difficultyPage==true){
			if(difficultySelect==1)difficultySelect=4;
			else difficultySelect--;
			seBeep();
		}
		if(characterPage==true){
			if(characterSelect==3){
				characterSelect=1;
				seBeep();
			}
		}
	}
	
	if(e.keyCode == 40){
		downPress = true;
		if(menuPage==true){
			if(menuSelect==5)menuSelect=1;
			else menuSelect++;
			seBeep();
		}
		if(playerDataPage==true&&playerDataSelect!=3&&playerDataSelect!=5){
			if(playerDataSelect==1)playerDataSelect=4;
			else if(playerDataSelect==4)playerDataSelect=2;
			else playerDataSelect--;
			seBeep();
		}
		if(manualPage==true){
			if(manualSelect!=1){
				manualSelect=1;
				seBeep();
			}
		}
		if(configPage==true){
			if(configSelect==3)configSelect=1;
			else configSelect++;
			seBeep();
		}
		if(gameOverPage==true){
			if(gameOverSelect==2)gameOverSelect=1;
			else gameOverSelect++;
			seBeep();
		}
		if(gamePause==true){
			if(pauseSelect==3)pauseSelect=1;
			else pauseSelect++;
			seBeep();
		}
		if(difficultyPage==true){
			if(difficultySelect==4)difficultySelect=1;
			else difficultySelect++;
			seBeep();
		}
		if(characterPage==true){
			if(characterSelect!=3){
				characterSelect=3;
				seBeep();
			}
		}
	}
	
	if(e.keyCode == 90){// Z space
		if(gameStart&&shootPress == false){
			shootPress = true;
			var newBullet = {
			width:6,
			height:6, 
			posX:(player.posX+player.width/2-3), 
			posY1:(player.posY+player.width/2-3), 
			speed: -11,
			angle: angle
			};
			seShoot();
			player_bullet.push(newBullet);
			shootPress = true;
			check();
		}else{
			/*init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(setBlowUpTimer);
			clearInterval(LC);
			//gameLoop = 0;
			seHit();
			gameStart=true;
			menuPage=false;
			gameLoop = setInterval(createblock, 1000);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			LC = setInterval(lifeCount, 500);
			draw();*/
		}				
	}
	
	if(e.keyCode == 32||e.keyCode == 13){// key space to pause
		/*if(gameStart){
			if(gameEndMessegeFinish == false){
				//gamePauseCheck();
			}else{
				seOK();
				ctx.globalAlpha = 1.0;
				clearInterval(gameLoop);
				clearInterval(counter);
				clearInterval(setBGMove);
				clearInterval(setBlowUpTimer);
				clearInterval(LC);
				window.removeEventListener('keydown',keyDownHandler,false);
		
				//animate=requestAnimationFrame(draw);
				window.cancelAnimationFrame(animate);
				gameStart=false;
				menuPage=true;
				life=-999;
				drawMenu();
			}*/
			
		/*if(menuPage==true && menuSelect==1){
			init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(LC);

			seOK();
			gameStart=true;
			menuPage=false;
			gameLoop = setInterval(createblock, enemyRate);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			LC = setInterval(lifeCount, 200);
			draw();*/
		if(menuPage==true && menuSelect==2){
			//alert(localStorage.highStage1+"\n");
		}else if(menuPage==true && menuSelect==3){
		
		}else if(menuPage==true && menuSelect==5){
			seOK();
			window.opener=null;
			setTimeout("window.close()",500);
		}				
	}
}
	
function keyUpHandler(e){//放開鍵盤
	if(e.keyCode == 39){
		rightPress = false;
	}
	if(e.keyCode == 37){
		leftPress = false;
	}
	if(e.keyCode == 38){
		upPress = false;
	}
	
	if(e.keyCode == 40){
		downPress = false;
	}
	if(e.keyCode == 90){
		shootPress = false;
	}
	if(e.keyCode == 32 ||/* e.keyCode == 90||*/e.keyCode==13){// Z space
		
		if(menuPage==true && menuSelect==1){
			menuPage=false;
			difficultyPage=true;
			seOK();
		}else if(difficultyPage==true && difficultySelect==1){
			difficulty=3;//hard
			characterSelect=1;
			difficultyPage=false;
			characterPage=true;
			seOK();
		}else if(difficultyPage==true && difficultySelect==2){
			difficulty=2;//normal
			characterSelect=1;
			difficultyPage=false;
			characterPage=true;
			seOK();
		}else if(difficultyPage==true && difficultySelect==3){
			difficulty=1;//easy
			characterSelect=1;
			difficultyPage=false;
			characterPage=true;
			seOK();
		}else if(difficultyPage==true && difficultySelect==4){
			menuPage=true;
			difficultyPage=false;
			seOK();
		}else if(characterPage==true && characterSelect==1){
			characterPage=false;
			init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(LC);

			gameStart=true;
			menuPage=false;
			gameLoop = setInterval(createblock, enemyRate);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			setItem = setInterval(createItem, 100);
			LC = setInterval(lifeCount, 200);
			draw();
			seOK();
			
		}else if(characterPage==true && characterSelect==2){
			characterPage=false;
			init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(LC);

			seOK();
			gameStart=true;
			menuPage=false;
			gameLoop = setInterval(createblock, enemyRate);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			setItem = setInterval(createItem, 100);
			LC = setInterval(lifeCount, 200);
			draw();
			seOK();
		}else if(characterPage==true && characterSelect==3){
			characterPage=false;
			difficultyPage=true;
			seOK();
		}else if(gameEndMessegeFinish == false && gameStart==true&&gamePause==false){
			gamePauseCheck();
		}
		else if(menuPage==true && menuSelect==2){
			menuPage=false;
			playerDataPage=true;
			seOK();
			//alert("No.1: Stage "+localStorage.highStage1+"\nMiss: "+localStorage.lowMiss1);
			//alert("No.2: Stage "+localStorage.highStage2+"\nMiss: "+localStorage.lowMiss2);
			//alert("No.3: Stage "+localStorage.highStage3+"\nMiss: "+localStorage.lowMiss3);
		}else if(menuPage==true && menuSelect==3){
			menuPage=false;
			manualPage=true;
			seOK();
		}else if(menuPage==true && menuSelect==4){
			menuPage=false;
			configPage=true;
			seOK();
		}else if(titlePage==true){
			menuPage=true;
			titlePage=false;
			seOK();
		}else if(playerDataPage==true && playerDataSelect==2){
			localStorage.hardHighStage1 = 0;
			localStorage.hardHighStage2 = 0;
			localStorage.hardHighStage3 = 0;
			localStorage.hardLowMiss1 = 0;
			localStorage.hardLowMiss2 = 0;
			localStorage.hardLowMiss3 = 0;
			
			localStorage.normalHighStage1 = 0;
			localStorage.normalHighStage2 = 0;
			localStorage.normalHighStage3 = 0;
			localStorage.normalLowMiss1 = 0;
			localStorage.normalLowMiss2 = 0;
			localStorage.normalLowMiss3 = 0;
			
			localStorage.easyHighStage1 = 0;
			localStorage.easyHighStage2 = 0;
			localStorage.easyHighStage3 = 0;					
			localStorage.easyLowMiss1 = 0;
			localStorage.easyLowMiss2 = 0;
			localStorage.easyLowMiss3 = 0;
			seOK();
		}
		else if(playerDataPage==true && playerDataSelect==1){
			menuPage=true;
			playerDataPage=false;
			seOK();
		}else if(manualPage==true && manualSelect==1){
			menuPage=true;
			manualPage=false;
			seOK();
		}else if(configPage==true && configSelect==3){
			menuPage=true;
			configPage=false;
			seOK();
		}else if(gameOverPage==true && gameOverSelect==1){
			init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(LC);

			seOK();
			gameStart=true;
			menuPage=false;
			gameOverPage=false;
			gameLoop = setInterval(createblock, enemyRate);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			setItem = setInterval(createItem, 100);
			LC = setInterval(lifeCount, 200);
			draw();
		}else if(gameOverPage==true && gameOverSelect==2){
			menuPage=true;
			gameOverPage=false;
			seOK();
		}else if(gamePause==true && pauseSelect==1){
			gamePauseCheck();
			seOK();
		}
		else if(gamePause==true && pauseSelect==2){
			init();
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(LC);

			seOK();
			gameStart=true;
			gamePause=false;
			gameLoop = setInterval(createblock, enemyRate);
			counter = setInterval(timeCount, 1000);
			setBGMove = setInterval(BGMoving, 20);
			setFlyHeight= setInterval(flyHeightCounter, 1);
			setBlowUpTimer = setInterval(blowUpAnimation, 50);
			setItem = setInterval(createItem, 100);
			LC = setInterval(lifeCount, 200);
			//draw();
			seOK();
		}else if(gamePause==true && pauseSelect==3){
			//gamePauseCheck();
			life=-999;	
			window.cancelAnimationFrame(animate);					
			gamePause=false;
			gameStart=false;
			menuPage=true;
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(setBGMove);
			clearInterval(LC);
			seOK();
		}else if(gameEndMessegeFinish == true){
			life=-999;	
			window.cancelAnimationFrame(animate);					
			gamePause=false;
			gameStart=false;
			menuPage=true;
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(setBGMove);
			clearInterval(LC);
			seOK();
		}
	}
}