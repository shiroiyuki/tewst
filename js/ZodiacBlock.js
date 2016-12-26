function createZodiacBlocks(symbol){
	var randomAngle = Math.floor(Math.random()*360+1);
	var _damage=40;
	//angle=randomAngle*Math.PI/180;
	//Math.cos(angle);
	var zSpeed = 10;
	var zSpeedLimit = 5;
	var size = 80;
	if(difficulty==1){
		zSpeed = 8;
		zSpeedLimit = 3;
	}
	var zodiac1 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 0,
			ry: 0,
			rWidth: 614,
			rHeight: 603,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac1);
			randomAngle+=30;
			
		var zodiac2 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 1337,
			ry: 8,
			rWidth: 387,
			rHeight: 601,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac2);
			randomAngle+=30;

		var zodiac3 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 2296,
			ry: 28,
			rWidth: 482,
			rHeight: 561,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac3);
			randomAngle+=30;
		
		var zodiac4 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 3365,
			ry: 64,
			rWidth: 591,
			rHeight: 473,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac4);
			randomAngle+=30;

		var zodiac5 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 41,
			ry: 1100,
			rWidth: 508,
			rHeight: 674,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac5);
			randomAngle+=30;
			
		var zodiac6 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 1193,
			ry: 1136,
			rWidth: 508,
			rHeight: 640,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac6);
			randomAngle+=30;
			
		var zodiac7 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 2245,
			ry: 1168,
			rWidth: 598,
			rHeight: 489,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac7);
			randomAngle+=30;
			
		var zodiac8 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 3391,
			ry: 1134,
			rWidth: 609,
			rHeight: 639,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac8);
			randomAngle+=30;
			
		var zodiac9 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 39,
			ry: 2287,
			rWidth: 521,
			rHeight: 530,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac9);
			randomAngle+=30;
			
		var zodiac10 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 1121,
			ry: 2246,
			rWidth: 634,
			rHeight: 623,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac10);
			randomAngle+=30;
			
		var zodiac11 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 2216,
			ry: 2336,
			rWidth: 647,
			rHeight: 415,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac11);
			randomAngle+=30;
			
		var zodiac12 = {
			img:img_zodiac,
			width:size,
			height:size,
			posX: symbol.posX,
			posY: symbol.posY,
			rx: 3422,
			ry: 2250,
			rWidth: 483,
			rHeight: 580,
			angle: randomAngle,
			speedX: zSpeed*Math.cos(angleChange(randomAngle)),
			speedY: zSpeed*Math.sin(angleChange(randomAngle)),
			speedXLimit: zSpeedLimit*Math.cos(angleChange(randomAngle)),
			speedYLimit: zSpeedLimit*Math.sin(angleChange(randomAngle)),
			color:"rgba(200,200,0,1)",
			damage: _damage,
			check: true
		}	
			block1Array.push(zodiac12);
			randomAngle+=30;
}