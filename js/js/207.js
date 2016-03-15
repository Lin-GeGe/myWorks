window.onload=function(){
 	var header=document.getElementById('header'),//可以给标签同时添加id跟class
 		spans=header.getElementsByTagName('span'),
 		content=document.getElementById('content'),
 		uls=content.getElementsByTagName('ul');
 	for(var i=0,len=spans.length;i<len;i++)//给标题做一个循环
 	{
 		spans[i].index = i;//给标题对象一个index属性
 		spans[i].onmouseover=function()//标题对象有一个移动事件
 	 	{
 			for(var j=0,len=spans.length;j<len;j++)//先移除所有的spans,uls样式
 			{
 				spans[j].className = spans[j].className.replace(' current', '');
 				uls[j].style.display='none';
 			}
 			this.className+=' current';//改变状态的，最好把样式封装在一个class里面，直接操作class
 			uls[this.index].style.display='block';//再给当前的对象加属性
 	 	}
    }
}
