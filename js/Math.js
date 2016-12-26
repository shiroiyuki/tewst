function angleChange(a){
	a=a*Math.PI/180
	return a;
}



function rotation(_img){
	ctx.save();
	ctx.translate(_img.posX ,_img.posY);
	ctx.translate(_img.width/2,_img.height/2);
	ctx.rotate( angleChange(_img.angle % 360) );
	ctx.translate(-_img.width/2,-_img.height/2);
	ctx.drawImage(_img.img, -(_img.width/8), -(_img.height/8), _img.width+(_img.width/4), _img.height+(_img.height/4));
	ctx.restore();
}	