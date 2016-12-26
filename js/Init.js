function init(){//初始化
			var e1=parseInt(localStorage.BGMVolume);
			audioElement.currentTime=0;
			audioElement.play();
			audioElement.volume=e1/100;
			audioElement2.pause();
			audioElement2.currentTime=0;
			cancelAnimationFrame(drawMenu);
			
			test=0;
			
			if(characterSelect==1){
				player = {
				img:img_player,
				width: 40,
				height: 40,
				posX: canvas.width/2, //player x position
				posY: canvas.height-40*3,//player y position
				speed: 5,
				damage: 0.9,
				oldDamage: 0.9,
				life: 25,
				oldMaxLife: 25,
				maxLife: 25,
				skill: 0
				}
			}
			
			if(characterSelect==2){
				player = {
				img:img_player2,
				width: 35,
				height: 35,
				posX: canvas.width/2, //player x position
				posY: canvas.height-40*3,//player y position
				speed: 7,
				damage: 1.1,
				oldDamage: 0.9,
				life: 15,
				oldMaxLife: 15,
				maxLife: 15,
				skill: 0
				}
			}
			
			playerX = canvas.width/2;//player x position
			playerY = canvas.height-playerHeight*3;//player y position
			
			score = 0;
			timer = 0;
			flyHeight = 0;
			gameLevel = 1;
			gameEnd = false;
			gameEndMessege = false;
			gameEndMessegeFinish = false;
			sniperAngle = 90;
			angle=sniperAngle*Math.PI/180;
			life=100;
			maxLife = 100;
			enemyRate=350;
			enemyHit = 0;
			collisionSide=0;
			pauseSelect=1;
			saveCheck=false;
			recoverTime=3;
			lifeTransparent=false;
			skillTransparent=false;
			PilotTransparent=false;
			
			for(var i=0;i<20;i++){
				bgLevel[i]=false;
			}
			bgLevel[1]=true;
			
			titleLevel = [];//關卡標題判定
			for(var i=0;i<20;i++){
				titleLevel[i]=false;
			}
			titleTimer=0;
			titleAlpha=0;
			
			bgMove=0;
			bg2Alpha = 1.0;
			bgLevelCurrent = 1;
			
			block1Array=[];
			bgBlockArray=[];
			blowUp = [];
			itemArray=[];
			
			titleAnimation=false;
			titleBlock=[];
			
			rightPress = false;
			leftPress = false;
			downPress = false;
			upPress = false;
			
			clearInterval(gameLoop);
			clearInterval(counter);
			clearInterval(setBGMove);
			clearInterval(setFlyHeight);
			clearInterval(setBlowUpTimer);
			clearInterval(setItem);
		}	