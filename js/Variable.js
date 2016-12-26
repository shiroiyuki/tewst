//localStorage.removeItem("highStage1");
		//localStorage.removeItem("highStage2");
		//localStorage.removeItem("highStage3");
		
		if(!localStorage.hardHighStage1)localStorage.hardHighStage1 = 0;//本地儲存最高分數
		if(!localStorage.hardHighStage2)localStorage.hardHighStage2 = 0;
		if(!localStorage.hardHighStage3)localStorage.hardHighStage3 = 0;
		if(!localStorage.hardLowMiss1)localStorage.hardLowMiss1 = 0;
		if(!localStorage.hardLowMiss2)localStorage.hardLowMiss2 = 0;
		if(!localStorage.hardLowMiss3)localStorage.hardLowMiss3 = 0;
		
		if(!localStorage.normalHighStage1)localStorage.normalHighStage1 = 0;//本地儲存最高分數
		if(!localStorage.normalHighStage2)localStorage.normalHighStage2 = 0;
		if(!localStorage.normalHighStage3)localStorage.normalHighStage3 = 0;
		if(!localStorage.normalLowMiss1)localStorage.normalLowMiss1 = 0;
		if(!localStorage.normalLowMiss2)localStorage.normalLowMiss2 = 0;
		if(!localStorage.normalLowMiss3)localStorage.normalLowMiss3 = 0;
		
		if(!localStorage.easyHighStage1)localStorage.easyHighStage1 = 0;//本地儲存最高分數
		if(!localStorage.easyHighStage2)localStorage.easyHighStage2 = 0;
		if(!localStorage.easyHighStage3)localStorage.easyHighStage3 = 0;
		if(!localStorage.easyLowMiss1)localStorage.easyLowMiss1 = 0;
		if(!localStorage.easyLowMiss2)localStorage.easyLowMiss2 = 0;
		if(!localStorage.easyLowMiss3)localStorage.easyLowMiss3 = 0;
		
		if(!localStorage.hardHighStage1_2)localStorage.hardHighStage1_2 = 0;//本地儲存最高分數
		if(!localStorage.hardHighStage2_2)localStorage.hardHighStage2_2 = 0;
		if(!localStorage.hardHighStage3_2)localStorage.hardHighStage3_2 = 0;
		if(!localStorage.hardLowMiss1_2)localStorage.hardLowMiss1_2 = 0;
		if(!localStorage.hardLowMiss2_2)localStorage.hardLowMiss2_2 = 0;
		if(!localStorage.hardLowMiss3_2)localStorage.hardLowMiss3_2 = 0;
		
		if(!localStorage.normalHighStage1_2)localStorage.normalHighStage1_2 = 0;//本地儲存最高分數
		if(!localStorage.normalHighStage2_2)localStorage.normalHighStage2_2 = 0;
		if(!localStorage.normalHighStage3_2)localStorage.normalHighStage3_2 = 0;
		if(!localStorage.normalLowMiss1_2)localStorage.normalLowMiss1_2 = 0;
		if(!localStorage.normalLowMiss2_2)localStorage.normalLowMiss2_2 = 0;
		if(!localStorage.normalLowMiss3_2)localStorage.normalLowMiss3_2 = 0;
		
		if(!localStorage.easyHighStage1_2)localStorage.easyHighStage1_2 = 0;//本地儲存最高分數
		if(!localStorage.easyHighStage2_2)localStorage.easyHighStage2_2 = 0;
		if(!localStorage.easyHighStage3_2)localStorage.easyHighStage3_2 = 0;
		if(!localStorage.easyLowMiss1_2)localStorage.easyLowMiss1_2 = 0;
		if(!localStorage.easyLowMiss2_2)localStorage.easyLowMiss2_2 = 0;
		if(!localStorage.easyLowMiss3_2)localStorage.easyLowMiss3_2 = 0;
		
		if(!localStorage.BGMVolume)localStorage.BGMVolume=100;
		if(!localStorage.SEVolume)localStorage.SEVolume=100;
		
		if(!localStorage.totalPlayingTime)localStorage.totalPlayingTime=0;
		if(!localStorage.totalPlayingCount)localStorage.totalPlayingCount=0;
		if(!localStorage.hardClearCount)localStorage.hardClearCount=0;
		if(!localStorage.normalClearCount)localStorage.normalClearCount=0;
		if(!localStorage.easyClearCount)localStorage.easyClearCount=0;
		if(!localStorage.hardClearCount_2)localStorage.hardClearCount_2=0;
		if(!localStorage.normalClearCount_2)localStorage.normalClearCount_2=0;
		if(!localStorage.easyClearCount_2)localStorage.easyClearCount_2=0;
		
		//localStorage.BGMVolume=100;
		//localStorage.SEVolume=100;
		//alert(localStorage.highScore1);
		/*
		localStorage.highStage1 = 0;
		localStorage.highStage2 = 0;
		localStorage.highStage3 = 0;
		localStorage.lowMiss1 = 0;
		localStorage.lowMiss2 = 0;
		localStorage.lowMiss3 = 0;
		*/
		
		/*img_button = new Image();
		img_button.src = "img/button.png";
		img_button.onload = function(){imageLoadDoneButton = true;}*/
		
		
		
		var test=0;
		
		var audioElement=document.getElementById("BGM");
		var audioElement2=document.getElementById("TitleBGM");
			//audioElement.play();
	
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		
		var player = {
			img:img_player,
			width: 80,
			height: 80,
			posX: canvas.width/2, //player x position
			posY: canvas.height-40*3,//player y position
			life: 100,
			maxLife: 100
		}
		var playerWidth = 40;
		var playerHeight = 40;
		var playerX = canvas.width/2;//player x position
		var playerY = canvas.height-playerHeight;//player y position
		var px = player.posX-(player.width/4);//玩家圖片區域
		var py = player.posY-(player.height/2);
		var pw = player.width*1.5;
		var ph = player.height*3;
		var life = 100;//體力
		var maxLife = 100;//體力最大值
		var finalHeight="";
		var lifeTransparent=false;
		var skillTransparent=false;
		var pilotTransparent=false;
		
		var bgMove=0;
		var bgLevelCurrent = 1;
		var bg1_Height = 1345;
		var bg1_Width = 401;
		var bg1_offset = 0;
		var bg3_Height=838;
		var bg3_Width=401;
		var bg3_offset = 0;
		var bg2_Height=3456;
		var bg2_Width=401;
		var bg2_offset = 0;
		var bg4_Height=1600;
		var bg4_Width=401;
		var bg4_offset = 0;
		var bg5_Height=1932;
		var bg5_Width=401;
		var bg5_offset = 0;
		var bg6_Height=1583;
		var bg6_Width=401;
		var bg6_offset = 0;
		var bg7_Height=1080;
		var bg7_Width=1920;
		var bg7_offset = -800;
		var bg8_Height=1024;
		var bg8_Width=401;
		var bg8_offset = 0;
		var bg9_Height=873;
		var bg9_Width=401;
		var bg9_offset = 0;
		var bg10_Height=1080;
		var bg10_Width=401;
		var bg10_offset = 0;
		var bg2Alpha = 1.0;
		
		var sniperAngle = 90;
		var angle=sniperAngle*Math.PI/180;
		
		var player_bullet=[];
		var bullet = {
			radius:5,posX:10,posY1:10,speed:10
		}
		
		var block1Array=[];
		var bgBlockArray=[];
		var blowUp = [];
		var itemArray=[];
		
		var leftPress = false;
		var rightPress = false;
		var downPress = false;
		var upPress = false;
		var shootPress = false;
		var gamePause = false;
		var musicPause;
		
		var score = 0;
		var timer = 0;//計時器
		var flyHeight = 0;//飛行高度
		var gameLevel = 1;//目前關卡
		var gameEnd = false;//通關判定
		var gameEndMessege = false;//通關畫面
		var gameEndMessegeFinish = false;
		var recoverTime=3;
		
		var bgLevel = [];//關卡背景判定
		for(var i=0;i<20;i++){
			bgLevel[i]=false;
		}
		
		var titleLevel = [];//關卡標題判定
		for(var i=0;i<20;i++){
			titleLevel[i]=false;
		}
		var titleTimer=0;
		var titleAlpha=0;
		
		var gameLoop;
		var counter;
		var setBGMove;
		var setFlyHeight;
		var setBlowUpTimer;
		var setItem;
		var setTitleAnimation;
		var LC;//life counter
		var enemyRate = 1000;//enemy appear rate
		var enemyHit;//number of killing enemy
		var collisionSide=0;//count number of collision side
		
		var animate;
		
		var difficulty=2;//1=easy 2=normal 3=hard
		
		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);
		// タッチを開始すると実行されるイベント
		document.addEventListener("touchstart",TouchStart);

		// タッチしたまま平行移動すると実行されるイベント
		document.addEventListener("touchmove",TouchMove);

		// タッチを終了すると実行されるイベント
		document.addEventListener("touchend",TouchEnd);
		
		var gameStart=false;//頁面判定
		var menuPage=false;
		var manualPage=false;
		var menuSelect=1;
		var manualSelect=1;
		var pauseSelect=1;
		var playerDataPage=false;
		var playerDataSelect=1;
		var saveCheck=false;
		var gameOverPage=false;
		var gameOverSelect=1;
		var titlePage=true;
		var pauseSelect=1;
		var difficultyPage=false;
		var difficultySelect=2;
		var characterPage=false;
		var characterSelect=1;
		var configPage=false;
		var configSelect=1;
		
		var titleAnimation=true;
		var titleBlock=[];
		
		setTitleAnimation=setInterval(createMenuAnimation, 1000);