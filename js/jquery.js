$(function(){
	$("#navList li").mouseover(function(){
			$("#navShow").find("div").css("display","none");
			$("#navShow").find("div").eq($(this).index()).css("display","block");	
		})
	$("#navShow").mouseout(function(){
		$("#navShow").find("div").css("display","none");
		})
	
	$(".headerCar").mouseover(function(){
		$(this).find("div").stop().slideDown();
		$(this).addClass("headerCarHover");
		}).mouseout(function(){
		$(this).find("div").stop().slideUp();
		$(this).removeClass("headerCarHover");	
			});
			
	$(".musicList li").mouseover(function(){
		$(this).find(".pop").stop().slideDown(200);
		}).mouseout(function(){
		$(this).find(".pop").stop().slideUp(200);	
			});
		
	$(".matchList").find("a").mouseover(function(){
			$(".matchTab").find("ul").css("display","none");
			
			$(".matchTab").find("ul").eq($(this).index()).css("display","block");
			});
	$(".matchList1").find("a").mouseover(function(){
			$(".matchTab1").find("ul").css("display","none");
			
			$(".matchTab1").find("ul").eq($(this).index()).css("display","block");
			});
	$(".matchList2").find("a").mouseover(function(){
			$(".matchTab2").find("ul").css("display","none");
			
			$(".matchTab2").find("ul").eq($(this).index()).css("display","block");
			});
	
});
		
	// JavaScript Document