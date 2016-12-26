function collision(){//撞擊判定
	for(var i=0; i<player_bullet.length; i++){//子彈撞擊判定
		var b = player_bullet[i];
		if(b.posY1<=0||b.posX<=0||b.posX>=canvas.width){
		delete player_bullet[i];
		check();
		break;
		}
		for(var j=0; j<block1Array.length; j++){
			
			var t = block1Array[j];
			if(b.posY1<=(t.posY+t.height) 
			&& (b.posY1+b.height)>=t.posY
			&& b.posX<=t.posX+t.width
			&& (b.posX+b.width)>=(t.posX)){
				seHit();
				score+=100;				
				blowUpArrray(block1Array[j]);						
				delete player_bullet[i];
				delete block1Array[j];
				check();
				//enemyHit++;
				break;
				}
			}							
		}			
	
		for(var j=0; j<block1Array.length; j++){//障礙物和玩家的判定
			
			var t = block1Array[j];
			if(player.posY<=(t.posY+t.height) 
			&& (player.posY+player.height)>=t.posY
			&& player.posX<=(t.posX+t.width)
			&& (player.posX+player.width)>=t.posX){
				seBoom();
				enemyHit++;
				
				if(difficulty==1)player.life-=Math.floor(t.damage*player.damage*0.9);
				if(difficulty==2)player.life-=Math.floor(t.damage*player.damage);
				if(difficulty==3)player.life-=Math.floor(t.damage*player.damage*1.1);
				
				/*var _x=(t.posX+t.width)-(player.posX+player.width);
				var _y=(t.posY+t.height)-(player.posY+player.height);
				
				player.posX-=_x*0.3;
				player.posY-=_y*0.3;*/
				
				blowUpArrray(block1Array[j]);
				delete block1Array[j];
				check();
				break;
				}
		}
		
		//生命條和玩家的判定
			
		if(player.posY<=(canvas.height-37+20) 
		&& (player.posY+player.height*2)>=canvas.height-37
		&& player.posX<=(8+player.maxLife*0.7)
		&& (player.posX+player.width)>=8){
			lifeTransparent=true;	
		}else{
			lifeTransparent=false;
		}
		
		if(player.posY<=(canvas.height-65+20) //技能條
		&& (player.posY+player.height*2)>=canvas.height-65
		&& player.posX<=(8+75)
		&& (player.posX+player.width)>=8){
			skillTransparent=true;	
		}else{
			skillTransparent=false;
		}
		
		if(player.posY<=(canvas.height-150+75) //頭像
		&& (player.posY+player.height*2)>=canvas.height-150
		&& player.posX<=(8+75)
		&& (player.posX+player.width)>=8){
			pilotTransparent=true;	
		}else{
			pilotTransparent=false;
		}
		
		//ctx.strokeRect(8, canvas.height-150, 75, 75);
		for(var j=0; j<itemArray.length; j++){//道具和玩家的判定
			
			var t = itemArray[j];
			if(player.posY<=(t.posY+t.height) 
			&& (player.posY+player.height*2)>=t.posY
			&& player.posX<=(t.posX+t.width)
			&& (player.posX+player.width)>=t.posX){
				if(t.style=="L"){
					seHeal();
					if(difficulty==1)player.life+=Math.floor(0.11*player.maxLife);
					if(difficulty==2)player.life+=Math.floor(0.1*player.maxLife);
					if(difficulty==3)player.life+=Math.floor(0.09*player.maxLife);
					if(player.life>player.maxLife)player.life=player.maxLife;
					//alert(player.maxLife);
				}
				if(t.style=="M"){
					seHeal();
					if(difficulty==1){
						player.maxLife+=7;
						player.life+=7;
					}
					if(difficulty==2){
						player.maxLife+=6;
						player.life+=6;
						//alert(player.maxLife);
					}
					if(difficulty==3){
						player.maxLife+=5;
						player.life+=5;
					}
				}
				delete itemArray[j];
				check();
				break;
				}
		}
		
		for(var j=0; j<block1Array.length; j++){//磚塊碰撞地板					
			var t = block1Array[j];
			if(canvas.height+100<=(t.posY)||-400>=(t.posY) || t.posX>=canvas.width+400||t.posX<=-400){
				delete block1Array[j];
				check();
				break;
				}
			
		}
		for(var j=0; j<titleBlock.length; j++){
			var t = titleBlock[j];
			if(canvas.height+100<=(t.posY)||-400>=(t.posY) || t.posX>=canvas.width+400||t.posX<=-400){
				delete titleBlock[j];
				check();
				break;
			}
		}

		if(bgLevel[8]==true && gameLevel == 8){//子彈分裂
			for(var j=0; j<block1Array.length; j++){					
				var t = block1Array[j];
				if(100<=(t.posY) && t.check==false){
					createZodiacBlocks(block1Array[j]);
					delete block1Array[j];
					check();
					break;
					}
				if(Math.abs(t.speedX)>Math.abs(t.speedXLimit) && t.check==true){
					t.speedX-=0.3*Math.cos(angleChange(t.angle));
					t.speedY-=0.3*Math.sin(angleChange(t.angle));
				}
			}
		}
		
		if(bgLevel[9]==true && gameLevel == 9){//子彈反彈
			for(var j=0; j<block1Array.length; j++){					
				var t = block1Array[j];
				if(0>(t.posX) || canvas.width<(t.posX+t.width)){
					t.speedX*=(-1);
					}
			}
		}
	}