// var nbox=document.getElementById('box'),
// 	nimg=nbox.getElementsByTagName('img'),
// 	first=document.getElementById('first');
// for(var i=1,len=nimg.length;i<len;i++){
// 	nimg[i].onmouseover=function(){
// 		first.src=this.src.replace('small','big');
// 	}
// }


var smallArr = [
				'file:///F:/web/workplace/js/img/211/small_1.jpg',
				'file:///F:/web/workplace/js/img/211/small_2.jpg',
				'file:///F:/web/workplace/js/img/211/small_3.jpg',
				'file:///F:/web/workplace/js/img/211/small_4.jpg',
				'file:///F:/web/workplace/js/img/211/small_5.jpg',
				'file:///F:/web/workplace/js/img/211/small_6.jpg',
				'file:///F:/web/workplace/js/img/211/small_7.jpg',
				'file:///F:/web/workplace/js/img/211/small_8.jpg',
				'file:///F:/web/workplace/js/img/211/small_9.jpg',
				'file:///F:/web/workplace/js/img/211/small_10.jpg',
				'file:///F:/web/workplace/js/img/211/small_11.jpg'
			 ];
var bigArr = [
				'file:///F:/web/workplace/js/img/211/big_1.jpg',
				'file:///F:/web/workplace/js/img/211/big_2.jpg',
				'file:///F:/web/workplace/js/img/211/big_3.jpg',
				'file:///F:/web/workplace/js/img/211/big_4.jpg',
				'file:///F:/web/workplace/js/img/211/big_5.jpg',
				'file:///F:/web/workplace/js/img/211/big_6.jpg',
				'file:///F:/web/workplace/js/img/211/big_7.jpg',
				'file:///F:/web/workplace/js/img/211/big_8.jpg',
				'file:///F:/web/workplace/js/img/211/big_9.jpg',
				'file:///F:/web/workplace/js/img/211/big_10.jpg',
				'file:///F:/web/workplace/js/img/211/big_11.jpg'
			 ];

 window.onload = function()
 {
 	removeAllChild();
 	appendAllChild();

}
function removeAllChild()
{
	var nbox=document.getElementById('box');//找到ul对象
 	while(nbox.hasChildNodes())//当ul对象里面有子节点的时候
 	{
 		nbox.removeChild(nbox.firstChild);//删除子节点
 	} 
}//当子节点全部删除完以后，停止循环

function appendAllChild()
{
	var nbox=document.getElementById('box');//找到ul对象
	var newLi=document.createElement('li');//创建一个li对象
	newLi.className='first';//给li对象赋值一个classname
	newLi.innerHTML='<img src="'+bigArr[0]+'"  id="first"/>';//在li里面插入图片内容
	nbox.appendChild(newLi);//将新创建的li插入到ul里面
	for(var i=0,len=smallArr.length;i<len;i++)
	{
		newLi=document.createElement('li');//因为之前的li已经被使用了，所以newLi是一个空的变量，
		                                    //所以这里需要重新赋值
		newLi.innerHTML='<img src="'+smallArr[i]+'"/>';//在li里面插入图片内容
		nbox.appendChild(newLi);//将新创建的li插入到ul里面
	}
	var nimg=nbox.getElementsByTagName('img'),
	    first=document.getElementById('first');
    for(var i=1,len=nimg.length;i<len;i++)
    {
        nimg[i].onmouseover=function()
        {
      		first.src=this.src.replace('small','big');
        }
    }
}








