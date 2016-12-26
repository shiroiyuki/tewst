function check(){//陣列檢查 去除空欄位
	var new_block1Array=[];
	
			for(var i=0;i<block1Array.length;i++){
				if(block1Array[i]){
					new_block1Array.push(block1Array[i]);
				}
			}
			block1Array=new_block1Array;

			var new_player_bullet=[];
		
			for(var i=0;i<player_bullet.length;i++){
				if(player_bullet[i]){
					new_player_bullet.push(player_bullet[i]);
				}
			}
			player_bullet=new_player_bullet;
			
			var new_blowUp=[];
		
			for(var i=0;i<blowUp.length;i++){
				if(blowUp[i]){
					new_blowUp.push(blowUp[i]);
				}
			}
			blowUp=new_blowUp;
			
			var new_item=[];
		
			for(var i=0;i<itemArray.length;i++){
				if(itemArray[i]){
					new_item.push(itemArray[i]);
				}
			}
			itemArray=new_item;
			
			var new_titleBlock=[];
		
			for(var i=0;i<titleBlock.length;i++){
				if(titleBlock[i]){
					new_titleBlock.push(titleBlock[i]);
				}
			}
			titleBlock=new_titleBlock;
}

function levelCheck(){
	if(timer==(0)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=1000;
		if(difficulty==2)enemyRate=800;
		if(difficulty==3)enemyRate=600;
		gameLoop = setInterval(createblock, enemyRate);
	}
	if(timer==(60)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=600;
		if(difficulty==2)enemyRate=400;
		if(difficulty==3)enemyRate=300;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=2;
	}
	if(timer==(120)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=600;
		if(difficulty==2)enemyRate=400;
		if(difficulty==3)enemyRate=300;
		//enemyRate=400;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=3;
	}
	if(timer==(180)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=550;
		if(difficulty==2)enemyRate=350;
		if(difficulty==3)enemyRate=300;
		//enemyRate=350;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=4;
	}
	if(timer==(240)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=800;
		if(difficulty==2)enemyRate=600;
		if(difficulty==3)enemyRate=500;
		//enemyRate=600;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=5;
	}
	if(timer==(300)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=800;
		if(difficulty==2)enemyRate=600;
		if(difficulty==3)enemyRate=500;
		//enemyRate=600;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=6;
	}
	if(timer==(360)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=500;
		if(difficulty==2)enemyRate=330;
		if(difficulty==3)enemyRate=300;
		//enemyRate=330;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=7;
	}
	if(timer==(420)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=800;
		if(difficulty==2)enemyRate=600;
		if(difficulty==3)enemyRate=500;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=8;
	}
	if(timer==(480)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=1400;
		if(difficulty==2)enemyRate=600;
		if(difficulty==3)enemyRate=450;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=9;
	}
	if(timer==(540)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=400;
		if(difficulty==2)enemyRate=250;
		if(difficulty==3)enemyRate=200;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=10;
	}
	if(timer==(600)){
		clearInterval(gameLoop);
		if(difficulty==1)enemyRate=800;
		if(difficulty==2)enemyRate=500;
		if(difficulty==3)enemyRate=400;
		gameLoop = setInterval(createblock, enemyRate);
		gameLevel=11;
	}
	if(timer==(660)){
		gameLevel="Clear";
		clearInterval(gameLoop);
		clearInterval(setItem);
		gameEnd = true;
		saveData();
	}
}

function gamePauseCheck(){
	if(gamePause==false){
		sePause();
		gamePause=true;
		musicPause=audioElement.currentTime;
		audioElement.pause();
		audioElement.currentTime=0;
		clearInterval(gameLoop);
		clearInterval(counter);
		clearInterval(setBGMove);
		clearInterval(setFlyHeight);
		clearInterval(setItem);
		//cancelAnimationFrame(animate);
	}else{
		seOK();
		audioElement.currentTime=musicPause;
		audioElement.play();
		gamePause=false;
		if(timer%60!=0){
			gameLoop = setInterval(createblock, enemyRate);
		}
		
		counter = setInterval(timeCount, 1000);
		setBGMove = setInterval(BGMoving, 20);
		setFlyHeight= setInterval(flyHeightCounter, 1);
		setItem=setInterval(createItem, 100);
		//animate=requestAnimationFrame(draw);
		//LC = setInterval(lifeCount, 500);
	}
}

