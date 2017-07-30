$(function(){
	var number=localStorage.getItem("number");
	var i=number;
	var info=localStorage.getItem(i);
	info=JSON.parse(info);
	console.log(info);
	$.ajax({
		type:"GET",
		url:"http://rapapi.org/mockjsdata/19301/personshow/personShow.do",
		dataType:"json",
		data:{
			"id":info.id,
			"name":info.name,
		},
		success:function(json){
		    $("#photo img")[0].src="upload/"+json.data.Member.picture.link;
			$("#name")[0].innerHTML="姓名:"+json.data.Member.name;
			$("#major")[0].innerHTML="系别："+json.data.Member.xibie;
			$("#position")[0].innerHTML="学位："+json.data.Member.xuewei;
			$("#degree")[0].innerHTML="职称："+json.data.Member.zhicheng;
			$("#phone")[0].innerHTML="办公室电话："+json.data.phoneAndEmail.phone;
			$("#email")[0].innerHTML="邮箱："+json.data.phoneAndEmail.email;
			$("#personcontent")[0].innerHTML=json.data.Member.jianjie;
			$("#study")[0].innerHTML=json.data.titleList[0]+'<br>'+json.data.titleList[1]+'<br>'+json.data.titleList[2]+'<br>'+json.data.titleList[3]+'<br>'+json.data.titleList[4];
		},
		error:function(json){
			alert("error");
		},

	})
	
})