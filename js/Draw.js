function drawPlayer(){//繪製玩家	
	px = player.posX-(player.width/4);//玩家圖片區域
	py = player.posY-(player.height/2);
		
	ctx.beginPath();								
	if(player.life>0)ctx.drawImage(player.img, px, py, pw, ph);
	//else blowUpArrray(player);
	//ctx.rect(player.posX, player.posY, player.width, player.height);
	ctx.fillStyle="#0095DD";
	ctx.fill();
	ctx.closePath();
}
	
function drawBullet(){//繪製子彈
	for(var i=0;i<player_bullet.length;i++){
		var bullet = player_bullet[i];
		bullet.posY1+= bullet.speed;
		
		ctx.fillStyle = "rgba(200,0,0,1)";
		ctx.fillRect(bullet.posX, bullet.posY1, bullet.width, bullet.height);
	}
}

function drawItem(){//繪製強化道具
	for(var i=0;i<itemArray.length;i++){
		var blocks = itemArray[i];
		if(gamePause==false){
			blocks.posX+= blocks.speedX;
			blocks.posY+= blocks.speedY;
		}
		ctx.fillStyle = blocks.color;
		//ctx.fillRect(blocks.posX, blocks.posY, blocks.width, blocks.height);	
		ctx.drawImage(blocks.img,blocks.posX-5, blocks.posY-5, blocks.width+10, blocks.height+10);
	}
}

