/*	给元素对象添加事件监听
	target -> 元素对象（document.getElementById）
	eventType -> 事件类型（click、mouseover等）注意不要“on”
	handler -> 回调函数(要做什么)
	addHandler(obj, 'click', function(){
		//dosomething...
	});
	addHandler(obj, 'click', add); //add为函数名，不要“（）”
*/

function addHandler(target, eventType, handler){  
    if(target.addEventListener){//主流浏览器  
        addHandler = function(target, eventType, handler){  
            target.addEventListener(eventType, handler, false);  
        };  
    }else{//IE  
        addHandler = function(target, eventType, handler){  
            target.attachEvent("on"+eventType, handler);  
        };        
    }   
    addHandler(target, eventType, handler); 
} 

//删除事件监听兼容函数  
function removeHandler(target, eventType, handler){  
    if(target.removeEventListener){//主流浏览器  
        removeHandler = function(target, eventType, handler){  
            target.removeEventListener(eventType, handler, false);  
        }         
    }else{//IE  
        removeHandler = function(target, eventType, handler){  
            target.detachEvent("on"+eventType, handler);  
        }         
    }  
    //执行新的函数  
    removeHandler(target, eventType, handler);  
}  

function getObjById(id){
	return document.getElementById(id);
}
function getObjByClassName(id){
    return document.getElementsClassName(id);
}

