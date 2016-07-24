window.onload = function(){
		var oDiv = document.getElementById("div1");
		var oUl = document.getElementById("picList");
		var aLi = oUl.getElementsByTagName("li");
		var oBtn = document.getElementById("btn");
		var aA = oBtn.getElementsByTagName("a");
		
		var oDiv1 = document.getElementById("tab");
		var oUl1 = oDiv1.getElementsByTagName("ul")[0];
		var aLi1 = oUl1.getElementsByTagName("li");
		var aDiv = oDiv1.getElementsByTagName("div");
		
		var oDiv2 = document.getElementById("starList");
		var oDiv3 = document.getElementById("control");
		var aA2 = oDiv3.getElementsByTagName("a");
		var oUl2 = oDiv2.getElementsByTagName("ul")[0];
		var aLi2 = oUl2.getElementsByTagName("li");
		
		var oDiv3 = document.getElementById("starList1");
		var oDiv4 = document.getElementById("control1");
		var aA3 = oDiv4.getElementsByTagName("a");
		var oUl3 = oDiv3.getElementsByTagName("ul")[0];
		var aLi3 = oUl3.getElementsByTagName("li");
		
		var oDiv5 = document.getElementById("bookList");
		var oUl4 = oDiv5.getElementsByTagName("ul")[0];
		var aLi4 = oUl4.getElementsByTagName("li");
		var oBtn1 = document.getElementById("btn1");
		var oBtn2 = true;
		var oBtn3 = true;
		var aA4 = oBtn1.getElementsByTagName("a");
		
		var LiWidth2 = aLi4[0].offsetWidth;
		var ulWidth = LiWidth2*aLi4.length + "px";
		var aTop = (oDiv5.offsetHeight - aA4[0].offsetHeight)/2 + "px";
		var count = 0;
		
		oBtn1.style.top = aTop;
		oUl4.style.width = ulWidth;
		
		
		oDiv5.onmouseover = function(){
			for(var i = 0;i < aA4.length;i++){
				miaovStartMove(aA4[i],{opacity:50},MIAOV_MOVE_TYPE.BUFFER);
			}
			}
		
		oDiv5.onmouseout = function(){
			for(var i = 0;i < aA4.length;i++){
				miaovStartMove(aA4[i],{opacity:0},MIAOV_MOVE_TYPE.BUFFER);
			}
			}
			
				
	aA4[1].onclick = function(){
		count++;
			if(count==4){
				oBtn2 = false;
					}
			if(oBtn2){
			miaovStartMove(oUl4,{left:-count*LiWidth2},MIAOV_MOVE_TYPE.BUFFER);
				oBtn2 = true;
			}
		if( 0<= count <= 4){
			aA4[0].onclick = function(){
				count--;
				miaovStartMove(oUl4,{left:-count*LiWidth2},MIAOV_MOVE_TYPE.BUFFER);
				}
			}
		}
		
		var iNow = 0;
		var timer = null;
		
		var iNow2 = 0;
		var timer2 = null;
		
		var iNow3 = 0;
		var timer3 = null;
		
		var liWidth = aLi2[0].offsetWidth;
		oUl2.style.width = liWidth*aLi2.length + 14*8 + "px";
		
		var liWidth1 = aLi3[0].offsetWidth;
		oUl3.style.width = liWidth1*aLi3.length + 14*8 + "px";
		
		for(var i = 0;i < aA2.length;i++){
			aA2[i].index = i;
			aA2[i].onclick = function(){
				iNow2 = this.index;
				Tab2();
				}
			}
		
		for(var i = 0;i < aA3.length;i++){
			aA3[i].index = i;
			aA3[i].onclick = function(){
				iNow3 = this.index;
				Tab3();
				}
			}
			
		function Tab2(){
			miaovStartMove(oUl2,{left:-iNow2*(liWidth*aLi2.length + 14*8)/2},MIAOV_MOVE_TYPE.BUFFER);
			}
			
		function Tab3(){
			miaovStartMove(oUl3,{left:-iNow3*(liWidth1*aLi3.length + 14*8)/2},MIAOV_MOVE_TYPE.BUFFER);
			}
			
		function autoPlay2(){
			timer2 = setInterval(function(){
				iNow2++;
				iNow2%= aA2.length;
				Tab2();
				},10000);
			}
			
		function autoPlay3(){
			timer3 = setInterval(function(){
				iNow3++;
				iNow3%= aA3.length;
				Tab3();
				},10000);
			}
		autoPlay2();
		autoPlay3();
		
		oUl2.onmouseover = function(){
			clearInterval(timer2);
			}
			
		oUl2.onmouseout = function(){
			autoPlay2();
			}
			
		oUl3.onmouseover = function(){
			clearInterval(timer3);
			}
			
		oUl3.onmouseout = function(){
			autoPlay3();
			}
		
		for(var i =0;i < aLi1.length;i++){
			aLi1[i].index = i;
			aLi1[i].onmouseover = function(){
				for(var i = 0;i < aLi1.length;i++){
					aDiv[i].style.display = "none";
					}
					aDiv[this.index].style.display = "block";
				}
			}
		
			
		for(var i = 0;i < aDiv.length;i++){
			aDiv[i].onmouseover = function(){
				this.style.display = "block";
				}
			aDiv[i].onmouseout = function(){
				this.style.display = "none";
				}
			}
			
		oUl1.onmouseout = function(){
			for(var i = 0;i < aDiv.length;i++){
				aDiv[i].style.display = "none";
				}
			}
			
		for(var i = 0;i < aA.length;i++){
			aA[i].index = i;
			aA[i].onclick = function(){
				iNow = this.index;
				Tab();
				}
			}
			
			function Tab(){
				for(var i = 0;i < aA.length;i++){
					aA[i].className = "";
					aLi[i].style.filter = "alpha(opacity:0)";
					aLi[i].style.opacity = 0;
					}
					aA[iNow].className = "hover";
					miaovStartMove(aLi[iNow],{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
				}
				
			function autoPlay(){
				timer = setInterval(function(){
					iNow++;
					iNow%=aLi.length;
					Tab();
					},5000);
				}
				
				autoPlay();
				
				oDiv.onmouseover = function(){
					clearInterval(timer);
					}
					
				oDiv.onmouseout = function(){
					autoPlay();
					}
}