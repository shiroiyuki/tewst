function createItem(){//製造道具

	var num = (Math.floor(Math.random()*200+1));
	var size = 60;
	if(num==1){
		var block1 = {
		img:img_green_life,
		width:size,
		height:size,
		posX: Math.floor(Math.random()*(canvas.width-50)),
		posY: -100,
		speedX: 0,
		speedY: 3,
		style: "L",
		color:"rgba(200,200,0,1)"
		}
		itemArray.push(block1);
	}
	
	num = (Math.floor(Math.random()*200+1));
	if(num==1){
		var block1 = {
		img:img_red_max,
		width:size,
		height:size,
		posX: Math.floor(Math.random()*(canvas.width-50)),
		posY: -100,
		speedX: 0,
		speedY: 3,
		style: "M",
		color:"rgba(200,200,0,1)"
		}
		//if(difficulty==3)lifeBlock.speedY=10;	
		itemArray.push(block1);
		test++;
		console.log(test);
	}
	
}		