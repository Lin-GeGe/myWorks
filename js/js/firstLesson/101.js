
		// function getObjById(id){
		// 	return document.getElementById(id);
		// }
		// function getObjById(){
		// 	return document.getElementById(arguments[0]);
		// }


		var pic = getObjById('pic');
		var btnwidth=getObjById('btnwidth'),
			btnheight=getObjById('btnheight'),
			btncolor=getObjById('btncolor'),
			btndisplay=getObjById('btndisplay'),
			btnreset=getObjById('btnreset');

		//变宽
		btnwidth.onclick=function(){
			pic.style.width='200px';
		}

		//变高
		btnheight.onclick=function(){
			pic.style.height='200px';
		}

		//变色
		btncolor.onclick=function(){
			pic.style.background='red';
		}

		//隐藏
		btndisplay.onclick=function(){
			pic.style.display='none';
		}

		//重置
		btnreset.onclick=function(){
			pic.style='';
		}
