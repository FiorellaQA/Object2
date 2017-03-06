document.getElementById("form1").addEventListener("submit", function(e) {
  e.preventDefault();

	function inicio(){
		//OBTENEMOS LOS VALORES DEL INPUT
		var nombre = document.getElementById("name").value.trim();
		var apellido = document.getElementById("lastname").value.trim();
		var email = document.getElementById("input-email").value.trim();
		var password = document.getElementById("input-password").value.trim();
		var select = document.getElementById("select").value;

		//INSTANCIAMOS UN OBJETO bici
		var bici = new Bici(nombre, apellido, email, password, select);
		//LLAMAMOS A SU METODO VALIDATE()
		bici.validate();

		if(bici.hasErrors()){
			var text = "";
			//RECORREMOS EL ARREGLO errors
			bici.errors.forEach(function(elemento, indice){
				text+= elemento.message + "\n";
			});
		alert(text);
		}	
	}
  inicio();
});



//CREANDO EL OBJETO BICI
var Bici = function(nombre, apellido, email, password, select){
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.password = password;
	this.select = select;

	this.errors = []; 
	this.validate = function(){
		if(this.nombre == null || this.nombre == ""){
			this.errors.push(new Error("nombre", "El nombre no debe ser vacío"));
		}
	}
	this.hasErrors = function(){
		//RETORNA LA CANTIDAD DE ERRORES QUE HAY EN EL ARREGLO
		return this.errors.length > 0;
	}
}
// CREANDO EL OBJETO ERROR
var Error = function(title, message){
	this.title = title;
	this.message = message;
}