function skillCheck(){
	if(characterSelect==1){
		if(player.life/player.maxLife>0.5){
			player.skill=0;
			recoverTime=3;
		}
		if(player.life/player.maxLife<=0.5&&player.life/player.maxLife>0.2){
			player.skill=1;
			player.damage=player.oldDamage-0.1;
			recoverTime=3;
		}
		if(player.life/player.maxLife<=0.2){
			player.skill=2;
			player.damage=player.oldDamage-0.3;
			recoverTime=2;
		}
	}
	
	if(characterSelect==2){
		if(player.life<=0&&player.skill==0){
			player.skill=1;
			player.life=1;
		}
		if(player.life/player.maxLife>=0.5){
			player.skill=0;
		}
	}
}

function lifeCount(){//判定體力是否歸零
	if(player.life<=0 && player.life != -999){
		seDamage();
		player.life=0;
		drawLife();
		player.width=100;
		player.posX-=50;
		blowUpArrray(player);
		var heightTemp = flyHeight;
		var lengthUnit = " m";
		if(gameLevel>=5){
			heightTemp/=1000;
			lengthUnit = " km";
		}
		if(gameLevel>=9){
			heightTemp = flyHeight/(9.46*Math.pow(10,12));
			lengthUnit = /*"ly"*/" 光年";
		}
		//alert("Game Over!");
		//alert("Final Height: "+Math.floor(heightTemp)+lengthUnit);
		finalHeight=Math.floor(heightTemp)+lengthUnit;
		
		saveData();
		
		//這一行停止動畫
				
		/*audioElement.pause();
		audioElement.currentTime=0;*/
		clearInterval(gameLoop);
		clearInterval(counter);
		clearInterval(setBGMove);
		clearInterval(setItem);
		clearInterval(LC);
		window.removeEventListener('keydown',keyDownHandler,false);
		
		//animate=requestAnimationFrame(draw);
		setTimeout("window.cancelAnimationFrame(animate)",1000);
		setTimeout("gameStart=false",1000);
		setTimeout("gameOverPage=true",1000);
		setTimeout("player.life=-999",1000);
		//window.cancelAnimationFrame(animate);
		//gameStart=false;
		//gameOverPage=true;
		//menuPage=true;
		//life=-999;
		//drawMenu();				
	}
}

function flyHeightCounter(){
	if(gameLevel==1)flyHeight+=(0.2);
	else if(gameLevel==2 && bgLevel[2]==true)flyHeight+=(0.6);
	else if(gameLevel==3 && bgLevel[3]==true)flyHeight+=(1.8);
	else if(gameLevel==4 && bgLevel[4]==true)flyHeight+=(5.4);
	else if(gameLevel==5 && bgLevel[5]==true)flyHeight+=(299792458*0.00009)+1;
	else if(gameLevel==6 && bgLevel[6]==true)flyHeight+=(299792458*0.02+1);
	else if(gameLevel==7 && bgLevel[7]==true)flyHeight+=(299792458*0.4+1);
	else if(gameLevel==8 && bgLevel[8]==true)flyHeight+=(9.46*Math.pow(10,12)*4.37*4/60000);
	else if(gameLevel==9 && bgLevel[9]==true)flyHeight+=(9.46*Math.pow(10,12)*9999*4.3/60000);
	else if(gameLevel==10 && bgLevel[10]==true)flyHeight+=(9.46*Math.pow(10,12)*99999*4.2/60000);
	else if(gameLevel==11 && bgLevel[11]==true)flyHeight+=(9.46*Math.pow(10,12)*99999*4.2);
}
	


function timeCount(){//計時器
	if(timer>=0)timer++;
	if(player.life < player.maxLife && player.life > 0 && timer%recoverTime==0)player.life++;
}