var hasTouch = false;
var playerTouch = false;
var touch_list;
var move_list;

function TouchStart(e){
	touch_list = e.changedTouches;

		// 中身に順番にアクセス
		var i;
		var num = touch_list.length;
		for(i=0;i < num;i++){

			// Touch オブジェクトを取得
			var touch = touch_list[i];

			// 出力テスト
			console.log(touch);
		}
		
		if(!hasTouch)
		{
			if(titlePage==true){
				menuPage=true;
				titlePage=false;
				seOK();
			}else if(menuPage==true && ButtonTouch(ButtonStart, touch_list[0])){
				menuPage=false;
				difficultyPage=true;
				seOK();
			}else if(menuPage==true && ButtonTouch(ButtonPlayerData, touch_list[0])){
				menuPage=false;
				playerDataPage=true;
				seOK();
				//alert("No.1: Stage "+localStorage.highStage1+"\nMiss: "+localStorage.lowMiss1);
				//alert("No.2: Stage "+localStorage.highStage2+"\nMiss: "+localStorage.lowMiss2);
				//alert("No.3: Stage "+localStorage.highStage3+"\nMiss: "+localStorage.lowMiss3);
			}else if(menuPage==true && ButtonTouch(ButtonManual, touch_list[0])){
				menuPage=false;
				manualPage=true;
				seOK();
			}else if(menuPage==true && ButtonTouch(ButtonConfig, touch_list[0])){
				menuPage=false;
				configPage=true;
				seOK();
			}else if(difficultyPage==true && ButtonTouch(ButtonHard, touch_list[0])){
				difficulty=3;//hard
				characterSelect=1;
				difficultyPage=false;
				characterPage=true;
				seOK();
			}else if(difficultyPage==true && ButtonTouch(ButtonNormal, touch_list[0])){
				difficulty=2;//normal
				characterSelect=1;
				difficultyPage=false;
				characterPage=true;
				seOK();
			}else if(difficultyPage==true && ButtonTouch(ButtonEasy, touch_list[0])){
				difficulty=1;//easy
				characterSelect=1;
				difficultyPage=false;
				characterPage=true;
				seOK();
			}else if(difficultyPage==true && ButtonTouch(ButtonDifficultyBack, touch_list[0])){
				menuPage=true;
				difficultyPage=false;
				seOK();
			}else if(characterPage==true && ButtonTouch(ButtonCian, touch_list[0])){
				if(characterSelect==1){
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
					check();
					seOK();
				}else{
					characterSelect = 1;
				}								
			}else if(characterPage==true && ButtonTouch(ButtonIzayoi, touch_list[0])){
				if(characterSelect==2){
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
					check();
					seOK();
				}else{
					characterSelect = 2;
				}								
			}else if(characterPage==true && ButtonTouch(ButtonCharacterBack, touch_list[0])){
				characterPage=false;
				difficultyPage=true;
				seOK();
			}else if(playerDataPage==true && ButtonTouch(ButtonClear, touch_list[0])){
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
			}else if(playerDataPage==true && ButtonTouch(ButtonPlayerDataBack, touch_list[0])){
				menuPage=true;
				playerDataPage=false;
				seOK();
			}else if(playerDataPage==true&&ButtonTouch(ButtonPlayerDataHard, touch_list[0])){
				playerDataSelect = 3;
				seBeep();
			}else if(playerDataPage==true&&ButtonTouch(ButtonPlayerDataNormal, touch_list[0])){
				playerDataSelect = 4;
				seBeep();
			}else if(playerDataPage==true&&ButtonTouch(ButtonPlayerDataEasy, touch_list[0])){
				playerDataSelect = 5;
				seBeep();
			}else if(manualPage==true&&ButtonTouch(ButtonStory, touch_list[0])){
				manualSelect=2;
				seBeep();				
			}else if(manualPage==true&&ButtonTouch(ButtonAbout, touch_list[0])){
				manualSelect=3;
				seBeep();				
			}else if(manualPage==true&&ButtonTouch(ButtonSystem, touch_list[0])){
				manualSelect=4;
				seBeep();				
			}else if(manualPage==true&&ButtonTouch(ButtonManualBack, touch_list[0])){
				menuPage=true;
				manualPage=false;
				seOK();				
			}else if(configPage==true&&ButtonTouch(ButtonBGM, touch_list[0])){				
				configSelect = 1;
				seBeep();
			}else if(configPage==true&&ButtonTouch(ButtonSE, touch_list[0])){				
				configSelect = 2;
				seBeep();
			}else if(configPage==true&&ButtonTouch(ButtonBlueLeftBGM, touch_list[0])){
				configSelect = 1;
				var e1=parseInt(localStorage.BGMVolume);
				if(localStorage.BGMVolume!=0){
					e1-=5;
					seBeep();
				}
				audioElement2.volume=e1/100;
				localStorage.BGMVolume=e1;					
			}else if(configPage==true&&ButtonTouch(ButtonBlueRightBGM, touch_list[0])){
				configSelect = 1;
				var e1=parseInt(localStorage.BGMVolume);
				if(localStorage.BGMVolume!=100){
					e1+=5;
					seBeep();
				}
				audioElement2.volume=e1/100;
				localStorage.BGMVolume=e1;					
			}else if(configPage==true&&ButtonTouch(ButtonBlueLeftSE, touch_list[0])){
				configSelect = 2;
				var e1=parseInt(localStorage.SEVolume);
				if(localStorage.SEVolume!=0){
					e1-=5;
					seBeep();
				}
				audioElement2.volume=e1/100;
				localStorage.SEVolume=e1;					
			}else if(configPage==true&&ButtonTouch(ButtonBlueRightSE, touch_list[0])){
				configSelect = 2;
				var e1=parseInt(localStorage.SEVolume);
				if(localStorage.SEVolume!=100){
					e1+=5;
					seBeep();
				}
				audioElement2.volume=e1/100;
				localStorage.SEVolume=e1;					
			}else if(configPage==true && ButtonTouch(ButtonConfigBack, touch_list[0])){
				menuPage=true;
				configPage=false;
				seOK();
			}else if(gameOverPage==true && ButtonTouch(ButtonGameOverRetry, touch_list[0])){
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
			}else if(gameOverPage==true &&ButtonTouch(ButtonGameOverMenu, touch_list[0])){
				menuPage=true;
				gameOverPage=false;
				seOK();
			}else if(gameEndMessegeFinish == true&&ButtonTouch(ButtonEndBack, touch_list[0])){
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
			}else if(gamePause==true &&ButtonTouch(ButtonPauseBack, touch_list[0])){
				gamePauseCheck();
				seOK();
			}else if(gamePause==true &&ButtonTouch(ButtonPauseRetry, touch_list[0])){
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
			}else if(gamePause==true &&ButtonTouch(ButtonPauseMenu, touch_list[0])){
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
			}
		}
		//hasTouch = true;

		if(gameStart){
			playerTouch = PlayerTouch(touch_list[0]);
			console.log(PlayerTouch(touch_list[0]));
		}
}

function TouchMove(e){
	if(playerTouch){
		move_list = e.changedTouches;
		var mx = move_list[0].clientX - touch_list[0].clientX;
		var my = move_list[0].clientY - touch_list[0].clientY;
		player.posX = move_list[0].clientX - (pw/2);
		player.posY = move_list[0].clientY - (ph/2);
		console.log("aa");
	}
	
}

function TouchEnd(e){
	hasTouch = false;
	playerTouch = false;
}

function ButtonTouch(btm, touch){
	if(touch.clientY<=(btm.y+btm.dy) 
	&& (touch.clientY)>=btm.y
	&& touch.clientX<=btm.x+btm.dx
	&& (touch.clientX)>=(btm.x)){
		return true;
	}
	else return false;
}

function PlayerTouch(touch){
	
	if(touch.clientY<=(py+ph) 
	&& (touch.clientY)>=py
	&& touch.clientX<=px+pw
	&& (touch.clientX)>=(px)){
		return true;
	}
	else return false;
}