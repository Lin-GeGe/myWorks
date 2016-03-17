var city=getObjById('city'),
    area=getObjById('area'),
    outlet=getObjById('onclick');
outlet.onclick=function(){
		var ncity=city.value;
		var narea=area.value;
		alert(ncity);
		alert(narea);
	}
