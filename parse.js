/*Enviar a database de parse, usando la info de la form en HTML */
$(document).ready(function() {
	
	Parse.initialize("yOiMDicRmn1C5XFixy6rATpRIDOXf4uqOvaUQUm2", "lBGVLTbE2NAqeUEf9j3P53FijIGx8DNsRCKUiUeh");

	var userData = Parse.Object.extend("userData");
	
	$("#emailForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Enviando información");
		

		var data = {};
		data.email = $("#email").val();
		
		var mail = new userData();
		mail.save(data, {
			success:function() {
				console.log("Guardado Exitosamente");
				//Alert for testing purposes //alert("¡Gracias! Muy pronto recibirás noticias sobre Chupe.Mx a " + data.email);
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});
	
});

