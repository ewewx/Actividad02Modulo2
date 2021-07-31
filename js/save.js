function grabar(){
	var boton= document.querySelector("#guardar");
	boton.addEventListener("click",datosAgenda)
	mostrar();
	borrar();
}
function datosAgenda(){
	var modulo= document.querySelector("#modulo").value
	var dato=document.querySelector("#datoAgenda").value
	var importancia= document.querySelector("#importancia").value
	var fecha=document.querySelector("#fecha").value
	var variables=[dato,importancia,fecha]
	
	localStorage.setItem(modulo,variables)
	alert('Agenda Actualizada!')
	location.reload()
	

}
function mostrar(){
	var caja= document.querySelector("#agenda")
	for (i=0 ; i<localStorage.length; i++){
		var id= localStorage.key(i)
		var valor=localStorage.getItem(id)
		caja.innerHTML += '<h1>Módulo Nº'+id+ '-'+ valor+'</h1>'
		console.log(importancia.value)
}

}
function borrar(){
	var borrar=document.querySelector("#borrar")
	borrar.addEventListener('click',function borrador(){
		localStorage.clear()
		location.reload()	
	
	},false)
}
window.addEventListener("load", grabar)
