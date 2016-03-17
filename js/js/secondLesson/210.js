window.onload=function()
{
	var oLi=document.getElementsByTagName('li'),
		oImg=document.getElementsByTagName('img');
	for(var i=0,len=oLi.length;i<len;i++)
	{
		oLi[i].index=oImg[i].index=i;
		oLi[i].onmouseover=function()
		{
			oImg[this.index].style.display="block";
		}
		oLi[i].onmouseout=function()
		{
			oImg[this.index].style.display="none";
		}
	}
}