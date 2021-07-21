/*sección estudios*/
function aparece(){
	document.querySelector(".texto_oculto1").style.display="block";
}
function aparece2(){
	document.querySelector(".texto_oculto2").style.display="block";
}

function dibujo1(){
    var lienzo1= document.querySelector(".lienzo1")
    var dibujoEstudio= lienzo1.getContext("2d")
    var imagen= new Image();
    imagen.src="css/imagenes/utn.png"
    imagen.addEventListener("load",function(){
    dibujoEstudio.drawImage(imagen,0,0,lienzo1.width ,lienzo1.height )
    lienzo1.addEventListener("click",texto,false);
},false);
}
window.addEventListener("load",dibujo1,false);
function texto(){
    var textoLienzo1= document.querySelector(".text-lienzo1");
    var textoL1=textoLienzo1.getContext("2d");
    textoL1.font="bold 150% Times New Roman, sans Serif"
    textoL1.textAlign="start";
    textoL1.fillText("Actualmente Estudiando la Diplomatura ",75,100);
    textoL1.fillText("Professional Frontend Developer en la UTN",60,130)

}
function dibujo3(){
    var lienzo2=document.querySelector(".lienzo2")
    var dibujoEstudio2= lienzo2.getContext("2d")
    var imagen2=new Image();
    imagen2.src="css/imagenes/uba-exactas.png"
    imagen2.addEventListener("load", function(){
    dibujoEstudio2.drawImage(imagen2,0,0, lienzo2.width, lienzo2.height)
    lienzo2.addEventListener("click",texto2,false);
},false)
}window.addEventListener("load",dibujo3,false)
function texto2(){
    var textoLienzo2=document.querySelector(".text-lienzo2");
    var textoL2=textoLienzo2.getContext("2d");
    textoL2.font="bold 150% Times New Roman, sans Serif"
    textoL2.textAlign="start";
    textoL2.fillText("Estudiante del CBC de la Carrera ",120,100);
    textoL2.fillText("Lic. En Ciencias de Datos en la UBA ",110,130);

}