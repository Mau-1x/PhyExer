window.addEventListener('load',iniciar,false);

/*Contador inicializado en cero*/
var contador=0;

function iniciar(){
    setInterval('cambiarImg()',2000);
}

   var obj=document.getElementById('slider');
var obj2=obj.getElementsByTagName('img');

function cambiarImg(){	        

    if(contador==obj2.length){
        for(var i=0; i<obj2.length; i++){
            obj2[i].style.opacity='0';
            contador--;
        }
        obj2[contador].style.opacity='1';
    }
    else
    {
        obj2[contador].style.opacity='1';
        contador++;
    }
    
}      