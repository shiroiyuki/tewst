function seShoot(){//音效 射擊音
				var audioElementName = "se1";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
			}
			
		function seHit(){//音效 擊中
				var audioElementName = "se2";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
			}
			
		function seDamage(){//音效 擊中
				var audioElementName = "se3";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
			}
			
		function seBeep(){//音效 beep
				var audioElementName = "beep";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
		}
			
		function seOK(){//音效 擊中
				var audioElementName = "se4";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
		}

		function seBoom(){//音效 擊中
				var audioElementName = "boom";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
		}
		
		function sePause(){//音效 暫停
				var audioElementName = "pause";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
		}

		function seHeal(){//音效 擊中			
				var audioElementName = "heal";
				var audio = document.getElementById(audioElementName);
				var e1=parseInt(localStorage.SEVolume);
				audio.volume=e1/100;
				audio.currentTime = 0;
				audio.play();
		}		