
function validar1() {
  
	const email = document.getElementById("email").value;
	let bandera = 1;
	
	if(email==="") {
		alert("Debe completar los datos");
		return false;
		bandera=0;
	}
	 let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(!re.exec(email)){
		alert('¡¡¡E-mail no válido!!!');
		return false;
		bandera=0;
	}
	
	if(bandera===1){
		alert("Datos Enviados");
		return false;
		
	}
}