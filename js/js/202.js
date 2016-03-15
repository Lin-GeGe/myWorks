var avr=document.getElementById("content"),
    bvr=avr.getElementsByTagName("div");
for(var i=0;i<bvr.length;i++)
{
	bvr[i].onclick=function()
	{
		alert(this.innerHTML);
	}
}

