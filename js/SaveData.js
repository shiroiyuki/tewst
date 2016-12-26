function saveData(){
	if(saveCheck==false){
		var e1=parseInt(localStorage.totalPlayingTime);
		e1+=timer;
		localStorage.totalPlayingTime=e1;

		e1=parseInt(localStorage.totalPlayingCount);
		e1+=1;
		localStorage.totalPlayingCount=e1;
		
		if(gameLevel=="Clear"){
			if(characterSelect==1){
				if(difficulty==1){
				e1=parseInt(localStorage.easyClearCount);
				e1+=1;
				localStorage.easyClearCount=e1;
				}
				if(difficulty==2){
				e1=parseInt(localStorage.normalClearCount);
				e1+=1;
				localStorage.normalClearCount=e1;
				}
				if(difficulty==3){
				e1=parseInt(localStorage.hardClearCount);
				e1+=1;
				localStorage.hardClearCount=e1;
				}
			}
			if(characterSelect==2){
				if(difficulty==1){
				e1=parseInt(localStorage.easyClearCount_2);
				e1+=1;
				localStorage.easyClearCount_2=e1;
				}
				if(difficulty==2){
				e1=parseInt(localStorage.normalClearCount_2);
				e1+=1;
				localStorage.normalClearCount_2=e1;
				}
				if(difficulty==3){
				e1=parseInt(localStorage.hardClearCount_2);
				e1+=1;
				localStorage.hardClearCount_2=e1;
				}
			}
		}
		
		if(characterSelect==1){
			if(difficulty==1){
				if((gameLevel>=localStorage.easyHighStage1&&localStorage.easyHighStage1!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss1)){//儲存最高得分
					//alert("a");
					if(gameLevel==localStorage.easyHighStage1){//關卡數相同
						if(enemyHit<=localStorage.easyLowMiss1){//MISS數較少
							localStorage.easyHighStage3=localStorage.easyHighStage2;
							localStorage.easyLowMiss3=localStorage.easyLowMiss2;
					
							localStorage.easyHighStage2=localStorage.easyHighStage1;
							localStorage.easyLowMiss2=localStorage.easyLowMiss1;
						
							localStorage.easyHighStage1=gameLevel;
							localStorage.easyLowMiss1=enemyHit;
						}else{//MISS數較多
							localStorage.easyHighStage3=localStorage.easyHighStage2;
							localStorage.easyLowMiss3=localStorage.easyLowMiss2;
					
							localStorage.easyHighStage2=gameLevel;
							localStorage.easyLowMiss2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.easyHighStage3=localStorage.easyHighStage2;
						localStorage.easyLowMiss3=localStorage.easyLowMiss2;
				
						localStorage.easyHighStage2=localStorage.easyHighStage1;
						localStorage.easyLowMiss2=localStorage.easyLowMiss1;
					
						localStorage.easyHighStage1=gameLevel;
						localStorage.easyLowMiss1=enemyHit;
					}				
				}
				else if((gameLevel>=localStorage.easyHighStage2&&localStorage.easyHighStage2!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss2)){
					//alert("b");
						if(gameLevel==localStorage.easyHighStage2){
							if(enemyHit<=localStorage.easyLowMiss2){
								localStorage.easyHighStage3=localStorage.easyHighStage2;
								localStorage.easyLowMiss3=localStorage.easyLowMiss2;
					
								localStorage.easyHighStage2=gameLevel;
								localStorage.easyLowMiss2=enemyHit;
							}else{
								localStorage.easyHighStage3=gameLevel;
								localStorage.easyLowMiss3=enemyHit;
							}
						}else{
							localStorage.easyHighStage3=localStorage.easyHighStage2;
							localStorage.easyLowMiss3=localStorage.easyLowMiss2;
				
							localStorage.easyHighStage2=gameLevel;
							localStorage.easyLowMiss2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.easyHighStage3&&localStorage.easyHighStage3!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss3)){
						//alert("c");
						if(gameLevel==localStorage.easyHighStage3){
							if(enemyHit<=localStorage.easyLowMiss3){
								localStorage.easyHighStage3=gameLevel;
								localStorage.easyLowMiss3=enemyHit;
							}
						}
						localStorage.easyHighStage3=gameLevel;
						localStorage.easyLowMiss3=enemyHit;
					}
				}				
			
			if(difficulty==2){
				if((gameLevel>=localStorage.normalHighStage1&&localStorage.normalHighStage1!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss1)){//儲存最高得分
				//alert("a");
					if(gameLevel==localStorage.normalHighStage1){//關卡數相同
						if(enemyHit<=localStorage.normalLowMiss1){//MISS數較少
							localStorage.normalHighStage3=localStorage.normalHighStage2;
							localStorage.normalLowMiss3=localStorage.normalLowMiss2;

							localStorage.normalHighStage2=localStorage.normalHighStage1;
							localStorage.normalLowMiss2=localStorage.normalLowMiss1;
						
							localStorage.normalHighStage1=gameLevel;
							localStorage.normalLowMiss1=enemyHit;
						}else{//MISS數較多
							localStorage.normalHighStage3=localStorage.normalHighStage2;
							localStorage.normalLowMiss3=localStorage.normalLowMiss2;
					
							localStorage.normalHighStage2=gameLevel;
							localStorage.normalLowMiss2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.normalHighStage3=localStorage.normalHighStage2;
						localStorage.normalLowMiss3=localStorage.normalLowMiss2;
				
						localStorage.normalHighStage2=localStorage.normalHighStage1;
						localStorage.normalLowMiss2=localStorage.normalLowMiss1;
					
						localStorage.normalHighStage1=gameLevel;
						localStorage.normalLowMiss1=enemyHit;
					}
				
				}
				else if((gameLevel>=localStorage.normalHighStage2&&localStorage.normalHighStage2!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss2)){
					//alert("b");
						if(gameLevel==localStorage.normalHighStage2){
							if(enemyHit<=localStorage.normalLowMiss2){
								localStorage.normalHighStage3=localStorage.normalHighStage2;
								localStorage.normalLowMiss3=localStorage.normalLowMiss2;
					
								localStorage.normalHighStage2=gameLevel;
								localStorage.normalLowMiss2=enemyHit;
							}else{
								localStorage.normalHighStage3=gameLevel;
								localStorage.normalLowMiss3=enemyHit;
							}
						}else{
							localStorage.normalHighStage3=localStorage.normalHighStage2;
							localStorage.normalLowMiss3=localStorage.normalLowMiss2;
				
							localStorage.normalHighStage2=gameLevel;
							localStorage.normalLowMiss2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.normalHighStage3&&localStorage.normalHighStage3!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss3)){
						//alert("c");
						if(gameLevel==localStorage.normalHighStage3){
							if(enemyHit<=localStorage.normalLowMiss3){
								localStorage.normalHighStage3=gameLevel;
								localStorage.normalLowMiss3=enemyHit;
							}
						}
						localStorage.normalHighStage3=gameLevel;
						localStorage.normalLowMiss3=enemyHit;
					}
				}
				
			if(difficulty==3){
				if((gameLevel>=localStorage.hardHighStage1&&localStorage.hardHighStage1!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss1)){//儲存最高得分
				//alert("a");
					if(gameLevel==localStorage.hardHighStage1){//關卡數相同
						if(enemyHit<=localStorage.hardLowMiss1){//MISS數較少
							localStorage.hardHighStage3=localStorage.hardHighStage2;
							localStorage.hardLowMiss3=localStorage.hardLowMiss2;
					
							localStorage.hardHighStage2=localStorage.hardHighStage1;
							localStorage.hardLowMiss2=localStorage.hardLowMiss1;
						
							localStorage.hardHighStage1=gameLevel;
							localStorage.hardLowMiss1=enemyHit;
						}else{//MISS數較多
							localStorage.hardHighStage3=localStorage.hardHighStage2;
							localStorage.hardLowMiss3=localStorage.hardLowMiss2;
					
							localStorage.hardHighStage2=gameLevel;
							localStorage.hardLowMiss2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.hardHighStage3=localStorage.hardHighStage2;
						localStorage.hardLowMiss3=localStorage.hardLowMiss2;
				
						localStorage.hardHighStage2=localStorage.hardHighStage1;
						localStorage.hardLowMiss2=localStorage.hardLowMiss1;
					
						localStorage.hardHighStage1=gameLevel;
						localStorage.hardLowMiss1=enemyHit;
					}
				
				}
				else if((gameLevel>=localStorage.hardHighStage2&&localStorage.hardHighStage2!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss2)){
					//alert("b");
						if(gameLevel==localStorage.hardHighStage2){
							if(enemyHit<=localStorage.hardLowMiss2){
								localStorage.hardHighStage3=localStorage.hardHighStage2;
								localStorage.hardLowMiss3=localStorage.hardLowMiss2;
					
								localStorage.hardHighStage2=gameLevel;
								localStorage.hardLowMiss2=enemyHit;
							}else{
								localStorage.hardHighStage3=gameLevel;
								localStorage.hardLowMiss3=enemyHit;
							}
						}else{
							localStorage.hardHighStage3=localStorage.hardHighStage2;
							localStorage.hardLowMiss3=localStorage.hardLowMiss2;
				
							localStorage.hardHighStage2=gameLevel;
							localStorage.hardLowMiss2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.hardHighStage3&&localStorage.hardHighStage3!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss3)){
						//alert("c");
						if(gameLevel==localStorage.hardHighStage3){
							if(enemyHit<=localStorage.hardLowMiss3){
								localStorage.hardHighStage3=gameLevel;
								localStorage.hardLowMiss3=enemyHit;
							}
						}
						localStorage.hardHighStage3=gameLevel;
						localStorage.hardLowMiss3=enemyHit;
					}
				}
		}
	
	if(characterSelect==2){
			if(difficulty==1){
				if((gameLevel>=localStorage.easyHighStage1_2&&localStorage.easyHighStage1_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss1_2)){//儲存最高得分
					//alert("a");
					if(gameLevel==localStorage.easyHighStage1_2){//關卡數相同
						if(enemyHit<=localStorage.easyLowMiss1_2){//MISS數較少
							localStorage.easyHighStage3_2=localStorage.easyHighStage2_2;
							localStorage.easyLowMiss3_2=localStorage.easyLowMiss2_2;
					
							localStorage.easyHighStage2_2=localStorage.easyHighStage1_2;
							localStorage.easyLowMiss2_2=localStorage.easyLowMiss1_2;
						
							localStorage.easyHighStage1_2=gameLevel;
							localStorage.easyLowMiss1_2=enemyHit;
						}else{//MISS數較多
							localStorage.easyHighStage3_2=localStorage.easyHighStage2_2;
							localStorage.easyLowMiss3_2=localStorage.easyLowMiss2_2;
					
							localStorage.easyHighStage2_2=gameLevel;
							localStorage.easyLowMiss2_2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.easyHighStage3_2=localStorage.easyHighStage2_2;
						localStorage.easyLowMiss3_2=localStorage.easyLowMiss2_2;
				
						localStorage.easyHighStage2_2=localStorage.easyHighStage1_2;
						localStorage.easyLowMiss2_2=localStorage.easyLowMiss1_2;
					
						localStorage.easyHighStage1_2=gameLevel;
						localStorage.easyLowMiss1_2=enemyHit;
					}				
				}
				else if((gameLevel>=localStorage.easyHighStage2_2&&localStorage.easyHighStage2_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss2_2)){
					//alert("b");
						if(gameLevel==localStorage.easyHighStage2_2){
							if(enemyHit<=localStorage.easyLowMiss2_2){
								localStorage.easyHighStage3_2=localStorage.easyHighStage2_2;
								localStorage.easyLowMiss3_2=localStorage.easyLowMiss2_2;
					
								localStorage.easyHighStage2_2=gameLevel;
								localStorage.easyLowMiss2_2=enemyHit;
							}else{
								localStorage.easyHighStage3_2=gameLevel;
								localStorage.easyLowMiss3_2=enemyHit;
							}
						}else{
							localStorage.easyHighStage3_2=localStorage.easyHighStage2_2;
							localStorage.easyLowMiss3_2=localStorage.easyLowMiss2_2;
				
							localStorage.easyHighStage2_2=gameLevel;
							localStorage.easyLowMiss2_2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.easyHighStage3_2&&localStorage.easyHighStage3_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.easyLowMiss3_2)){
						//alert("c");
						if(gameLevel==localStorage.easyHighStage3_2){
							if(enemyHit<=localStorage.easyLowMiss3_2){
								localStorage.easyHighStage3_2=gameLevel;
								localStorage.easyLowMiss3_2=enemyHit;
							}
						}
						localStorage.easyHighStage3_2=gameLevel;
						localStorage.easyLowMiss3_2=enemyHit;
					}
				}				
			
			if(difficulty==2){
				if((gameLevel>=localStorage.normalHighStage1_2&&localStorage.normalHighStage1_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss1_2)){//儲存最高得分
				//alert("a");
					if(gameLevel==localStorage.normalHighStage1_2){//關卡數相同
						if(enemyHit<=localStorage.normalLowMiss1_2){//MISS數較少
							localStorage.normalHighStage3_2=localStorage.normalHighStage2_2;
							localStorage.normalLowMiss3_2=localStorage.normalLowMiss2_2;

							localStorage.normalHighStage2_2=localStorage.normalHighStage1_2;
							localStorage.normalLowMiss2_2=localStorage.normalLowMiss1_2;
						
							localStorage.normalHighStage1_2=gameLevel;
							localStorage.normalLowMiss1_2=enemyHit;
						}else{//MISS數較多
							localStorage.normalHighStage3_2=localStorage.normalHighStage2_2;
							localStorage.normalLowMiss3_2=localStorage.normalLowMiss2_2;
					
							localStorage.normalHighStage2_2=gameLevel;
							localStorage.normalLowMiss2_2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.normalHighStage3_2=localStorage.normalHighStage2_2;
						localStorage.normalLowMiss3_2=localStorage.normalLowMiss2_2;
				
						localStorage.normalHighStage2_2=localStorage.normalHighStage1_2;
						localStorage.normalLowMiss2_2=localStorage.normalLowMiss1_2;
					
						localStorage.normalHighStage1_2=gameLevel;
						localStorage.normalLowMiss1_2=enemyHit;
					}
				
				}
				else if((gameLevel>=localStorage.normalHighStage2_2&&localStorage.normalHighStage2_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss2_2)){
					//alert("b");
						if(gameLevel==localStorage.normalHighStage2_2){
							if(enemyHit<=localStorage.normalLowMiss2_2){
								localStorage.normalHighStage3_2=localStorage.normalHighStage2_2;
								localStorage.normalLowMiss3_2=localStorage.normalLowMiss2_2;
					
								localStorage.normalHighStage2_2=gameLevel;
								localStorage.normalLowMiss2_2=enemyHit;
							}else{
								localStorage.normalHighStage3_2=gameLevel;
								localStorage.normalLowMiss3_2=enemyHit;
							}
						}else{
							localStorage.normalHighStage3_2=localStorage.normalHighStage2_2;
							localStorage.normalLowMiss3_2=localStorage.normalLowMiss2_2;
				
							localStorage.normalHighStage2_2=gameLevel;
							localStorage.normalLowMiss2_2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.normalHighStage3_2&&localStorage.normalHighStage3_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.normalLowMiss3_2)){
						//alert("c");
						if(gameLevel==localStorage.normalHighStage3_2){
							if(enemyHit<=localStorage.normalLowMiss3_2){
								localStorage.normalHighStage3_2=gameLevel;
								localStorage.normalLowMiss3_2=enemyHit;
							}
						}
						localStorage.normalHighStage3_2=gameLevel;
						localStorage.normalLowMiss3_2=enemyHit;
					}
				}
				
			if(difficulty==3){
				if((gameLevel>=localStorage.hardHighStage1_2&&localStorage.hardHighStage1_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss1_2)){//儲存最高得分
				//alert("a");
					if(gameLevel==localStorage.hardHighStage1_2){//關卡數相同
						if(enemyHit<=localStorage.hardLowMiss1_2){//MISS數較少
							localStorage.hardHighStage3_2=localStorage.hardHighStage2_2;
							localStorage.hardLowMiss3_2=localStorage.hardLowMiss2_2;
					
							localStorage.hardHighStage2_2=localStorage.hardHighStage1_2;
							localStorage.hardLowMiss2_2=localStorage.hardLowMiss1_2;
						
							localStorage.hardHighStage1_2=gameLevel;
							localStorage.hardLowMiss1_2=enemyHit;
						}else{//MISS數較多
							localStorage.hardHighStage3_2=localStorage.hardHighStage2_2;
							localStorage.hardLowMiss3_2=localStorage.hardLowMiss2_2;
					
							localStorage.hardHighStage2_2=gameLevel;
							localStorage.hardLowMiss2_2=enemyHit;
						}
					
					}else{//關卡數較多
						localStorage.hardHighStage3_2=localStorage.hardHighStage2_2;
						localStorage.hardLowMiss3_2=localStorage.hardLowMiss2_2;
				
						localStorage.hardHighStage2_2=localStorage.hardHighStage1_2;
						localStorage.hardLowMiss2_2=localStorage.hardLowMiss1_2;
					
						localStorage.hardHighStage1_2=gameLevel;
						localStorage.hardLowMiss1_2=enemyHit;
					}
				
				}
				else if((gameLevel>=localStorage.hardHighStage2_2&&localStorage.hardHighStage2_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss2_2)){
					//alert("b");
						if(gameLevel==localStorage.hardHighStage2_2){
							if(enemyHit<=localStorage.hardLowMiss2_2){
								localStorage.hardHighStage3_2=localStorage.hardHighStage2_2;
								localStorage.hardLowMiss3_2=localStorage.hardLowMiss2_2;
					
								localStorage.hardHighStage2_2=gameLevel;
								localStorage.hardLowMiss2_2=enemyHit;
							}else{
								localStorage.hardHighStage3_2=gameLevel;
								localStorage.hardLowMiss3_2=enemyHit;
							}
						}else{
							localStorage.hardHighStage3_2=localStorage.hardHighStage2_2;
							localStorage.hardLowMiss3_2=localStorage.hardLowMiss2_2;
				
							localStorage.hardHighStage2_2=gameLevel;
							localStorage.hardLowMiss2_2=enemyHit;
						}
				
					}
					else if((gameLevel>=localStorage.hardHighStage3_2&&localStorage.hardHighStage3_2!="Clear")||(gameEnd==true&&enemyHit<localStorage.hardLowMiss3_2)){
						//alert("c");
						if(gameLevel==localStorage.hardHighStage3_2){
							if(enemyHit<=localStorage.hardLowMiss3_2){
								localStorage.hardHighStage3_2=gameLevel;
								localStorage.hardLowMiss3_2=enemyHit;
							}
						}
						localStorage.hardHighStage3_2=gameLevel;
						localStorage.hardLowMiss3_2=enemyHit;
					}
				}
		}				
	saveCheck=true;
	}
}