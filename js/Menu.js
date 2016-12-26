function drawMenu(){//繪製選單
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.drawImage(img_SunAndEarth,960,0,540,1080,0,0,canvas.width,canvas.height);
			
			titleAnimation=true;
			
			if(titleAnimation==true){
				for(var i=0;i<titleBlock.length;i++){
					var blocks = titleBlock[i];
					if(gamePause==false){
						blocks.posX+= blocks.speedX;
						blocks.posY+= blocks.speedY;
					}
					if(gamePause==false)blocks.angle+=1;
					ctx.globalAlpha=0.7;
					rotation(blocks);
					ctx.globalAlpha=1;
				}				
			}
			
			if(titlePage==true){
				var e1=parseInt(localStorage.BGMVolume);
				audioElement.pause();
				audioElement.currentTime=0;	
				audioElement2.volume=e1/100;	
				audioElement2.play();
			
				ctx.globalAlpha=0.8;
				ctx.font = "112px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(20, 38, 760, 140);
				ctx.fillStyle = "#003377";
				ctx.fillRect(20, 38, 760, 140);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Rocket Dream",80, 150);
				
				ctx.globalAlpha=0.8;
				ctx.font = "72px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(100, 610, 600, 84);
				ctx.fillStyle = "#003377";
				ctx.fillRect(100, 610, 600, 84);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Touch The Screen",140, 680);
			}
			
			if(menuPage==true){
				/*ctx.font = "24px Arial";
				ctx.fillStyle = "#0095DD";
				ctx.fillText("Rocket Game",canvas.width/2-65, canvas.height/2-20);
				ctx.font = "16px Arial";
				ctx.fillText("Press space to start",canvas.width/2-60, canvas.height/2+30);
			*/
				audioElement.pause();
				audioElement.currentTime=0;				
				audioElement2.play();
				
				ctx.globalAlpha=0.8;
				ctx.font = "112px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(10, 38, 760, 140);
				ctx.fillStyle = "#003377";
				ctx.fillRect(10, 38, 760, 140);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Rocket Dream",40, 160);
				
				ctx.globalAlpha=0.5;
				if(menuSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonStart.img, ButtonStart.x, ButtonStart.y,ButtonStart.dx,ButtonStart.dy);
				//ctx.globalAlpha=0.5;
			
				if(menuSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonPlayerData.img, ButtonPlayerData.x, ButtonPlayerData.y,ButtonPlayerData.dx,ButtonPlayerData.dy);
				//ctx.globalAlpha=0.5;
			
				if(menuSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonManual.img, ButtonManual.x, ButtonManual.y,ButtonManual.dx,ButtonManual.dy);
				//ctx.globalAlpha=0.5;
			
				if(menuSelect==4)ctx.globalAlpha=1;
				ctx.drawImage(ButtonConfig.img, ButtonConfig.x, ButtonConfig.y,ButtonConfig.dx,ButtonConfig.dy);
				//ctx.globalAlpha=0.5;
				
				if(menuSelect==5)ctx.globalAlpha=1;
				ctx.drawImage(ButtonExit.img, ButtonExit.x, ButtonExit.y,ButtonExit.dx,ButtonExit.dy);
				//ctx.globalAlpha=1;
			}
			
			if(difficultyPage==true){
				ctx.globalAlpha=0.8;
				ctx.font = "112px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(10, 38, 760, 140);
				ctx.fillStyle = "#003377";
				ctx.fillRect(10, 38, 760, 140);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Difficulty",40, 160);
				
				//ctx.globalAlpha=0.5;
				if(difficultySelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonHard.img, ButtonHard.x, ButtonHard.y,ButtonHard.dx,ButtonHard.dy);
				//ctx.globalAlpha=0.5;
			
				if(difficultySelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonNormal.img, ButtonNormal.x, ButtonNormal.y,ButtonNormal.dx,ButtonNormal.dy);
				//ctx.globalAlpha=0.5;
			
				if(difficultySelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonEasy.img, ButtonEasy.x, ButtonEasy.y,ButtonEasy.dx,ButtonEasy.dy);
				//ctx.globalAlpha=0.5;
			
				if(difficultySelect==4)ctx.globalAlpha=1;
				ctx.drawImage(ButtonDifficultyBack.img, ButtonDifficultyBack.x, ButtonDifficultyBack.y,ButtonDifficultyBack.dx,ButtonEasy.dy);
				ctx.globalAlpha=1;
			}
			
			if(characterPage==true){
				ctx.globalAlpha=0.8;
				ctx.font = "112px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(10, 38, 760, 140);
				ctx.fillStyle = "#003377";
				ctx.fillRect(10, 38, 760, 140);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Character",40, 160);
				
				ctx.globalAlpha=0.8;
				ctx.font = "40px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(20, 200, canvas.width-40, 540);
				//ctx.fillStyle = "#444444";
				ctx.fillStyle = "#003377";
				ctx.fillRect(20, 200, canvas.width-40, 540);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;								
				
				if(characterSelect==1){
					ctx.globalAlpha=0.8;
					if(difficulty==1&&localStorage.easyClearCount!="0")ctx.drawImage(img_Cian_smile, 0,0,242,324, canvas.width/2+20,200,416,540);
					else if(difficulty==2&&localStorage.normalClearCount!="0")ctx.drawImage(img_Cian_smile, 0,0,242,324, canvas.width/2+20,200,416,540);
					else if(difficulty==3&&localStorage.hardClearCount!="0")ctx.drawImage(img_Cian_smile, 0,0,242,324, canvas.width/2+20,200,416,540);
					else ctx.drawImage(img_Cian, 0,0,242,324, canvas.width/2+20,200,416,540);
					
					ctx.globalAlpha=1;
					ctx.fillText("Cian",30, 275);
					
					ctx.fillStyle = "#EEEE00";
					if(difficulty==1&&localStorage.easyClearCount!="0")ctx.fillText("Clear",165, 275);
					else if(difficulty==2&&localStorage.normalClearCount!="0")ctx.fillText("Clear",165, 275);
					else if(difficulty==3&&localStorage.hardClearCount!="0")ctx.fillText("Clear",165, 275);
					ctx.fillStyle = "#FFFFFF";
					
					ctx.fillText("擁有堅固裝甲的機體",30, 325);
					ctx.fillText("速度不快但防禦力高",30, 375);
					ctx.fillText("可以承受較多的傷害",30, 425);

					ctx.fillText("特殊技能: Ghost Cage",30, 475);
					ctx.fillText("血量降低時防御力上升",30, 525);
					ctx.fillText("危急時會進一步強化",30, 575);
					
					/*ctx.fillText("This rocket has sturdy armor. ",30, 201);
					ctx.fillText("It moves slowly but it has high defense,",30, 227);
					ctx.fillText("can bearing more damage.",30, 253);

					ctx.fillText("Special skill: Ghost Cage",30, 305);
					ctx.fillText("When its life is lower than 50%,",30, 331);
					ctx.fillText("the defense of rocket will getting higher.",30, 357);*/
				}
				
				if(characterSelect==2){
					ctx.globalAlpha=0.8;
					if(difficulty==1&&localStorage.easyClearCount!="0")ctx.drawImage(img_izayoi_smile, 0,70,225,324, canvas.width/2,200,374,540);
					else if(difficulty==2&&localStorage.normalClearCount!="0")ctx.drawImage(img_izayoi_smile, 0,70,225,324, canvas.width/2,200,374,540);
					else if(difficulty==3&&localStorage.hardClearCount!="0")ctx.drawImage(img_izayoi_smile, 0,70,225,324, canvas.width/2,200,374,540);
					else ctx.drawImage(img_izayoi, 0,70,225,324, canvas.width/2,200,375,540);
					
					ctx.globalAlpha=1;
					ctx.fillText("Izayoi",30, 175);
					
					ctx.fillStyle = "#EEEE00";
					if(difficulty==1&&localStorage.easyClearCount!="0")ctx.fillText("Clear",165, 275);
					else if(difficulty==2&&localStorage.normalClearCount!="0")ctx.fillText("Clear",165, 275);
					else if(difficulty==3&&localStorage.hardClearCount!="0")ctx.fillText("Clear",165, 275);
					ctx.fillStyle = "#FFFFFF";
					
					ctx.fillText("使用輕型的裝甲的機體",30, 325);
					ctx.fillText("防禦不高但機動性強",30, 375);
					ctx.fillText("可以更加快速的迴避",30, 425);

					ctx.fillText("特殊技能: Death Line",30, 475);
					ctx.fillText("能夠承受一次致命傷害",30, 525);
					ctx.fillText("體力超過一半時才能再度使用",30, 575);
					
					/*ctx.fillText("This rocket has light armor.",30, 201);
					ctx.fillText("It has low defense but it moves fast,",30, 227);
					ctx.fillText("can dodging obstacles rapidly.",30, 253);

					ctx.fillText("Special skill: Death Line",30, 305);
					ctx.fillText("It can bear a fatal damage once.",30, 331);
					ctx.fillText("This skill can be used again",30, 357);
					ctx.fillText("when its life is more than 50%.",30, 383);*/
				}
				
				ctx.globalAlpha=0.5;
				if(characterSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonCian.img, ButtonCian.x, ButtonCian.y,ButtonCian.dx,ButtonCian.dy);
				ctx.globalAlpha=0.5;
			
				if(characterSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonIzayoi.img, ButtonIzayoi.x, ButtonIzayoi.y,ButtonIzayoi.dx,ButtonIzayoi.dy);
				ctx.globalAlpha=0.5;
			
				/*if(characterSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(img_button, canvas.width/2-75, 430,150,50);
				ctx.globalAlpha=0.5;*/
			
				if(characterSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonCharacterBack.img, ButtonCharacterBack.x, ButtonCharacterBack.y,ButtonCharacterBack.dx,ButtonCharacterBack.dy);
				ctx.globalAlpha=1;
			}
			
			if(playerDataPage==true){
			//alert("gg");
				var highStage1;
				var highStage2;
				var highStage3;
				var lowMiss1;
				var lowMiss2;
				var lowMiss3;
				
				var highStage1_2;
				var highStage2_2;
				var highStage3_2;
				var lowMiss1_2;
				var lowMiss2_2;
				var lowMiss3_2;
				
				if(playerDataSelect==3){
					highStage1=localStorage.hardHighStage1;
					highStage2=localStorage.hardHighStage2;
					highStage3=localStorage.hardHighStage3;
					lowMiss1=localStorage.hardLowMiss1;
					lowMiss2=localStorage.hardLowMiss2;
					lowMiss3=localStorage.hardLowMiss3;
					
					highStage1_2=localStorage.hardHighStage1_2;
					highStage2_2=localStorage.hardHighStage2_2;
					highStage3_2=localStorage.hardHighStage3_2;
					lowMiss1_2=localStorage.hardLowMiss1_2;
					lowMiss2_2=localStorage.hardLowMiss2_2;
					lowMiss3_2=localStorage.hardLowMiss3_2;
				}
				else if(playerDataSelect==4){
					highStage1=localStorage.normalHighStage1;
					highStage2=localStorage.normalHighStage2;
					highStage3=localStorage.normalHighStage3;
					lowMiss1=localStorage.normalLowMiss1;
					lowMiss2=localStorage.normalLowMiss2;
					lowMiss3=localStorage.normalLowMiss3;
					
					highStage1_2=localStorage.normalHighStage1_2;
					highStage2_2=localStorage.normalHighStage2_2;
					highStage3_2=localStorage.normalHighStage3_2;
					lowMiss1_2=localStorage.normalLowMiss1_2;
					lowMiss2_2=localStorage.normalLowMiss2_2;
					lowMiss3_2=localStorage.normalLowMiss3_2;
				}
				else if(playerDataSelect==5){
					highStage1=localStorage.easyHighStage1;
					highStage2=localStorage.easyHighStage2;
					highStage3=localStorage.easyHighStage3;
					lowMiss1=localStorage.easyLowMiss1;
					lowMiss2=localStorage.easyLowMiss2;
					lowMiss3=localStorage.easyLowMiss3;
					
					highStage1_2=localStorage.easyHighStage1_2;
					highStage2_2=localStorage.easyHighStage2_2;
					highStage3_2=localStorage.easyHighStage3_2;
					lowMiss1_2=localStorage.easyLowMiss1_2;
					lowMiss2_2=localStorage.easyLowMiss2_2;
					lowMiss3_2=localStorage.easyLowMiss3_2;
				}else{
					ctx.globalAlpha=0.8;
					ctx.font = "40px Lucida";
					ctx.strokeStyle = "#66FFFF";
					ctx.strokeRect(8, 130, 760, 600);
					ctx.fillStyle = "#003377";
					ctx.fillRect(8, 130, 760, 600);
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					var e1=Math.floor(parseInt(localStorage.totalPlayingTime)/3600);
					var e2=Math.floor(parseInt(localStorage.totalPlayingTime)%3600/60);
					var e3=Math.floor(parseInt(localStorage.totalPlayingTime)%60);
					if(e1<10)e1="0"+e1;
					if(e2<10)e2="0"+e2;
					if(e3<10)e3="0"+e3;
					ctx.fillText("Total Playing Time ",15, 200);
					ctx.fillText(e1+":"+e2+":"+e3,600,200);
					
					if(Math.floor(parseInt(localStorage.totalPlayingCount))<10)e1="0"+localStorage.totalPlayingCount;
					else e1=localStorage.totalPlayingCount;
					ctx.fillText("Total Playing Count ",15, 240);
					ctx.fillText(e1,700, 240);
					
					ctx.fillText("Cian",15, 300);
					
					if(Math.floor(parseInt(localStorage.hardClearCount))<10)e1="0"+localStorage.hardClearCount;
					else e1=localStorage.hardClearCount;
					ctx.fillText("Hard Clear Time ",15, 340);
					ctx.fillText(e1,700, 340);
					
					if(Math.floor(parseInt(localStorage.normalClearCount))<10)e1="0"+localStorage.normalClearCount;
					else e1=localStorage.normalClearCount;
					ctx.fillText("Normal Clear Time ",15, 380);
					ctx.fillText(e1,700, 380);
					
					if(Math.floor(parseInt(localStorage.easyClearCount))<10)e1="0"+localStorage.easyClearCount;
					else e1=localStorage.easyClearCount;
					ctx.fillText("Easy Clear Time ",15, 420);
					ctx.fillText(e1,700, 420);
					
					ctx.fillText("Izayoi",15, 470);
					
					if(Math.floor(parseInt(localStorage.hardClearCount_2))<10)e1="0"+localStorage.hardClearCount_2;
					else e1=localStorage.hardClearCount_2;
					ctx.fillText("Hard Clear Time ",15, 510);
					ctx.fillText(e1,700, 510);
					
					if(Math.floor(parseInt(localStorage.normalClearCount_2))<10)e1="0"+localStorage.normalClearCount_2;
					else e1=localStorage.normalClearCount_2;
					ctx.fillText("Normal Clear Time ",15, 550);
					ctx.fillText(e1,700, 550);
					
					if(Math.floor(parseInt(localStorage.easyClearCount_2))<10)e1="0"+localStorage.easyClearCount_2;
					else e1=localStorage.easyClearCount_2;
					ctx.fillText("Easy Clear Time ",15, 590);
					ctx.fillText(e1,700, 590);
				}
				
				ctx.globalAlpha=0.8;
				ctx.font = "72px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(95, 50, 370, 80);
				ctx.fillStyle = "#003377";
				ctx.fillRect(95, 50, 370, 80);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Player Data",100, 110);

				if(playerDataSelect>=3){
					ctx.globalAlpha=0.8;
					ctx.font = "60px Lucida";
					ctx.strokeStyle = "#66FFFF";
					ctx.strokeRect(8, 130, 760, 300);
					ctx.fillStyle = "#003377";
					ctx.fillRect(8, 130, 760, 300);
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("Cian",10, 180);
					
					ctx.globalAlpha=0.8;
					ctx.font = "60px Lucida";
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No1: Stage "+highStage1,10, 260);
					ctx.fillText("Miss: "+lowMiss1,510, 260);
					
					ctx.globalAlpha=0.8;
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No2: Stage "+highStage2,10, 340);
					ctx.fillText("Miss: "+lowMiss2,510, 340);
					
					ctx.globalAlpha=0.8;
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No3: Stage "+highStage3,10, 420);
					ctx.fillText("Miss: "+lowMiss3,510, 420);
					
					
					ctx.globalAlpha=0.8;
					ctx.font = "60px Lucida";
					ctx.strokeStyle = "#66FFFF";
					ctx.strokeRect(8, 440, 760, 300);
					ctx.fillStyle = "#003377";
					ctx.fillRect(8, 440, 760, 300);
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("Izayoi",10, 490);
					
					ctx.globalAlpha=0.8;
					ctx.font = "60px Lucida";
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No1: Stage "+highStage1_2,10, 570);
					ctx.fillText("Miss: "+lowMiss1_2,510, 570);
					
					ctx.globalAlpha=0.8;
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No2: Stage "+highStage2_2,10, 650);
					ctx.fillText("Miss: "+lowMiss2_2,510, 650);
					
					ctx.globalAlpha=0.8;
					ctx.fillStyle = "#FFFFFF";
					ctx.globalAlpha=1;
					ctx.fillText("No3: Stage "+highStage3_2,10, 730);
					ctx.fillText("Miss: "+lowMiss3_2,510, 730);
				}			
				
				ctx.globalAlpha=0.5;
				if(playerDataSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonClear.img, ButtonClear.x, ButtonClear.y,ButtonClear.dx,ButtonClear.dy);
				ctx.globalAlpha=0.5;
			
				if(playerDataSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonPlayerDataBack.img, ButtonPlayerDataBack.x, ButtonPlayerDataBack.y,ButtonPlayerDataBack.dx,ButtonPlayerDataBack.dy);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(playerDataSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonPlayerDataHard.img, ButtonPlayerDataHard.x, ButtonPlayerDataHard.y,ButtonPlayerDataHard.dx,ButtonPlayerDataHard.dy);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(playerDataSelect==4)ctx.globalAlpha=1;
				ctx.drawImage(ButtonPlayerDataNormal.img, ButtonPlayerDataNormal.x, ButtonPlayerDataNormal.y,ButtonPlayerDataNormal.dx,ButtonPlayerDataNormal.dy);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(playerDataSelect==5)ctx.globalAlpha=1;
				ctx.drawImage(ButtonPlayerDataEasy.img, ButtonPlayerDataEasy.x, ButtonPlayerDataEasy.y,ButtonPlayerDataEasy.dx,ButtonPlayerDataEasy.dy);
				ctx.globalAlpha=1;
			
			}
			
			if(manualPage==true){
				
				ctx.globalAlpha=0.8;
				ctx.font = "72px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(130, 60, 260, 80);
				ctx.fillStyle = "#003377";
				ctx.fillRect(130, 60, 260, 80);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Manual",130, 130);
				
				ctx.globalAlpha=0.8;
				ctx.font = "40px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(20, 160, canvas.width-40, 660);
				//ctx.fillStyle = "#444444";
				ctx.fillStyle = "#003377";
				ctx.fillRect(20, 160, canvas.width-40, 660);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;								
				
				if(manualSelect==1){
					ctx.fillText("Story:     關於故事",30, 220);
					ctx.fillText("About:    遊戲目的",30, 272);
					ctx.fillText("System: 操作方式",30, 324);
					
					/*ctx.fillText("Story:     about the story",30, 110);
					ctx.fillText("About:    about the game",30, 136);
					ctx.fillText("System: how to play",30, 162);*/

				}
				if(manualSelect==2){
					ctx.fillText("故事:",30, 220);
					ctx.fillText("「來體會一場永恆的單程旅行吧！」",30, 272);
					ctx.fillText("少男少女懷抱著各自的心思",30, 324);
					ctx.fillText("參加並乘坐了莫斯提瑪博士的奇妙火箭",30, 376);
					ctx.fillText("究竟他們會在這場旅行中找到什麼",30, 428);
					ctx.fillText("而在旅途的終點",30, 480);
					ctx.fillText("又會存在著什麼呢...",30, 532);
					
					/*ctx.fillText("Story:",30, 110);
					ctx.fillText("\"Do you want to experience an enternal ",30, 136);
					ctx.fillText("one way journey?\"",30, 162);
					ctx.fillText("Boy and girl join and take Dr.Mastema's",30, 188);
					ctx.fillText("incredible rocket with mixed feelings.",30, 214);
					ctx.fillText("What can they find in this journey,",30, 240);
					ctx.fillText("and what's waiting for they at the end...",30, 266);*/
				}
				if(manualSelect==3){
					ctx.fillText("遊戲目的:",30, 220);
					ctx.fillText("操作火箭不斷閃避障礙物",30, 272);
					ctx.fillText("並吃下道具強化體力",30, 324);
					ctx.fillText("讓火箭往更高的高度飛行",30, 376);
					
					ctx.fillText("簡單來說就是不要被撞到就好了",30, 480);
					
					/*ctx.fillText("Purpuse:",30, 110);
					ctx.fillText("Move the rocket to dodge the obstacles,",30, 136);
					ctx.fillText("and get the items to make it stonger,",30, 162);
					ctx.fillText("letting it fly much higher.",30, 188);*/
					
					//ctx.fillText("簡單來說就是不要被撞到就好了",30, 218);
					
				}
				if(manualSelect==4){
					ctx.fillText("操作方式:",30, 220);
					ctx.fillText("方向鍵: 移動",30, 272);
					ctx.fillText("空白鍵: 暫停",30, 324);
					
					ctx.fillText("道具:",30, 436);
					ctx.drawImage(img_red_max,60, 460, 60, 60);
					ctx.fillText("        :  提升生命上限",60, 500);
					ctx.drawImage(img_green_life,60, 540, 60, 60);
					ctx.fillText("        :  恢復10%的生命",60, 580);
					//ctx.fillText("Miss:    失誤次數",30, 296);
					//ctx.fillText("Time:   遊戲時間",30, 322);
					//ctx.fillText("Life:     體力 歸零時則遊戲結束 ",30, 348);
					//ctx.fillText("            會隨時間恢復",30, 374);
					/*ctx.fillText("Operation:",30, 110);
					ctx.fillText("Arrow: move",30, 136);
					ctx.fillText("Space: pause",30, 162);
					
					ctx.fillText("item:",30, 218);
					ctx.drawImage(img_red_max,30, 230, 30, 30);
					ctx.fillText("        :  raise the maxium of life",30, 250);
					ctx.drawImage(img_green_life,30, 270, 30, 30);
					ctx.fillText("        :  recover 10% of life",30, 290);*/
				}
				
				ctx.globalAlpha=0.5;
				if(manualSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonStory.img, ButtonStory.x, ButtonStory.y,ButtonStory.dx,ButtonStory.dy);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(manualSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonAbout.img, ButtonAbout.x, ButtonAbout.y,ButtonAbout.dx,ButtonAbout.dy);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(manualSelect==4)ctx.globalAlpha=1;
				ctx.drawImage(ButtonSystem.img, ButtonSystem.x, ButtonSystem.y,ButtonSystem.dx,ButtonSystem.dy);
				ctx.globalAlpha=1;
				
				
				ctx.globalAlpha=0.5;
				if(manualSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonManualBack.img, ButtonManualBack.x, ButtonManualBack.y,ButtonManualBack.dx,ButtonManualBack.dy);
				ctx.globalAlpha=1;
			}
			
			if(configPage==true){
				ctx.globalAlpha=0.8;
				ctx.font = "72px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(260, 60, 260, 80);
				ctx.fillStyle = "#003377";
				ctx.fillRect(260, 60, 260, 80);
				ctx.fillStyle = "#FFFFFF";
				ctx.globalAlpha=1;
				ctx.fillText("Config",280, 130);
				ctx.globalAlpha=1;
				
				ctx.globalAlpha=0.5;
				if(configSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonBGM.img, ButtonBGM.x, ButtonBGM.y,ButtonBGM.dx,ButtonBGM.dy);

				ctx.font = "80px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(530, 295, 140, 90);
				ctx.fillStyle = "#003377";
				ctx.fillRect(530, 295, 140, 90);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(localStorage.BGMVolume,540, 380);

				ctx.globalAlpha=0.5;
				if(localStorage.BGMVolume!="0"&&configSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonBlueLeftBGM.img, ButtonBlueLeftBGM.x, ButtonBlueLeftBGM.y,ButtonBlueLeftBGM.dx,ButtonBlueLeftBGM.dy);
				ctx.globalAlpha=0.5;
				
				if(localStorage.BGMVolume!="100"&&configSelect==1)ctx.globalAlpha=1;
				ctx.drawImage(ButtonBlueRightBGM.img, ButtonBlueRightBGM.x, ButtonBlueRightBGM.y,ButtonBlueRightBGM.dx,ButtonBlueRightBGM.dy);
				ctx.globalAlpha=0.5;
			
				if(configSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonSE.img, ButtonSE.x, ButtonSE.y,ButtonSE.dx,ButtonSE.dy);
				
				ctx.font = "80px Lucida";
				ctx.strokeStyle = "#66FFFF";
				ctx.strokeRect(530, 420, 140, 90);
				ctx.fillStyle = "#003377";
				ctx.fillRect(530, 420, 140, 90);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(localStorage.SEVolume,540, 505);
				
				ctx.globalAlpha=0.5;
				if(localStorage.SEVolume!="0"&&configSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonBlueLeftSE.img, ButtonBlueLeftSE.x, ButtonBlueLeftSE.y,ButtonBlueLeftSE.dx,ButtonBlueLeftSE.dy);
				ctx.globalAlpha=0.5;
				
				if(localStorage.SEVolume!="100"&&configSelect==2)ctx.globalAlpha=1;
				ctx.drawImage(ButtonBlueRightSE.img, ButtonBlueRightSE.x, ButtonBlueRightSE.y,ButtonBlueRightSE.dx,ButtonBlueRightSE.dy);
				ctx.globalAlpha=0.5;
			
				if(configSelect==3)ctx.globalAlpha=1;
				ctx.drawImage(ButtonConfigBack.img, ButtonConfigBack.x, ButtonConfigBack.y,ButtonConfigBack.dx,ButtonConfigBack.dy);
				ctx.globalAlpha=0.5;
				
				ctx.globalAlpha=1;
			
				/*if(difficultySelect==4)ctx.globalAlpha=1;
				ctx.drawImage(img_button_back, canvas.width/2-75, 500,150,50);
				ctx.globalAlpha=1;*/
			}
			
			if(gameOverPage==true){
				drawGameOver();
			}
			
			requestAnimationFrame(drawMenu);
		}
		
		function drawEnd(){//繪製結局
		
			var heightTemp = flyHeight;

			heightTemp = flyHeight/(9.46*Math.pow(10,12));
			var	lengthUnit = /*"ly"*/" 光年";

			finalHeight=Math.floor(heightTemp)+lengthUnit;
		
			ctx.globalAlpha=0.8;
			ctx.font = "36px Lucida";
			ctx.strokeStyle = "#66FFFF";
			ctx.strokeRect(95, 30, 200, 40);
			ctx.fillStyle = "#003377";
			ctx.fillRect(95, 30, 200, 40);
			ctx.fillStyle = "#FFFFFF";
			ctx.globalAlpha=1;
			ctx.fillText("End",170, 65);
			
			ctx.globalAlpha=0.8;
			ctx.font = "20px Lucida";
			ctx.strokeStyle = "#66FFFF";
			ctx.strokeRect(20, 80, canvas.width-40, 330);
			ctx.fillStyle = "#003377";
			ctx.fillRect(20, 80, canvas.width-40, 330);
			ctx.fillStyle = "#FFFFFF";
			ctx.globalAlpha=1;		
			
			//ctx.fillText("Time:   "+timer,30, 188);
			if(difficulty==1)ctx.fillText("Difficulty: Easy",30, 110);
			if(difficulty==2)ctx.fillText("Difficulty: Normal",30, 110);
			if(difficulty==3)ctx.fillText("Difficulty: Hard",30, 110);
			ctx.fillText("Stage:  "+gameLevel,30, 136);
			ctx.fillText("Height: "+finalHeight,30, 162);
			ctx.fillText("Miss:    "+enemyHit,30, 188);
			
			ctx.fillText("",30, 214);
			ctx.fillText("",30, 240);
			ctx.fillText("",30, 266);
			
			/*ctx.globalAlpha=0.5;
			if(gameOverSelect==1)ctx.globalAlpha=1;
			ctx.drawImage(img_button_retry, canvas.width/2-75, 430,150,50);
			ctx.globalAlpha=0.5;*/
			
			//if(gameOverSelect==2)ctx.globalAlpha=1;
			ctx.drawImage(ButtonEndBack.img, ButtonEndBack.x, ButtonEndBack.y,ButtonEndBack.dx,ButtonEndBack.dy);
			//ctx.globalAlpha=1;
				ctx.globalAlpha = 0;
				gameEndMessegeFinish = true;
		}
		
		function createMenuAnimation(){
				var _damage=0;
				var num = (Math.floor(Math.random()*2+1));
				var speed = 1;
				var angle10 = 80;
				var size = 40;
				if(num==1){
					var block1 = {
					img:img_blueStar,
					width:size,
					height:size,
					posX: Math.floor(Math.random()*(canvas.width-10)),
					posY: size * (-1),
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
					titleBlock.push(block1);
				}
				if(num==2){
					var block2 = {
					img:img_blueStar,
					width:size,
					height:size,
					posX: Math.floor(Math.random()*(canvas.width-10)),
					posY: size * (-1),
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
					titleBlock.push(block2);
				}
		}