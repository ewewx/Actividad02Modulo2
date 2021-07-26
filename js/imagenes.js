function iniciar(){
   var imagenes1= document.querySelectorAll(".imagenes1")
   var imagenesCant=imagenes1.length;
   for (i=0; i<imagenesCant; i++){
     
      imagenes1[i].addEventListener("dragstart",function arrastrado (e){
         elemento=e.target;
         e.dataTransfer.setData('Text', elemento.getAttribute('id'));
         e.dataTransfer.getData('Text')
         console.log(elemento) 
         },false)
         
         imagenes1[i].addEventListener("dragenter",entrando,false)
         imagenes1[i].addEventListener("dragleave",saliendo,false)
         imagenes1[i].addEventListener("dragover",function (e){
         e.preventDefault() }, false)
        
         imagenes1[i].addEventListener("drop", function soltado(e){
            e.preventDefault();
            var slot=e.target;
            e.dataTransfer.getData('Text');
            e.dataTransfer.setData("Text",slot.getAttribute('id'))
            slot.src=elemento.getAttribute("src")
            
      console.log(slot)
      },false)
   }  
      }
  function entrando (e){
     e.preventDefault();
    
  }
  function saliendo (e){
     e.preventDefault();
  }
 

window.addEventListener("load",iniciar,false)

