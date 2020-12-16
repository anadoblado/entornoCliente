$(function(){
    // uso de jquery validate con nuestro formulario html
    $("#formulario").validate({
        /*reglas de validaciones
            nombre y apellido obligatorios
        */
        rules:{
            'apellido':'required',
            'nombre':'required',
            'hermanos':{required:true,number:true},
            'email':{required:true,email:true},
            'sexo':{required:true,minlength:1},
            'modulos':{required:true,minlength:1},
            'curso':'required'  
        

        },
        // mensajes asociados a las reglas
        messages:{
            'apellido':'Obligatorio',
            'nombre':'Obligatorio',
            'hermanos':'Obligatorio y sólo números',
            'email':'Obligatorio y formato correcto',
            'sexo':'Obligatorio elegir una opción',
            'modulos':'Elegir al menos 1',
            'curso':'Elegir el curso'
            
        },
        debug:true,
        //código a ejecutar cuando el formulario está ya correctamente validado
        submitHandler:function(form){
            console.log("Enviado");
            alert('Formulario rellenado correctamente');
        }
    });

});