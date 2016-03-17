window.onload=function(){
var nLi=document.getElementsByTagName('li');
	for(var i=0,len=nLi.length;i<len;i++)
	{
		nLi[i].onmouseover=function()
		{
			this.className = "current";
		}
		nLi[i].onmouseout=function()
		{
			this.className = "";
		}
	
	}
}