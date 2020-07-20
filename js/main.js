var x = document.getElementById("diameter"),

    y = document.getElementById("result");
    
diameter.onkeyup = function change(){
    
    if(x.value <= "0"){
        
        y.innerHTML = "";
        
    }else if(isNaN(x.value)){
        
        y.innerHTML = "";
        
    }else{
        
        y.innerHTML = x.value /2 * 22 /7;
        
    }
    
};

var diametertwo = document.getElementById("diametertwo"),

    resulttwo = document.getElementById("resulttwo");
    
diametertwo.onkeyup = function(){
    
    if (isNaN(diametertwo.value)){
        
        resulttwo.innerHTML = "";
        
    }else if(diametertwo.value ===""){
        
        resulttwo.innerHTML = "";
        
    }else if (diametertwo.value <= "0"){
        
        resulttwo.innerHtml = "";
    }
    else{
        
        resulttwo.innerHTML = diametertwo.value * diametertwo.value * 3.14;
        
    }
    
    
}
