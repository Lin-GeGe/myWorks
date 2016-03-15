/* 方法一 简单的做法  全部变红色 */
// var clickchange=getObjById('clickchange');
// var pic=document.getElementsByClassName('pic');
// clickchange.onclick=function(){
// 	// console.log(pic);
// 	// pic.style.background='red';
// 	for(var i=0;i<pic.length;i++){
// 		pic[i].style.background='red';
// 	}
// }

/* 只有一个色块发生变化，移动上去变红色，移开的时候恢复 */
// var pics=document.getElementsByClassName('pic');
// for(var i=0,len=pics.length;i<len;i++)
// {
// 	pics[i].onmouseover=function()
// 	{
//         this.style.background='red';
// 		this.className+=' pic2';
// 	}
// 	pics[i].onmouseout=function()
// 	{
// 		this.style='';
// 		this.className=this.className.replace(/ pic2/,'');
// 	}
// }




/*引用外部样式的做法 全部变红色*/
addHandler(clickchange, 'click', function(){
		for(var i=0;i<pic.length;i++){
	    	pic[i].style.background='red';
	    }
});

addHandler(clickchange, 'click', makeRed); 
function makeRed(){
	for(var i=0,len=pic.length;i<len;i++){
    	pic[i].style.background='red';
    }
}


/* 方法二  查找某一个特定元素*/
// var clickchange=getObjById('clickchange');
// var content1 = getObjById('content1');
// var pic = content1.getElementsByTagName('li');
// var pic = content1.getElementsByClassName('pic');
// console.log(pic.length);
// clickchange.onmouseover=function(){
// for(var i=0,len=pic.length;i<len;i++){
// 	pic[i].style.background='red';
// }
// }
// addHandler(clickchange, 'click',function(){
// for(var i=0,len=pic.length;i<len;i++){
//    pic[i].style.background='red';
//  }
// }); 



/* 事件委托 */
var box = document.getElementById('box'); // 事件委托在父元素上
box.addEventListener('mouseover', changeColor, false); //e 就是每个事件处理程序都会带有一个event对象，这简称e,可随意改


function changeColor(e){
	var target = e.target; // e.target 就是获取触发这个对象的目标对象
	if(target.nodeName && target.nodeName == 'LI'){//target.nodeName 获取的是触发这个对象的目标对象是否存在，并且标签名为LI(此处必须为大写)
		var lis = box.getElementsByClassName('pic');
		for(var i=0,len=lis.length;i<len;i++){
			lis[i].style.backgroundColor = '#000';
		}
		// target.style.backgroundColor = '#f00'; //触发的目的（业务）相同时，可直接这样
		switch(target.id){ //不同则可用switch语句区分判断
			case 'one':
				target.style.backgroundColor = 'green';
			break;
			case 'two':
				target.style.backgroundColor = 'yellow';
			break;
			case 'three':
				target.style.backgroundColor = 'red';
			break;	
		}
	}
}