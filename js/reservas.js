
function validar1() {
  
	const email = document.getElementById("email").value;
	const comment = document.getElementById("comment").value;
	let bandera = 1;
	
	
	if(email==="") {
		alert("Debe ingresar un correo");
		return false;
		bandera = 0;
		
	}

	 let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(!re.exec(email)){
		alert('¡¡¡E-mail no válido!!!');
		return false;
		bandera = 0;
		
	}

	if(comment==="") {
		alert("Nos gustaría conocer tu opinión");
		return false;
		bandera = 0;
		
	}
		
	if(bandera===1){
		alert("Te contactaremos a la brevedad . Muchas Gracias !!!");
	}
}