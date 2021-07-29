
function iniciar(){
   var imagenes1= document.querySelectorAll(".imagenes1")
   var imagenesCant=imagenes1.length;
   for (i=0; i<imagenesCant; i++){
     imagenes1[i].addEventListener('drag',function seleccion(e){
        
     })
      imagenes1[i].addEventListener("dragstart",function arrastrado (e){
         elemento=e.target;
        elementoDiv=elemento.parentNode.parentNode
         e.dataTransfer.setData('Text', elemento.getAttribute('src'));
         
         console.log(elementoDiv)
          
         },false)
   
         imagenes1[i].addEventListener("dragenter", function entrando (e){
     e.preventDefault();
     vari=e.target
     variable=vari.cloneNode(true)
     e.dataTransfer.setData('Text/HTML',variable.getAttribute('src'))
    
  },false)
         imagenes1[i].addEventListener("dragleave",saliendo,false)
         imagenes1[i].addEventListener("dragover",function (e){
         e.preventDefault() }, false)
         
         imagenes1[i].addEventListener("drop", function soltado(e){
            e.preventDefault();
            slot=e.target;
            e.dataTransfer.getData('Text/HTML');
            e.dataTransfer.setData('Text/HTML',slot.getAttribute('src'))
            slot.src=elemento.getAttribute("src")
            elemento.src=variable.getAttribute('src')
            console.log(variable)
      },false)
     
     }  
      }
 
  function saliendo (e){
     e.preventDefault();
     
  }
 

window.addEventListener("load",iniciar,false)

