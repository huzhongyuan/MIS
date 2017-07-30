$(function(){
	var i=1;
//ajax
	$("#numberpage")[0].innerHTML="第"+i+"页";
	var list;
	var name;
	var id;
	function aj(){
				//研究生
				$.ajax({
					type:"GET",
					url:"http://rapapi.org/mockjsdata/19301/person/listAllPostGrads.do",
					dataType:"json",
					data:{
						"page":{
							"pageNow":i,
							"pageSize":"3",
						},
					},
					success:function(json){
					//研究生第一个学生
						$(".photo img")[0].src="upload/"+json.data.postList[0].picture.link;
						$(".name")[0].innerHTML="姓名："+json.data.postList[0].name;
						$(".dection")[0].innerHTML="方向："+json.data.postList[0].zhiwu;
						$(".profession")[0].innerHTML="专业："+json.data.postList[0].xibie;
						list={
							name:json.data.postList[0].name,
							id:json.data.postList[0].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("0",list);
					//研究生第二个学生
						$(".photo img")[1].src="upload/"+json.data.postList[1].picture.link;
						$(".name")[1].innerHTML="姓名："+json.data.postList[1].name;
						$(".dection")[1].innerHTML="方向："+json.data.postList[1].zhiwu;
						$(".profession")[1].innerHTML="专业："+json.data.postList[1].xibie;
						list={
							name:json.data.postList[1].name,
							id:json.data.postList[1].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("1",list);
					//研究生第三个学生
						$(".photo img")[2].src="upload/"+json.data.postList[2].picture.link;
						$(".name")[2].innerHTML="姓名："+json.data.postList[2].name;
						$(".dection")[2].innerHTML="方向："+json.data.postList[2].zhiwu;
						$(".profession")[2].innerHTML="专业："+json.data.postList[2].xibie;
						list={
							name:json.data.postList[2].name,
							id:json.data.postList[2].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("2",list);
					},
					error:function(json){
						//alert("error");
					},
				})


				//本科生
					$.ajax({
					type:"GET",
					url:"http://rapapi.org/mockjsdata/19301/person/listAllMembers.do",
					dataType:"json",
					data:{
						"page":{
							"pageNow":i,
							"pageSize":"3",
						},
					},
					success:function(json){
					//第一个学生
						$(".photo img")[3].src="upload/"+json.data.list[0].picture.link;
						$(".name")[3].innerHTML="姓名："+json.data.list[0].name;
						$(".dection")[3].innerHTML="方向："+json.data.list[0].zhiwu;
						$(".profession")[3].innerHTML="专业："+json.data.list[0].xibie;
						list={
							name:json.data.list[0].name,
							id:json.data.list[0].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("3",list);
					//第二个学生
						$(".photo img")[4].src="upload/"+json.data.list[1].picture.link;
						$(".name")[4].innerHTML="姓名："+json.data.list[1].name;
						$(".dection")[4].innerHTML="方向："+json.data.list[1].zhiwu;
						$(".profession")[4].innerHTML="专业："+json.data.list[1].xibie;
						list={
							name:json.data.list[1].name,
							id:json.data.list[1].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("4",list);
					//第三个学生
						$(".photo img")[5].src="upload/"+json.data.list[2].picture.link;
						$(".name")[5].innerHTML="姓名："+json.data.list[2].name;
						$(".dection")[5].innerHTML="方向："+json.data.list[2].zhiwu;
						$(".profession")[5].innerHTML="专业："+json.data.list[2].xibie;
						list={
							name:json.data.list[2].name,
							id:json.data.list[2].id,
						}
						list=JSON.stringify(list);
						console.log(list);
						localStorage.setItem("5",list);
					},
					error:function(json){
						//alert("error");
					},

				})
	}
	
//调用ajax
	aj();
//点击事件
	//上一页
      	$("#beforepage")[0].onclick=function(){
      		if (i>1) {
      			i--;
      			aj();	
      			$("#numberpage")[0].innerHTML="第"+i+"页";
      		}
      	}
	//下一页
		$("#nextpage")[0].onclick=function(){
			i++;
			aj();    				
			$("#numberpage")[0].innerHTML="第"+i+"页";
			}
	//显示的页数
		$("#numberpage")[0].innerHTML="第"+i+"页";
	


	//点击头像跳转个人界面
		for(var k=0;k<$(".man").length;k++){
			$(".man")[k].index=k;
			$(".man")[k].onclick=function(){
				localStorage.setItem("number",this.index);
				window.location.href="personal.html";
			}
		}
})