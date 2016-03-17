window.onload=function()
{
	var	sumBtn=getObjById('sumBtn'),
		resultContent=getObjById('resultContent');
    sumBtn.onclick=function()
    {   
    	var sum=0,number=getObjById('number').value,newNumber=number.split(",");//split将字符串转化成字符串数组
    	for(var i=0,len=newNumber.length;i<len;i++)
		{
			// sum+=parseInt(newNumber[i]);//parseInt将字符串转化成数字
			sum+=newNumber[i]-0;//用-号可以把前面的字符串转化成数字。如果是+号是把数字转化成字符串。
		}
		resultContent.innerHTML=sum;
	}	
}