function drawblock(){//繪製標靶
	for(var i=0;i<block1Array.length;i++){
		var blocks = block1Array[i];
		if(gamePause==false){
			blocks.posX+= blocks.speedX;
			blocks.posY+= blocks.speedY;
		}
		ctx.fillStyle = blocks.color;
		//ctx.fillRect(blocks.posX, blocks.posY, blocks.width, blocks.height);
		if(bgLevel[1]==true && bgLevelCurrent == 1){
			ctx.drawImage(blocks.img,blocks.posX-5, blocks.posY-5, blocks.width+10, blocks.height+10);
		}else if(bgLevel[2]==true && bgLevelCurrent == 2){
			ctx.drawImage(blocks.img,blocks.posX-5, blocks.posY, blocks.width+10, blocks.height);
		}else if(bgLevel[3]==true && bgLevelCurrent == 3){
			ctx.drawImage(blocks.img,blocks.posX-(blocks.width/4), blocks.posY-(blocks.height/8), blocks.width*2, blocks.height+(blocks.height/4));
		}else if(bgLevel[4]==true && bgLevelCurrent == 4){
			ctx.drawImage(blocks.img,blocks.posX-(blocks.width/5), blocks.posY-(blocks.height*2), blocks.width*3, blocks.height*3.5);
		}else if(bgLevel[5]==true && bgLevelCurrent == 5){
			ctx.drawImage(blocks.img, blocks.rx, blocks.ry, blocks.rWidth, blocks.rHeight, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
		}else if(bgLevel[6]==true && bgLevelCurrent == 6){
			ctx.drawImage(blocks.img, blocks.rx, blocks.ry, blocks.rWidth, blocks.rHeight, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
		}else if(bgLevel[7]==true && bgLevelCurrent == 7){
			ctx.drawImage(blocks.img, blocks.rx, blocks.ry, blocks.rWidth, blocks.rHeight, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
		}else if(bgLevel[8]==true && bgLevelCurrent == 8){
			ctx.drawImage(blocks.img, blocks.rx, blocks.ry, blocks.rWidth, blocks.rHeight, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
		}else if(bgLevel[9]==true && bgLevelCurrent == 9){
			ctx.drawImage(blocks.img, blocks.rx, blocks.ry, blocks.rWidth, blocks.rHeight, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
		}else if(bgLevel[10]==true && bgLevelCurrent == 10){
			//ctx.drawImage(blocks.img, blocks.posX-(blocks.width/8), blocks.posY-(blocks.height/8), blocks.width+(blocks.width/4), blocks.height+(blocks.height/4));
			if(gamePause==false)blocks.angle+=1;
			rotation(blocks);
		}else if(bgLevel[11]==true && bgLevelCurrent == 11){
			ctx.fillRect(blocks.posX, blocks.posY, blocks.width, blocks.height);
		}else{
			ctx.drawImage(blocks.img,blocks.posX-5, blocks.posY-5, blocks.width+10, blocks.height+10);
		}
	}
}

function drawScore(){//繪製關卡數
	var tempLevel=gameLevel+"";
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(16, 8, 122+18*tempLevel.length, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(16, 8, 122+18*tempLevel.length, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Stage: "+gameLevel,16,40);
}
	
function drawFlyHeight(){//繪製高度

	var heightTemp = flyHeight;
	var flyHeightDigit;//=Math.floor(flyHeight)+"";
	var lengthUnit = " m";
	if(gameLevel>=5){
		heightTemp/=1000;
		lengthUnit = " km";
	}
	if(gameLevel>=9 || gameLevel=="Clear"){
		heightTemp=flyHeight/(9.46*Math.pow(10,12));
		lengthUnit = " ly"/*" 光年"*/;
	}
	flyHeightDigit=Math.floor(heightTemp)+"";
	
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(16, 46, 184+18*flyHeightDigit.length, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(16, 46, 184+18*flyHeightDigit.length, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Height: "+Math.floor(heightTemp)+lengthUnit,16, 80);
	//alert(flyHeightDigit.length);
}
	
function drawKill(){//繪製MISS
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(16, 86, 120, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(16, 86, 120, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Miss: "+enemyHit,16, 120);
}
	
function drawPilot(){//繪製頭像
	
	if(pilotTransparent==true&&gameEnd!=true)ctx.globalAlpha=0.3;
	else if(gameEnd!=true)ctx.globalAlpha=0.8;
	
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(8, canvas.height-300, 150, 150);
	if(player.life/player.maxLife>0.5)ctx.fillStyle = "#003377";
	else if(player.life/player.maxLife>0.2)ctx.fillStyle = "#888800";
	else ctx.fillStyle = "#CC0000";
	ctx.fillRect(8, canvas.height-300, 150, 150);
	
	if(characterSelect==1){
		if(player.life/player.maxLife>0.5)ctx.drawImage(img_Cian,37,5,160,160,3,canvas.height-300,150,150);
		else if(player.life/player.maxLife>0.2)ctx.drawImage(img_Cian_pain,37,5,160,160,3,canvas.height-300,150,150);
		else ctx.drawImage(img_Cian_pain2,37,5,160,160,3,canvas.height-300,150,150);
	}
	if(characterSelect==2){
		if(player.life/player.maxLife>0.5)ctx.drawImage(img_izayoi,47,85,140,140,3,canvas.height-300,150,150);
		else if(player.life/player.maxLife>0.2)ctx.drawImage(img_izayoi_pain,47,85,140,140,3,canvas.height-300,150,150);
		else ctx.drawImage(img_izayoi_pain2,47,85,140,140,3,canvas.height-300,150,150);
	}
	if(gameEnd!=true)ctx.globalAlpha=1;
}

function drawLife(){//繪製體力
	if(lifeTransparent==true&&gameEnd!=true)ctx.globalAlpha=0.3;
	else if(gameEnd!=true)ctx.globalAlpha=1;
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(8, canvas.height-67, player.maxLife*0.7*2, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(8, canvas.height-67, player.maxLife*0.7*2, 40);
	
	if(player.life/player.maxLife>0.5)ctx.fillStyle = "#00DD00";
	else if(player.life/player.maxLife>0.2)ctx.fillStyle = "#EEEE00";
	else ctx.fillStyle = "#CC0000";
	
	//tx.fillStyle = "#00FF00";
	if(player.life>0)ctx.fillRect(8, canvas.height-67, player.life*0.7*2, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(player.life,8, canvas.height-40);
	if(gameEnd!=true)ctx.globalAlpha=1;
}

function drawSkill(){//繪製技能
	if(skillTransparent==true&&gameEnd!=true)ctx.globalAlpha=0.3;
	else if(gameEnd!=true)ctx.globalAlpha=1;
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(8, canvas.height-145, 150, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(8, canvas.height-145, 150, 40);
	
	if(characterSelect==1){
		if(player.skill==0)ctx.fillStyle = "#444444";
		if(player.skill==1)ctx.fillStyle = "#EEEE00";
		if(player.skill==2)ctx.fillStyle = "#FF0000";
		ctx.fillText("Ghost Cage",8, canvas.height-129);
	}
	if(characterSelect==2){
		if(player.skill==0)ctx.fillStyle = "#444444";
		if(player.skill==1)ctx.fillStyle = "#EEEE00";
		//if(player.skill==2)ctx.fillStyle = "#FF0000";
		ctx.fillText("Death Line",8, canvas.height-129);
	}
	if(gameEnd!=true)ctx.globalAlpha=1;
}
	
function drawGameOver(){//繪製遊戲結束

	ctx.globalAlpha=0.8;
	ctx.font = "36px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(95, 30, 200, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(95, 30, 200, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.globalAlpha=1;
	ctx.fillText("Game Over",100, 65);
	
	ctx.globalAlpha=0.8;
	ctx.font = "20px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(20, 80, canvas.width-40, 330);
	ctx.fillStyle = "#003377";
	ctx.fillRect(20, 80, canvas.width-40, 330);
	ctx.fillStyle = "#FFFFFF";
	ctx.globalAlpha=1;
	
	if(difficulty==1)ctx.fillText("Difficulty: Easy",30, 110);
	if(difficulty==2)ctx.fillText("Difficulty: Normal",30, 110);
	if(difficulty==3)ctx.fillText("Difficulty: Hard",30, 110);
	ctx.fillText("Stage:  "+gameLevel,30, 136);
	ctx.fillText("Height: "+finalHeight,30, 162);
	ctx.fillText("Miss:    "+enemyHit,30, 188);
	ctx.fillText("Time:   "+timer,30, 214);
	
	ctx.fillText("",30, 240);
	ctx.fillText("",30, 266);
	
	ctx.globalAlpha=0.5;
	if(gameOverSelect==1)ctx.globalAlpha=1;
	ctx.drawImage(ButtonGameOverRetry.img, ButtonGameOverRetry.x, ButtonGameOverRetry.y,ButtonGameOverRetry.dx,ButtonGameOverRetry.dy);
	ctx.globalAlpha=0.5;
	
	if(gameOverSelect==2)ctx.globalAlpha=1;
	ctx.drawImage(ButtonGameOverMenu.img, ButtonGameOverMenu.x, ButtonGameOverMenu.y,ButtonGameOverMenu.dx,ButtonGameOverMenu.dy);
	ctx.globalAlpha=1;
	
}

function drawPause(){//繪製暫停
	
	ctx.globalAlpha=0.8;
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#003377";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FFFFFF";
	ctx.globalAlpha=1;
	
	ctx.globalAlpha=0.8;
	ctx.font = "36px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(130, 30, 145-15, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(130, 30, 145-15, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.globalAlpha=1;
	ctx.fillText("Pause",140, 65);
	
	ctx.globalAlpha=0.5;
	if(pauseSelect==1)ctx.globalAlpha=1;
	ctx.drawImage(ButtonPauseBack.img, ButtonPauseBack.x, ButtonPauseBack.y,ButtonPauseBack.dx,ButtonPauseBack.dy);
	
	ctx.globalAlpha=0.5;
	if(pauseSelect==2)ctx.globalAlpha=1;
	ctx.drawImage(ButtonPauseRetry.img, ButtonPauseRetry.x, ButtonPauseRetry.y,ButtonPauseRetry.dx,ButtonPauseRetry.dy);
	
	ctx.globalAlpha=0.5;
	if(pauseSelect==3)ctx.globalAlpha=1;
	ctx.drawImage(ButtonPauseMenu.img, ButtonPauseMenu.x, ButtonPauseMenu.y,ButtonPauseMenu.dx,ButtonPauseMenu.dy);
	ctx.globalAlpha=1;
	
}

function drawTimer(){//繪製計時器
	ctx.font = "32px Lucida";
	ctx.strokeStyle = "#66FFFF";
	ctx.strokeRect(canvas.width-174, 8, 150, 40);
	ctx.fillStyle = "#003377";
	ctx.fillRect(canvas.width-174, 8, 150, 40);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Time: "+timer,canvas.width-170, 40);
}

function drawStageTitle(){//繪製關卡標題
	titleTimer++;
	if(gameLevel==1){
		if(titleAlpha<1&&titleLevel[1]==false&&titleTimer>50){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[1]==false&&titleAlpha>=1){
			titleLevel[1]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[1]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;				
		/*ctx.strokeStyle = "#66FFFF";
		ctx.strokeRect(95, 60, 200, 40);
		ctx.fillStyle = "#003377";
		ctx.fillRect(95, 60, 200, 40);*/
		
		ctx.fillStyle = "#444444";
		ctx.font = "96px Lucida";
		ctx.fillText("Hello World",166, 516);
		
		ctx.globalAlpha=titleAlpha;
		ctx.font = "96px Lucida";
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Hello World",160, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 1 對流層",320, 570);
		//ctx.fillText("Stage 1 Troposphere",140, 285);
		if(characterSelect==1){
			ctx.fillText("再也沒有繼續下去的理由了，這個人生",120, 620);
			ctx.fillText("一切都已經結束，留下的只有空虛", 152, 660);
			//ctx.fillText("I have no reason to keep my life.",60, 310);
			//ctx.fillText("Everything has overed, only emptiness leaving.",60, 330);
		}
		if(characterSelect==2){
			ctx.fillText("不喜歡這個世界，到處都充滿了痛苦",140, 620);
			ctx.fillText("既然如此，就到一個沒有痛苦的世界去吧",114, 660);
			//ctx.fillText("I don't like this world, it's painful everywhere",57, 310);
			//ctx.fillText("I will go to a new world without any pain.",57, 330);
		}
		
	}
	
	if(gameLevel==2){
		if(titleAlpha<1&&titleLevel[2]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[2]==false&&titleAlpha>=1){
			titleLevel[2]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[2]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Variance",246, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Variance",240, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 2 積雨雲",320, 570);
		//ctx.fillText("Stage 2 Cumulonimbus",140, 285);
		if(characterSelect==1){
			ctx.fillText("烏雲密布的那一晚，母親死了",196, 620);
			ctx.fillText("倒在血中的物體，沒有人為其哭泣",162, 660);
			//ctx.fillText("My mother died in the cloudy night.",57, 310);
			//ctx.fillText("No one was crying for the corpse in the blood.",57, 330);						
		}
		if(characterSelect==2){
			ctx.fillText("學校裡，並沒有任何值得高興的事",164, 620);
			ctx.fillText("只有身上的傷痕，會不斷增加", 196, 660);	
			//ctx.fillText("Nothing good would happend in the school.",57, 310);
			//ctx.fillText("Only the scar in my body would increase.",57, 330);	
		}					
	}
	
	if(gameLevel==3){
		if(titleAlpha<1&&titleLevel[3]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[3]==false&&titleAlpha>=1){
			titleLevel[3]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[3]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("While",296, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("While",290, 510);
		ctx.font = "32px Lucida";
		ctx.fillStyle = "#444444";
		ctx.fillText("Stage 3 平流層",320, 570);
		//ctx.fillText("Stage 3 stratosphere",140, 285);
		if(characterSelect==1){
			ctx.fillText("退學的時候，沒有任何迷網",210, 620);
			ctx.fillText("弱者只能被欺負，強者才能活下來",160, 660);
			//ctx.fillText("Having no confuse when I was quit by school.",40, 310);
			//ctx.fillText("The weak would be bullied, and power was everything.",40, 330);
		}
		if(characterSelect==2){
			ctx.fillText("遇到了她，因此獲得安慰",220, 620);
			ctx.fillText("她是唯一理解我的人",252, 660);
			//ctx.fillText("I was conforted after I met her.",40, 310);
			//ctx.fillText("She was the only one who totally understood me.",40, 330);
		}
	}
	
	if(gameLevel==4){
		if(titleAlpha<1&&titleLevel[4]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[4]==false&&titleAlpha>=1){
			titleLevel[4]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[4]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Break",296, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Break",290, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 4 大氣層頂部",280, 570);
		//ctx.fillText("Stage 4 Top of Atmosphere",140, 285);
		if(characterSelect==1){
			ctx.fillText("拳頭上沾染的血，宣告著失去了原本的世界",104, 620);
			ctx.fillText("本來就沒有任何依戀，一切過去都將被捨棄",104, 660);
			//ctx.fillText("The blood on my fist announced that I couldn't return.",40, 310);
			//ctx.fillText("I was not regretting at it at the beginning.",40, 330);
		}
		if(characterSelect==2){
			ctx.fillText("一起從學校裡逃走了",270, 620);
			ctx.fillText("從城鎮逃走了，從世界逃走了",206, 660);
			//ctx.fillText("Escape from the school together.",57, 310);
			//ctx.fillText("Escape from the town. Escape from the world.",57, 330);
		}
	}
	
	if(gameLevel==5){
		if(titleAlpha<1&&titleLevel[5]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[5]==false&&titleAlpha>=1){
			titleLevel[5]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[5]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("For",326, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("For",320, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 5 月球",340, 570);
		//ctx.fillText("Stage 5 Moon",170, 285);
		if(characterSelect==1){
			ctx.fillText("傷害無數的敵人，用暴力換取生存",168, 620);
			ctx.fillText("如果不想被傷害，就必須讓所有人恐懼自己",120, 660);
			//ctx.fillText("If you didn't want to be hurted,",70, 310);
			//ctx.fillText("making everyone afraid of you.",70, 330);
		}
		if(characterSelect==2){
			ctx.fillText("偽造的光明消失了，皎潔的月光從林間穿透",102, 620);
			ctx.fillText("只要能夠在一起，就能感到無比安心",150, 660);
			//ctx.fillText("The moonlight shined the forest. ",51, 310);
			//ctx.fillText("I was relieved when she was going with me.",75, 330);
		}
	}
	
	if(gameLevel==6){
		if(titleAlpha<1&&titleLevel[6]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[6]==false&&titleAlpha>=1){
			titleLevel[6]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[6]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Overflow",246, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Overflow",240, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 6 火星",340, 570);
		//ctx.fillText("Stage 6 Mars",170, 285);
		if(characterSelect==1){
			ctx.fillText("一切是為了復仇，這是唯一能夠選擇的生存方式",70, 620);
			ctx.fillText("如今，殺害母親的仇人就站在我面前",160, 660);
			//ctx.fillText("Revenge was the only way I could choose.",57, 310);
			//ctx.fillText("Now, my enemy stood in front of me.",57, 330);
		}
		if(characterSelect==2){
			ctx.fillText("這裡沒有任何醜惡的喧囂，唯有彼此是純潔的",80, 620);
			ctx.fillText("她是最初也是最後的摯友，她將帶給我救贖",100, 660);
			//ctx.fillText("This place had no any disgusted noise.",50, 310);
			//ctx.fillText("She my first and last best friend. She would saved my soul.",50, 330);
		}
	}
	
	if(gameLevel==7){
		if(titleAlpha<1&&titleLevel[7]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[7]==false&&titleAlpha>=1){
			titleLevel[7]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[7]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Freeze",286, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Freeze",280, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 7 土星",340, 570);
		//ctx.fillText("Stage 7 Saturn",160, 285);
		if(characterSelect==1){
			ctx.fillText("將父親殺死了，如同他對母親做的一樣",140, 620);
			ctx.fillText("倒在血中的物體，沒有人為其哭泣",164, 660);
			//ctx.fillText("I killed my father, like what he done to my mother.",57, 310);
			//ctx.fillText("No one was crying for the corpse in the blood.",57, 330);
		}
		if(characterSelect==2){
			ctx.fillText("山與海的分界線，將終結所有痛苦",164, 620);
			ctx.fillText("我們相視而笑，手牽著手跳入海中",164, 660);
			//ctx.fillText("It would be the end of enternal pain.",57, 310);
			//ctx.fillText("We handed each other, jumping into the sea.",57, 330);
		}
	}
	
	if(gameLevel==8){
		if(titleAlpha<1&&titleLevel[8]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[8]==false&&titleAlpha>=1){
			titleLevel[8]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[8]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Object",286, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Object",280, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 8 半人馬座α",280, 570);
		//ctx.fillText("Stage 8 Alpha Centauri",140, 285);
		if(characterSelect==1){
			ctx.fillText("都結束了，心中這樣訴說著",220, 620);
			ctx.fillText("沒有高興或悲傷，空虛的回音在心中迴盪",130, 660);
			//ctx.fillText("I knowed, everything was over.",57, 310);
			//ctx.fillText("But I only feelled the sense of emptiness.",57, 330);
		}
		if(characterSelect==2){
			ctx.fillText("身體依舊疼痛，心靈依舊痛苦",190, 620);
			ctx.fillText("為什麼不得不活著，唯獨她一個人離去了呢",100, 660);
			//ctx.fillText("My body and heart still feeled painful.",57, 310);
			//ctx.fillText("Why she went away herself, leaving me alone?",57, 330);
		}
	}
	
	if(gameLevel==9){
		if(titleAlpha<1&&titleLevel[9]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[9]==false&&titleAlpha>=1){
			titleLevel[9]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[9]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Algorithm",226, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Algorithm",220, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 9 船底座星雲",280, 570);
		//ctx.fillText("Stage 9 Carina Nebula",140, 285);
		if(characterSelect==1){
			ctx.fillText("失去意義的人生，本來就應該結束",160, 620);
			ctx.fillText("惡魔在耳邊低語，回過神時已經踏上了永恆的旅途",50, 660);
			//ctx.fillText("The life without significance should be overed.",20, 310);
			//ctx.fillText("Demon was muttered, and I began the journey of enternal.",20, 330);
		}
		if(characterSelect==2){
			ctx.fillText("靈魂在那一晚死去，只想追隨她的身影",140, 620);
			ctx.fillText("神明給予了啟示，踏上永恆的旅程",172, 660);
			//ctx.fillText("My soul died in the night. I only wanted to follow her.",20, 310);
			//ctx.fillText("God called me, and I began the journey of enternal. ",20, 330);
		}
	}
	
	if(gameLevel==10){
		if(titleAlpha<1&&titleLevel[10]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[10]==false&&titleAlpha>=1){
			titleLevel[10]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[10]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Memory",286, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Memory",280, 510);
		ctx.font = "32px Lucida";
		ctx.fillText("Stage 10 銀河系",320, 570);
		//ctx.fillText("Stage 10 Galaxy",160, 285);
		if(characterSelect==1){
			ctx.fillText("離開地球越遠，事物也變的更加渺小",150, 620);
			ctx.fillText("一切都已經忘記，僅僅是沉浸在無窮的星空之中",60, 660);
			//ctx.fillText("Everything is small when I go far from the earth.",57, 310);
			//ctx.fillText("I Immers myself in the sea of stars.",57, 330);
		}
		if(characterSelect==2){
			ctx.fillText("再也沒有任何聲音，孤獨充斥著宇宙",150, 620);
			ctx.fillText("在星空的某處，她是否會在那裏呢",166, 660);
			//ctx.fillText("It is quiet everywhere.",57, 310);
			//ctx.fillText("Is she in somewhere of the sea of stars?",57, 330);
		}
	}
	
	if(gameLevel==11){
		if(titleAlpha<1&&titleLevel[11]==false&&titleTimer>250){
			titleAlpha+=0.005;
			if(titleAlpha>=1){
				titleAlpha=1;
				titleTimer=0;
			}
		}
		if(titleTimer>=100&&titleLevel[11]==false&&titleAlpha>=1){
			titleLevel[11]=true;
			titleTimer=0;
		}
		if(titleAlpha>=0&&titleLevel[11]==true){
			titleAlpha-=0.005;
			if(titleAlpha<=0){
				titleAlpha=0;
				titleTimer=0;
			}
		}				
		ctx.globalAlpha=titleAlpha*0.8;
		ctx.font = "96px Lucida";
		ctx.globalAlpha=titleAlpha;
		ctx.fillStyle = "#444444";
		ctx.fillText("Return",286, 516);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Return",280, 510);
		ctx.font = "32px Lucida";
		ctx.fillStyle = "#444444";
		ctx.fillText("Stage 11 Unknow",320, 570);
		if(characterSelect==1){
			ctx.fillText("身體彷彿要分崩離析，旅途的終結即將到來",100, 620);
			ctx.fillText("帶著對人生小小的遺憾，我衝入了無限的光芒之中",50, 660);
			//ctx.fillText("The ending of the journey will coming soon.",40, 310);
			//ctx.fillText("Feeling a little of regret, I went into the stream of light.",40, 330);
		}
		if(characterSelect==2){
			
			ctx.fillStyle = "#444444";
			ctx.fillText("身體依舊疼痛，但心靈獲得救贖",174, 620);
			ctx.fillText("胸口感到了一絲溫暖，我迎向了光芒之中",110, 660);
			//ctx.fillText("My body is still painful, but my heart is saved.",40, 310);
			//ctx.fillText("Feeling a little of warm, I went into the stream of light.",40, 330);
		}
	}
	ctx.golbalAlpha=1;
}
	
function drawBG(){
	var img_bgCurrentHeight;
	var bgLong;
	var img_bgCurrent=new Image();
	var bgOffsetCurrent;
	var bgWidth;
	var bgHeight;
	
	if(bgLevelCurrent==1 && img_bgCurrent != img_bg1){//載入背景資訊
		bgLong=canvas.height-bg1_Height+bgMove;
		img_bgCurrent = img_bg1;
		bgOffsetCurrent = bg1_offset;
		bgWidth = bg1_Width;
		bgHeight = bg1_Height;
	}
	if(bgLevelCurrent==2 && img_bgCurrent != img_bg2){
		bgLong=canvas.height-bg2_Height+bgMove;
		img_bgCurrent = img_bg2;
		bgOffsetCurrent = bg2_offset;
		bgWidth = bg2_Width;
		bgHeight = bg2_Height;
	}
	if(bgLevelCurrent==3 && img_bgCurrent != img_bg3){
		bgLong=canvas.height-bg3_Height+bgMove;
		img_bgCurrent = img_bg3;
		bgOffsetCurrent = bg3_offset;
		bgWidth = bg3_Width;
		bgHeight = bg3_Height;
	}
	if(bgLevelCurrent==4 && img_bgCurrent != img_bg4){
		bgLong=canvas.height-bg4_Height+bgMove;
		img_bgCurrent = img_bg4;
		bgOffsetCurrent = bg4_offset;
		bgWidth = bg4_Width;
		bgHeight = bg4_Height;
	}
	if(bgLevelCurrent==5 && img_bgCurrent != img_bg5){
		bgLong=canvas.height-bg5_Height+bgMove;
		img_bgCurrent = img_bg5;
		bgOffsetCurrent = bg5_offset;
		bgWidth = bg5_Width;
		bgHeight = bg5_Height;
	}
	if(bgLevelCurrent==6 && img_bgCurrent != img_bg6){
		bgLong=canvas.height-bg6_Height+bgMove;
		img_bgCurrent = img_bg6;
		bgOffsetCurrent = bg6_offset;
		bgWidth = bg6_Width;
		bgHeight = bg6_Height;
	}
	if(bgLevelCurrent==7 && img_bgCurrent != img_bg7){
		bgLong=canvas.height-bg7_Height+bgMove;
		img_bgCurrent = img_bg7;
		bgOffsetCurrent = bg7_offset;
		bgWidth = bg7_Width;
		bgHeight = bg7_Height;
	}
	if(bgLevelCurrent==8 && img_bgCurrent != img_bg8){
		bgLong=canvas.height-bg8_Height+bgMove;
		img_bgCurrent = img_bg8;
		bgOffsetCurrent = bg8_offset;
		bgWidth = bg8_Width;
		bgHeight = bg8_Height;
	}
	if(bgLevelCurrent==9 && img_bgCurrent != img_bg9){
		bgLong=canvas.height-bg9_Height+bgMove;
		img_bgCurrent = img_bg9;
		bgOffsetCurrent = bg9_offset;
		bgWidth = bg9_Width;
		bgHeight = bg9_Height;
	}
	
	if(bgLevelCurrent==10 && img_bgCurrent != img_bg10){
		bgLong=canvas.height-bg10_Height+bgMove;
		img_bgCurrent = img_bg10;
		bgOffsetCurrent = bg10_offset;
		bgWidth = bg10_Width;
		bgHeight = bg10_Height;
	}
	
	if(bgLevelCurrent==11){
		bgLong=1;
		img_bgCurrent = null;
		bgOffsetCurrent = 0;
		bgWidth = 0;
		bgHeight = 0;
		
		var num = (Math.floor(Math.random()*7+1));
		if(num==1){
			var block1 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -200,
			speed: -50,
			color:"#FFB7DD"
		}	
			bgBlockArray.push(block1);
		}
		if(num==2){
			var block2 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -200,
			speed: -50,
			color:"#DDDD00"
		}	
			bgBlockArray.push(block2);
		}
		if(num==3){
			var block3 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -200,
			speed: -50,
			color:"#00DDDD"
		}	
			bgBlockArray.push(block3);
		}
		if(num==4){
			var block3 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -200,
			speed: -50,
			color:"#66DD00"
		}	
			bgBlockArray.push(block3);
		}
		if(num==5){
			var block3 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -50,
			speed: -50,
			color:"#D28EFF"
		}	
			bgBlockArray.push(block3);
		}
		if(num==6){
			var block3 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -50,
			speed: -50,
			color:"#99BBFF"
		}	
			bgBlockArray.push(block3);
		}
		if(num==7){
			var block3 = {
			width:12,
			height:200,
			posX: Math.floor(Math.random()*(canvas.width-5)),
			posY: -50,
			speed: -50,
			color:"#FF3333"
		}	
			bgBlockArray.push(block3);
		}
		check();
		for(var i=0;i<bgBlockArray.length;i++){
		var blocks = bgBlockArray[i];
		blocks.posY-= blocks.speed;
		
		if(gameLevel==11&&gameEnd!=true)ctx.globalAlpha=1;
		if(gameEndMessege==true)ctx.globalAlpha=0;
		ctx.fillStyle = blocks.color;
		ctx.fillRect(blocks.posX, blocks.posY, blocks.width, blocks.height);
		//ctx.drawImage(blocks.img,blocks.posX, blocks.posY, blocks.radius, blocks.radius);
	}
	}
	
	//背景淡入淡出
	if(gameLevel==2 && bg2Alpha>=0.01 && bgLevel[2]==false){
		bg2Alpha-=0.005;
	}
	if(bg2Alpha<=0.01 && bgLevel[2]==false){
		bgLevelCurrent=2;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[2]==true && bg2Alpha<1 && gameLevel==2){
		bg2Alpha+=0.005;
	}

	if(gameLevel==3 && bg2Alpha>=0.01 && bgLevel[3]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[3]==false){
		bgLevelCurrent=3;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[3]==true && bg2Alpha<=1 && gameLevel==3){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==4 && bg2Alpha>=0.01 && bgLevel[4]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[4]==false){
		bgLevelCurrent=4;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[4]==true && bg2Alpha<=1 && gameLevel==4){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==5 && bg2Alpha>=0.01 && bgLevel[5]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[5]==false){
		bgLevelCurrent=5;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[5]==true && bg2Alpha<=1 && gameLevel==5){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==6 && bg2Alpha>=0.01 && bgLevel[6]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[6]==false){
		bgLevelCurrent=6;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[6]==true && bg2Alpha<=1 && gameLevel==6){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==7 && bg2Alpha>=0.01 && bgLevel[7]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[7]==false){
		bgLevelCurrent=7;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[7]==true && bg2Alpha<=1 && gameLevel==7){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==8 && bg2Alpha>=0.01 && bgLevel[8]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[8]==false){
		bgLevelCurrent=8;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[8]==true && bg2Alpha<=1 && gameLevel==8){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==9 && bg2Alpha>=0.01 && bgLevel[9]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[9]==false){
		bgLevelCurrent=9;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[9]==true && bg2Alpha<=1 && gameLevel==9){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==10 && bg2Alpha>=0.01 && bgLevel[10]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[10]==false){
		bgLevelCurrent=10;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[10]==true && bg2Alpha<=1 && gameLevel==10){
		bg2Alpha+=0.005;
	}
	
	if(gameLevel==11 && bg2Alpha>=0.01 && bgLevel[11]==false){
		bg2Alpha-=0.005;
		//alert(bg2Alpha);
	}
	if(bg2Alpha<=0.01 && bgLevel[11]==false){
		bgLevelCurrent=11;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[11]==true && bg2Alpha<=1 && gameLevel==11){
		bg2Alpha+=0.005;
	}
	
	if(gameEnd == true && bg2Alpha>=0.01){
		bg2Alpha-=0.002;
		if(bg2Alpha<0.01){
			clearInterval(counter);
			clearInterval(setBGMove);
			clearInterval(setFlyHeight);
			gameEndMessege=true;
		}
		//alert(bg2Alpha);
	}
	/*if(bg2Alpha<=0.01 && bgLevel[15]==false){
		bgLevelCurrent=15;
		bgMove=0;
		bgLevel[bgLevelCurrent]=true;
	}
	if(bgLevel[15]==true && bg2Alpha<=1 && gameLevel==15){
		bg2Alpha+=0.005;
	}*/

	if(bg2Alpha>1)bg2Alpha=1;
	
	ctx.globalAlpha=bg2Alpha;
	if(bgLong>=1){
		bgLong=1;
	}
	if(bgLevel[11]!=true)ctx.drawImage(img_bgCurrent,bgOffsetCurrent ,bgLong-400, bgWidth*2, bgHeight*2);
	if(gameEnd == false)ctx.globalAlpha=1.0;
}

function BGMoving(){
	if(gameLevel==1)bgMove+=(0.21);
	else if(gameLevel==2 && bgLevel[2]==true)bgMove+=(1);
	else if(gameLevel==3 && bgLevel[3]==true)bgMove+=(0.08);
	else if(gameLevel==4 && bgLevel[4]==true)bgMove+=(0.15);
	else if(gameLevel==5 && bgLevel[5]==true)bgMove+=(0.21);
	else if(gameLevel==6 && bgLevel[6]==true)bgMove+=(0.15);
	else if(gameLevel==7 && bgLevel[7]==true)bgMove+=(0.13);
	else if(gameLevel==8 && bgLevel[8]==true)bgMove+=(0.13);
	else if(gameLevel==9 && bgLevel[9]==true)bgMove+=(0.15);
	else if(gameLevel==10 && bgLevel[10]==true)bgMove+=(0.13);
}