
function doStuff(){
    var inputMail = document.getElementById("email").value;

                Parse.initialize("yOiMDicRmn1C5XFixy6rATpRIDOXf4uqOvaUQUm2", "lBGVLTbE2NAqeUEf9j3P53FijIGx8DNsRCKUiUeh");          


    
                var userMail = Parse.Object.extend("userMail");
                var eMail = new userMail();
    event.PreventDefault();     
    eMail.save({email: inputMail

    }, {
        success: function(eMail) {
        alert("Gracias, hemos registrado tu correo.");
    },
    error: function(eMail, error){
        alert("Lo sentimos, hemos encontrado un error: " + error.message);
    }
});