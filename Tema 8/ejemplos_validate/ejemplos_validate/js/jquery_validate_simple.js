
$(function(){
    $("#formulario").validate({
        rules:{
            'apellnom':{required:true},
            'domicilio':{required:true},
            'fechanac':{required:true,dateISO:true},
            'edad':{required:true,range: [1,120]},
            'nameEmail':
                {
                required:"#baseslegales:checked",
                email:true,
                minlength:8,
                maxlength:20,
                require_from_group: [2, ".grupocontacto"]
                },
            'nameTelefono':
                {
                minlength:9,
                maxlength:9,
                digits:9,
                require_from_group: [2, ".grupocontacto"]
                },
            'nameCorreoPostal':
                {
                
                require_from_group: [2, ".grupocontacto"]
                },
            'estadocivil': { required: true },
            'tarjetabases':{creditcard:true}
        },
        messages:{
            'apellnom': {required:"Nombre y apellidos requerido" },
            'domicilio': {required:"Domicilio requerido" },
            'fechanac': {required:"Fecha requerida",dateISO:'Por favor, introduzca formato de fecha válido' },
            'edad': {required:"Edad requerida",range:'Entre 1 y 120 años' },
            'nameEmail':
                {
                required:'Por favor, acepta las bases legales',
                email: 'Formato de correo no válido',
                minlength: 'Al menos 8 caracteres de longitud',
                maxlength: '20 caracteres como máximo',
                require_from_group: 'Elige al menos 2 métodos de contacto'
                },
            'nameTelefono':
                {
                minlength: 'Requiere 9 números exactamente',
                maxlength: 'Requiere 9 números exactamente',
                digits: "Por favor, solo números",
                require_from_group: 'Elige al menos 2 métodos de contacto'
                },
            'nameCorreoPostal':
                {
               
                require_from_group: 'Elige al menos 2 métodos de contacto'
                },
            'estadocivil':{required: 'Eliga su estado civil de forma obligatoria'},
            'creditcard':{creditcard: 'Formato de tarjeta no válido'}
            },
        submitHandler: function () {
            alert("Enviado!");
            },
        });
});
