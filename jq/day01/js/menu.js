var menuJsonStr = "{\"menuArray\":[{\"id\":1,\"name\":\"烧麦\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":2,\"name\":\"虾饺\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":3,\"name\":\"艇仔粥\",\"price\":\"10\",\"type\":4,\"pic\":\"../img/menu/11.jpg\"},{\"id\":4,\"name\":\"鲍汁凤爪\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":5,\"name\":\"牛肉丸\",\"price\":\"18\",\"type\":2,\"pic\":\"../img/menu/11.jpg\"},{\"id\":6,\"name\":\"牛百叶\",\"price\":\"18\",\"type\":2,\"pic\":\"../img/menu/11.jpg\"},{\"id\":7,\"name\":\"叉烧包\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"},{\"id\":8,\"name\":\"萝卜糕\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"},{\"id\":9,\"name\":\"糯米鸡\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"}]}";

window.onload = function(){
	removeOldMenu();
	addNewMenu();
}

$(function(){

});

//Uncaught ReferenceError: $ is not defined
//情况一：没有引入jquery文件；情况二：jquery文件名或路径写错
function removeOldMenu(){//phyList
	//1、$('#physicalList .phyList').remove(); 
	//$obj.remove(); 谁用，谁死 //并且移除绑定事件
	//2、$('#physicalList').empty(); 
	//$obj.empty(); 谁用，谁空 
	//3、$('#physicalList').detach();
	//保留绑定事件
	$('#physicalList .phyList').remove(); 
}

function addNewMenu(){
	var menuJsonObj = JSON.parse(menuJsonStr);
	var menuArray = menuJsonObj.menuArray;
	var html = '';
	
	$.each(menuArray, function(i, elem){ 
		// console.log(elem);
		// console.log(index);
		html += '<div class="phyList">' +
					'<img src="'+elem.pic+'" alt=""/>' +
					'<h5>'+elem.name+'&nbsp;';
		switch(elem.type){
			case 1:
				html += '<span>优</span></h5></div>';
			break;
			case 2:
				html += '<span>精</span></h5></div>';
			break;
			case 3:
				html += '<span>顶</span></h5></div>';
			break;
			case 4:
				html += '<span>大</span></h5></div>';
			break;
			case 5:
				html += '<span>小</span></h5></div>';
			break;
		}
	});
	$('#physicalList').append(html);
}