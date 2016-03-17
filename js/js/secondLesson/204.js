window.onload=function(){
	var btnClick=getObjById('btnClick'),masklayer=getObjById('masklayer'),
    message=getObjById('message');
// addHandler(btnClick,'click',bombBox);
// function bombBox()
// {
// 		masklayer.style.display='inline';
// 		message.style.display='inline';
// }
	btnClick.onclick=function(){
		masklayer.style.display='inline';
	    message.style.display='inline';
	}
	masklayer.onclick=function(){
		masklayer.style.display='';
	    message.style.display='';
	}
}