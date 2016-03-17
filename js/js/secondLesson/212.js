window.onload=function()
{
	var firstCbox=getObjById('firstCbox'),
		firsrSpan=getObjById('firsrSpan'),
		selectInvert=getObjById('selectInvert'),
		otherCbox=getObjByClassName('otherCbox');
	firstCbox.onclick=function()
	{
		if(firstCbox.checked)
		{
			for(var i=0,len=otherCbox.length;i<len;i++)
			{
				otherCbox[i].checked=this.checked;
		    }
 			firsrSpan.innerHTML='全不选';
		}else{
			for(var i=0,len=otherCbox.length;i<len;i++)
			{
				otherCbox[i].checked='';
		    }
 			firsrSpan.innerHTML='全选';
		}
	}
	selectInvert.onclick=function()
	{
		for(var i=0,len=otherCbox.length;i<len;i++)
		{  
			if(otherCbox[i].checked)
		     {
				otherCbox[i].checked='';
				firsrSpan.innerHTML='全选';
		    }else{
		    	otherCbox[i].checked=true;
		    	firsrSpan.innerHTML='全不选';
		    }
		}
	}
}