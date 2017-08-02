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
			if (json.data.Member.xuewei==undefined) {
				$("#position")[0].style.display="none";
			}
			else{
				$("#position")[0].innerHTML="学位："+json.data.Member.xuewei;
			}
			if (json.data.Member.zhicheng==undefined) {
				$("#degree")[0].style.display="none";
			}
			else{
				$("#degree")[0].innerHTML="职称："+json.data.Member.zhicheng;
			}
			$("#phone")[0].innerHTML="电话："+json.data.phoneAndEmail.phone;
			$("#email")[0].innerHTML="邮箱："+json.data.phoneAndEmail.email;
			$("#personcontent")[0].innerHTML=json.data.Member.jianjie;
			for(var i=0;i<5&&json.data.titleList[i]!=undefined;i++){
				$("#study")[0].innerHTML=json.data.titleList[i]+'<br>';
			}
			if ($("#study")[0].innerHTML=="") {
				$("#study")[0].innerHTML="这人很懒，什么都没留下。"
			}
		},
		error:function(json){
			alert("error");
		},

	})
	
})