function createblock(){//產生標靶

	if(bgLevel[1]==true && gameLevel == 1){
		var _damage=5;
		var num = (Math.floor(Math.random()*4+1));
		var size = 120;
		if(num==1){
			var block1 = {
			img:img_bird,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-50)),
			posY: -50,
			speedX: 0.5,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}
			if(difficulty==3)block1.speedY=10;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_bird,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-50)),
			posY: -160,
			speedX: 0.2,
			speedY: 8,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==3)block2.speedY=10;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_bird2,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-50)),
			posY: -50,
			speedX: -0.5,
			speedY: 8,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}
			if(difficulty==3)block3.speedY=10;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_bird2,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-50)),
			posY: -50,
			speedX: -0.2,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}
			if(difficulty==3)block3.speedY=10;
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[2]==true && gameLevel == 2){
		var _damage=10;
		var num = (Math.floor(Math.random()*0+1));
		if(num==1){
			var block1 = {
			img:img_thunder,
			width:60,
			height:160,
			posX: Math.floor(Math.random()*(canvas.width-30)),
			posY: -160,
			speedX: 0,
			speedY: 8+(Math.floor(Math.random()*4)),
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			block1Array.push(block1);
		}
		
	}
	
	if(bgLevel[3]==true && gameLevel == 3){
		var _damage=15;
		var num = (Math.floor(Math.random()*4+1));
		var size = 20;
		if(num==1){
			var block1 = {
			img:img_tornado,
			width:size * 5,
			height:size * 10,
			posX: Math.floor(Math.random()*(canvas.width-20)),
			posY: -200,
			speedX: 0.2*(Math.floor(Math.random()*3-1)),
			speedY: 7,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_tornado,
			width:size * 2,
			height:size * 4,
			posX: Math.floor(Math.random()*(canvas.width-40)),
			posY: -80,
			speedX: 0.2*(Math.floor(Math.random()*3-1)),
			speedY: 9,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=2;
			if(difficulty==3)block2.speedY+=2;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_tornado,
			width:size * 3,
			height:size * 6,
			posX: Math.floor(Math.random()*(canvas.width-60)),
			posY: -60,
			speedX: 0.2*(Math.floor(Math.random()*3-1)),
			speedY: 8,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_tornado,
			width:size * 4,
			height:size * 8,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -80,
			speedX: 0.2*(Math.floor(Math.random()*3-1)),
			speedY: 7,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[4]==true && gameLevel == 4){
		var _damage=20;
		var size = 20;
		var num = (Math.floor(Math.random()*4+1));
		if(num==1){
			var block1 = {
			img:img_shootingStar,
			width:size * 2,
			height:size * 2,
			posX: Math.floor(Math.random()*(canvas.width+50)),
			posY: -100,
			speedX: -1,
			speedY: 7,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			if(difficulty==1)block1.speedX=-0.6;
			if(difficulty==3)block1.speedX=-1.3;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_shootingStar,
			width:size * 3,
			height:size * 3,
			posX: Math.floor(Math.random()*(canvas.width+40)),
			posY: -100,
			speedX: -1,
			speedY: 9,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=2;
			if(difficulty==3)block2.speedY+=2;
			if(difficulty==1)block2.speedX=-0.6;
			if(difficulty==3)block2.speedX=-1.3;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_shootingStar,
			width:size * 5,
			height:size * 5,
			posX: Math.floor(Math.random()*(canvas.width+60)),
			posY: -100,
			speedX: -1,
			speedY: 8,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=-0.6;
			if(difficulty==3)block3.speedX=-1.3;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_shootingStar,
			width:size * 4,
			height:size * 4,
			posX: Math.floor(Math.random()*(canvas.width+80)),
			posY: -100,
			speedX: -1,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=-0.6;
			if(difficulty==3)block3.speedX=-1.3;
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[5]==true && gameLevel == 5){
		var _damage=25;
		var num = (Math.floor(Math.random()*6+1));
		var size = 20;
		if(num==1){
			var block1 = {
			img:img_asteroids,
			width:size * 15,
			height:size * 14,
			posX: Math.floor(Math.random()*(canvas.width-150)),
			posY: -300,
			rx: 0,
			ry: 0,
			rWidth: 150,
			rHeight: 141,
			speedX: 0,
			speedY: 5,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_asteroids,
			width:size * 10,
			height:size * 10,
			posX: Math.floor(Math.random()*(canvas.width-100)),
			posY: -300,
			rx: 0,
			ry: 177,
			rWidth: 150,
			rHeight: 157,
			speedX: 0,
			speedY: 6,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=2;
			if(difficulty==3)block2.speedY+=2;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_asteroids,
			width:size * 8,
			height:size * 8,
			posX: Math.floor(Math.random()*(canvas.width-60)),
			posY: -300,
			rx: 0,
			ry: 370,
			rWidth: 150,
			rHeight: 141,
			speedX: 0,
			speedY: 7,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_asteroids,
			width:size * 5,
			height:size * 5,
			rx: 347,
			ry: 8,
			rWidth: 51,
			rHeight: 57,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -300,
			speedX: 0,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		
		if(num==5){
			var block3 = {
			img:img_asteroids,
			width:size * 5.5,
			height:size * 5.5,
			rx: 334,
			ry: 97,
			rWidth: 64,
			rHeight: 53,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -200,
			speedX: 0,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		
		if(num==6){
			var block3 = {
			img:img_asteroids,
			width:size * 6,
			height:size * 6,
			rx: 338,
			ry: 177,
			rWidth: 64,
			rHeight: 58,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -200,
			speedX: 0,
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[6]==true && gameLevel == 6){
		var _damage=30;
		var num = (Math.floor(Math.random()*6+1));
		var size = 20;
		if(num==1){
			var block1 = {
			img:img_asteroids,
			width:size * 15,
			height:size * 14,
			posX: Math.floor(Math.random()*(canvas.width-150)),
			posY: -300,
			rx: 167,
			ry: 0,
			rWidth: 149,
			rHeight: 140,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 5,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_asteroids,
			width:size * 10,
			height:size * 10,
			posX: Math.floor(Math.random()*(canvas.width-100)),
			posY: -200,
			rx: 163,
			ry: 177,
			rWidth: 150,
			rHeight: 157,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 6,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=2;
			if(difficulty==3)block2.speedY+=2;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_asteroids,
			width:size * 8,
			height:size * 8,
			posX: Math.floor(Math.random()*(canvas.width-60)),
			posY: -200,
			rx: 171,
			ry: 370,
			rWidth: 150,
			rHeight: 141,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 7,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_asteroids,
			width:size * 5,
			height:size * 5,
			rx: 415,
			ry: 8,
			rWidth: 51,
			rHeight: 57,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -200,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		
		if(num==5){
			var block3 = {
			img:img_asteroids,
			width:size * 5.5,
			height:size * 5.5,
			rx: 407,
			ry: 97,
			rWidth: 64,
			rHeight: 53,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -200,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		
		if(num==6){
			var block3 = {
			img:img_asteroids,
			width:size * 6,
			height:size * 6,
			rx: 412,
			ry: 177,
			rWidth: 64,
			rHeight: 58,
			posX: Math.floor(Math.random()*(canvas.width-80)),
			posY: -200,
			speedX: 0.1*(Math.floor(Math.random()*11-5)),
			speedY: 8,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[7]==true && gameLevel == 7){
		var _damage=35;
		var num = (Math.floor(Math.random()*6+1));
		var size = 20;
		if(num==1){
			var block1 = {
			img:img_asteroids2,
			width:size * 5,
			height:size * 5,
			posX: Math.floor(Math.random()*(canvas.width+150)),
			posY: -150,
			rx: 167,
			ry: 0,
			rWidth: 149,
			rHeight: 140,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=2;
			if(difficulty==3)block1.speedY+=2;
			if(difficulty==1)block1.speedX=(-0.6);
			if(difficulty==3)block1.speedX=(-1.3);
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_asteroids2,
			width:size * 4,
			height:size * 4,
			posX: Math.floor(Math.random()*(canvas.width+100)),
			posY: -100,
			rx: 163,
			ry: 177,
			rWidth: 150,
			rHeight: 157,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=2;
			if(difficulty==3)block2.speedY+=2;
			if(difficulty==1)block2.speedX=(-0.6);
			if(difficulty==3)block2.speedX=(-1.3);
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_asteroids2,
			width:size * 7,
			height:size * 7,
			posX: Math.floor(Math.random()*(canvas.width+60)),
			posY: -200,
			rx: 171,
			ry: 370,
			rWidth: 150,
			rHeight: 141,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=(-0.6);
			if(difficulty==3)block3.speedX=(-1.3);
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_asteroids2,
			width:size * 6.5,
			height:size * 6.5,
			rx: 415,
			ry: 8,
			rWidth: 51,
			rHeight: 57,
			posX: Math.floor(Math.random()*(canvas.width+80)),
			posY: -200,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=(-0.6);
			if(difficulty==3)block3.speedX=(-1.3);
			block1Array.push(block3);
		}
		
		if(num==5){
			var block3 = {
			img:img_asteroids2,
			width:size * 5.5,
			height:size * 5.5,
			rx: 407,
			ry: 97,
			rWidth: 64,
			rHeight: 53,
			posX: Math.floor(Math.random()*(canvas.width+80)),
			posY: -200,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=(-0.6);
			if(difficulty==3)block3.speedX=(-1.3);
			block1Array.push(block3);
		}
		
		if(num==6){
			var block3 = {
			img:img_asteroids2,
			width:size * 6,
			height:size * 6,
			rx: 412,
			ry: 177,
			rWidth: 64,
			rHeight: 58,
			posX: Math.floor(Math.random()*(canvas.width+80)),
			posY: -200,
			speedX: -1,
			speedY: 5,
			damage: _damage,
			color:"rgba(200,0,100,1)"
			}	
			if(difficulty==1)block3.speedY-=2;
			if(difficulty==3)block3.speedY+=2;
			if(difficulty==1)block3.speedX=(-0.6);
			if(difficulty==3)block3.speedX=(-1.3);
			block1Array.push(block3);
		}
	}

	if(bgLevel[8]==true && gameLevel == 8){
		var _damage=40;
		var num = (Math.floor(Math.random()*4+1));
		var size = 100;
		if(num==1){
			var block1 = {
			img:img_ASB,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -150,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: 0,
			speedY: 5,
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_ASR,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -100,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: 0,
			speedY: 5,
			color:"rgba(0,200,200,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_ASY,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -100,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: 0,
			speedY: 5,
			color:"rgba(100,200,100,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_ASG,
			width:size,
			height:size,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -100,
			speedX: 0,
			speedY: 5,
			color:"rgba(200,0,100,1)",
			damage: _damage,
			check: false
			}	
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[9]==true && gameLevel == 9){
		var _damage=45;
		var num = (Math.floor(Math.random()*4+1));
		var speed = 5;
		if(difficulty==1)speed-=2;
		if(difficulty==3)speed+=1;
		var size = 100;

		var angle9 = 45;
		if(num==1){
			var block1 = {
			img:img_ASB,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -150,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: speed*Math.cos(angleChange(angle9)),
			speedY: speed*Math.sin(angleChange(angle9)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_ASR,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -100,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: speed*Math.cos(angleChange(angle9)),
			speedY: speed*Math.sin(angleChange(angle9)),
			color:"rgba(0,200,200,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			img:img_ASY,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -80,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: speed*Math.cos(angleChange(angle9))*(-1),
			speedY: speed*Math.sin(angleChange(angle9)),
			color:"rgba(100,200,100,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			img:img_ASG,
			width:size,
			height:size,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -50,
			speedX: speed*Math.cos(angleChange(angle9))*(-1),
			speedY: speed*Math.sin(angleChange(angle9)),
			color:"rgba(200,0,100,1)",
			damage: _damage,
			check: false
			}	
			block1Array.push(block3);
		}
	}
	
	if(bgLevel[10]==true && gameLevel == 10){
		var _damage=48;
		var num = (Math.floor(Math.random()*2+1));
		var speed = 2;
		var angle10 = 80;
		var size = 40;
		if(num==1){
			var block1 = {
			img:img_blueStar,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-10)),
			posY: -20,
			rx: 0,
			ry: 0,
			rWidth: 500,
			rHeight: 41,
			speedX: speed*Math.cos(angleChange(angle10)),
			speedY: speed*Math.sin(angleChange(angle10)),
			angle: 0,
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			img:img_blueStar,
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-10)),
			posY: -20,
			rx: 15,
			ry: 29,
			rWidth: 41,
			rHeight: 41,
			speedX: speed*Math.cos(angleChange(angle10))*(-1),
			speedY: speed*Math.sin(angleChange(angle10)),
			angle: 0,
			color:"rgba(0,200,200,1)",
			damage: _damage,
			check: false
		}	
			block1Array.push(block2);
		}			
	}
	
	if(bgLevel[11]==true && gameLevel == 11){
		var _damage=51;
		var num = (Math.floor(Math.random()*4+1));
		var size = 100;
		if(num==1){
			var block1 = {
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -50,
			speedX: 0,
			speedY: 12,
			damage: _damage,
			color:"rgba(200,200,0,1)"
		}	
			if(difficulty==1)block1.speedY-=4;
			if(difficulty==3)block1.speedY+=2;
			block1Array.push(block1);
		}
		if(num==2){
			var block2 = {
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -50,
			speedX: 0,
			speedY: 12,
			damage: _damage,
			color:"rgba(0,200,200,1)"
		}	
			if(difficulty==1)block2.speedY-=4;
			if(difficulty==3)block2.speedY+=2;
			block1Array.push(block2);
		}
		if(num==3){
			var block3 = {
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -50,
			speedX: 0,
			speedY: 12,
			damage: _damage,
			color:"rgba(100,200,100,1)"
		}	
			if(difficulty==1)block3.speedY-=4;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
		if(num==4){
			var block3 = {
			width:size,
			height:size,
			posX: Math.floor(Math.random()*(canvas.width-size)),
			posY: -50,
			speedX: 0,
			speedY: 12,
			damage: _damage,
			color:"rgba(200,0,100,1)"
		}	
			if(difficulty==1)block3.speedY-=4;
			if(difficulty==3)block3.speedY+=2;
			block1Array.push(block3);
		}
	}			
	check();		
}