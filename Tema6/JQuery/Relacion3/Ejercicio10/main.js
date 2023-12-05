$('document').ready(function(){
    $('#contraseña').change(function (){
        if ($('#contraseña').val().length < 4){
            $('#seguridad').text("No es segura")
        } else if ($('#contraseña').val().length > 8){
            $('#seguridad').text("Muy segura")
        } else {
            $('#seguridad').text("Medianamente segura")
        }
    });
})
