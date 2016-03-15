// var numberMenu=document.getElementById('numberMenu'),
//     masklayer=document.getElementById('masklayer'),
//     numberOclick=document.getElementById('numberMenu_onclick'),
//     numcancle=document.getElementById('numCancle');
// numberMenu.onclick=function()
// {
//    masklayer.style.display='inline';
//    numberOclick.style.display='inline';
// }
// numcancle.onclick=function()
// {
//    masklayer.style.display='none';
//    numberOclick.style.display='none';
// }



var menuJsonStr = "{\"menuArray\":[{\"id\":1,\"name\":\"烧麦\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":2,\"name\":\"虾饺\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":3,\"name\":\"艇仔粥\",\"price\":\"10\",\"type\":4,\"pic\":\"../img/menu/11.jpg\"},{\"id\":4,\"name\":\"鲍汁凤爪\",\"price\":\"20\",\"type\":1,\"pic\":\"../img/menu/11.jpg\"},{\"id\":5,\"name\":\"牛肉丸\",\"price\":\"18\",\"type\":2,\"pic\":\"../img/menu/11.jpg\"},{\"id\":6,\"name\":\"牛百叶\",\"price\":\"18\",\"type\":2,\"pic\":\"../img/menu/11.jpg\"},{\"id\":7,\"name\":\"叉烧包\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"},{\"id\":8,\"name\":\"萝卜糕\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"},{\"id\":9,\"name\":\"糯米鸡\",\"price\":\"10\",\"type\":3,\"pic\":\"../img/menu/11.jpg\"}]}";
window.onload = function()
{
	removeOldMenu();
	addNewMenu();
	bindMenuDetail();
}

function removeOldMenu()
{
	var foodList = document.getElementById('physicalList'),
		foodItems = foodList.getElementsByClassName('phyList');
	for(var i=0,len=foodItems.length;i<len;i++)
	{
		while(foodList.hasChildNodes())
		{
			foodList.removeChild(foodList.firstChild);
		}
	}
}

function addNewMenu()
{
	var foodList = document.getElementById('physicalList'),
		jsonObj = JSON.parse(menuJsonStr),
		menuArr = jsonObj.menuArray;
	for(var i=0,len = menuArr.length;i<len;i++)
	{
		var menuItem = document.createElement('div'), html = '';
		menuItem.className = 'phyList';
		html += '<img src="'+menuArr[i].pic+'" alt=""/>' +
				'<h5>'+menuArr[i].name+'&nbsp';
		if(menuArr[i].type == 1){
			html += '<span>优点</span></h5>';
		}else if(menuArr[i].type == 2){
			html += '<span>精点</span></h5>';
		}else if(menuArr[i].type == 3){
			html += '<span>顶点</span></h5>';
		}else{
			html += '<span>大点</span></h5>';
		}
		menuItem.innerHTML = html;
		foodList.appendChild(menuItem);
	}
}

function bindMenuDetail(){
	var physicalList=document.getElementById('physicalList');
	physicalList.addEventListener('click', openwindows, false);
}


// function openwindows(e)
// {
// 	e.stopPropagation();
// 	var target=e.target,
// 	    windows=document.getElementById('foodDetail');
// 	if(target.nodeName && target.nodeName == 'DIV')
// 	{
// 		var phyList=physicalList.getElementsByClassName('phyList');
// 		for(var i=0,len=phyList.length;i<len;i++)
// 		{
//   			windows.style.display='block';
// 		}
// 	}
// }

// var physicalList=document.getElementById('physicalList'),
//     phyList=physicalList.getElementsByClassName('phyList'),
//     windows=document.getElementById('foodDetail'),
//     cancle=document.getElementById('cancle');
// for(var i=0,len=phyList.length;i<len;i++)
// {
// 	phyList[i].onclick=function()
// 		{
//   		windows.style.display='inline';
// 		}
// }
// cancle.onclick=function()
// {
//   	windows.style.display='none';
// }




