$(function(){

$('.sign').eq(0).css("background-color","white");

	//自动播放
	var num=$('.child').length;
	var now_num=0;
	var clear=null;
	$('.child:gt(0)').hide();

	function move(){
		if (now_num==num-1) {
			now_num=-1;
		}
		$('.child').eq(now_num+1).fadeIn('slow').siblings('.child').fadeOut('slow');
		$('.sign').css("background-color","#367E94");
		$('.sign').eq(now_num+1).css("background-color","white");
		now_num++;
	}
	function returnphoto(){
		change=setInterval(function(){
			move();
		},5000);
	}
	returnphoto();

	//鼠标移上去停止
	$('.child').mouseover(function(){
		clearInterval(change);
	})
	$('.sign').mouseover(function(){
		clearInterval(change);
	})
	$('.child').mouseout(function(){
		returnphoto();
	})
	$('.sign').mouseout(function(){
		returnphoto();
	})


	//点击小图发生的事
	$('.sign').click(function(){
		var bigchange=$('.sign').index(this);
		$('.child').eq(bigchange).fadeIn('slow').siblings('.child').fadeOut('slow');
		$('.sign').css("background-color","#367E94");
		$('.sign').eq(bigchange).css("background-color","white");
		now_num=bigchange;
	})


//ajax
$.ajax({
	type:"GET",
	url:"http://rapapi.org/mockjsdata/19301/paper/listPaper.do",
	dataType:'json',
	success:function(json){
		$(".papername")[0].innerHTML=json.data.paperlist[0].title;
		$(".Designer")[0].innerHTML=json.data.paperlist[0].author;
		$(".papername")[1].innerHTML=json.data.paperlist[1].title;
		$(".Designer")[1].innerHTML=json.data.paperlist[1].author;
		$(".papername")[2].innerHTML=json.data.paperlist[2].title;
		$(".Designer")[2].innerHTML=json.data.paperlist[2].author;
		$(".papername")[3].innerHTML=json.data.paperlist[3].title;
		$(".Designer")[3].innerHTML=json.data.paperlist[3].author;
	},
	error:function(json){
		alert("error");
	},


})
	// $("#header").contents().find("#Researchresult").click(function(){
	// 	window.location.href='../Researchresult.html'
 // 	})
})
