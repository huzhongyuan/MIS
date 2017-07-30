
//已完成项目
$(function(){
	$.ajax({
		type:"GET",
		url:"http://rap.taobao.org/mockjsdata/19301/project/morecompletedachieve.do",
		dateType:"json",
		success:function(json){
			$("#info li")[0].innerHTML=json.data.completedachieve[0].type;
			$("#info li")[1].innerHTML=json.data.completedachieve[0].leader;
			$("#info li")[2].innerHTML=json.data.completedachieve[0].title;
			$("#info li")[3].innerHTML=json.data.completedachieve[0].deadline;
		}
	})
})
//未完成的项目
$(function(){
	$.ajax({
		type:"get",
		url:"http://rap.taobao.org/mockjsdata/19301/project/morenotcompleted.do",
		dateType:"json",
		success:function(json){
			$("#info li")[12].innerHTML=json.data.doingachieve[0].type;
			$("#info li")[13].innerHTML=json.data.doingachieve[0].leader;
			$("#info li")[14].innerHTML=json.data.doingachieve[0].title;
			$("#info li")[15].innerHTML=json.data.doingachieve[0].deadline;
		},
		error:function(json){
			alert("error");
		},
	})
})