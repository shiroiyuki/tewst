function blowUpArrray(obj){
			var bu = {
				img: img_sprites,
				posX: obj.posX,
				posY: obj.posY,
				width: obj.width,
				height: obj.height,
				rx:0,
				ry:117,
				rWidth: 39,
				rHeight: 39,
				frame: 0
			}
			blowUp.push(bu);
		}
		
		function blowUpAnimation(){
			for(var j=0; j<blowUp.length; j++){					
					var t = blowUp[j];
					if(gamePause==false)blowUp[j].frame++;
					//alert("gg");
					if(blowUp[j].frame>13){
						delete blowUp[j];
						check();
						break;
						}
				}
		}
		
		function drawBlowUp(){
			for(var j=0; j<blowUp.length; j++){
				var radius;
				if(blowUp[j].width>blowUp[j].height)radius=blowUp[j].width;
				else radius=blowUp[j].height;
				
				ctx.drawImage(blowUp[j].img, blowUp[j].rx+(blowUp[j].frame*blowUp[j].rWidth), blowUp[j].ry, blowUp[j].rWidth, blowUp[j].rHeight, blowUp[j].posX-(radius/8), blowUp[j].posY-(radius/8), radius+(radius/4), radius+(radius/4));
			}		
		}