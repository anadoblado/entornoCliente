
//poner en blanco el valor por defecto del input que tenga el focus (nombre o apellido)
var apellido=document.getElementById("apellido1");
var nombre=document.getElementById("nombre1");
var domicilio=document.getElementById("domicilio1");

var edad=document.getElementById("edad1");
var sexo=document.getElementById("sexo1");

var curso=document.getElementById("curso1");
var modulos=document.getElementsByName("modulos1");
var ed=document.getElementById("ED");
var bd=document.getElementById("BD");
var prog=document.getElementById("PROG");
var iso=document.getElementById("ISO");
var fol=document.getElementById("FOL");
var dwec=document.getElementById("DWEC");
var dwes=document.getElementById("DWES");
var dew=document.getElementById("DEW");
var diw=document.getElementById("DIW");
var emp=document.getElementById("EMP");

apellido.addEventListener("focus",limpiarCampo);
nombre.addEventListener("focus",limpiarCampo);
domicilio.addEventListener("focus",limpiarCampo);
fechanac.addEventListener("change",rellenaredad);

//activar formulario submit
nombre.addEventListener("change",activarsubmit);
apellido.addEventListener("change",activarsubmit);
domicilio.addEventListener("change",activarsubmit);

ed.addEventListener("change",activarsubmit);
bd.addEventListener("change",activarsubmit);
iso.addEventListener("change",activarsubmit);
prog.addEventListener("change",activarsubmit);
fol.addEventListener("change",activarsubmit);
dwec.addEventListener("change",activarsubmit);
dwes.addEventListener("change",activarsubmit);
dew.addEventListener("change",activarsubmit);
diw.addEventListener("change",activarsubmit);
emp.addEventListener("change",activarsubmit);

curso.addEventListener("change",cambiarmodulos);


function activarsubmit(){
  document.getElementById("Enviar1").disabled=true;
  var activar=true;
  valornombre=nombre.value;
  valorapellido=apellido.value;
  valordomicilio=domicilio.value;
  valorfechanac=fechanac.value;
  if( valornombre == null || valornombre.length == 0 ||  /^\s+$/.test(valornombre) 
  ||  document.getElementById("nombre1").value==document.getElementById("nombre1").getAttribute("value"))
      activar=false;
  if( valorapellido == null || valorapellido.length == 0 ||  /^\s+$/.test(valorapellido) 
      ||  document.getElementById("apellido1").value==document.getElementById("apellido1").getAttribute("value"))
      activar=false;
  if( valordomicilio == null || valordomicilio.length == 0 ||  /^\s+$/.test(valordomicilio) 
      ||  document.getElementById("domicilio1").value==document.getElementById("domicilio1").getAttribute("value"))
      activar=false;
  if( valorfechanac == null)
      activar=false;
  //comprobar si hay algún módulo seleccionado
  var modulosmarcados=false;
  for (var i=0;i<modulos.length;i++){
      if (modulos[i].checked==true){
        modulosmarcados=true;
        }
      }
  if (!modulosmarcados)
      {
      activar=false;
      document.getElementById("Enviar1").disabled=true;
      }
  if (activar){
      document.getElementById("Enviar1").disabled=false;
      }
}


function cambiarmodulos(){
if (curso[curso.selectedIndex].innerHTML=="1º"){
    for (var i=0;i<=4;i++){
      modulos[i].disabled=false;
      modulos[i].checked=true;
      }
    for (var i=5;i<=9;i++){
      modulos[i].checked=false;
      modulos[i].disabled=true;
    }
  }
else
    {
    for (var i=5;i<=9;i++){
    modulos[i].disabled=false;
    modulos[i].checked=true;
    }
    for (var i=0;i<=4;i++){
      modulos[i].checked=false;
      modulos[i].disabled=true;
    }
  }
activarsubmit();
}

function rellenaredad(){
  var fecha = new Date();
  var fecha1 = new Date(document.getElementById('fechanac1').value);
  //convertir a años la diferencia en milisegundo entre los dos objetos fecha
  var annos = Math.floor((fecha.getTime() - fecha1.getTime())/(1000*60*60*24*365));
  document.getElementById("edad1").value=annos;
  document.getElementById("edad1").setAttribute("disabled",true);
}

function limpiarCampo(){
  var nombrecampo=document.activeElement.name;
  var valor=document.getElementById(nombrecampo);
  var valor1=valor.value;
  var valor2=valor.getAttribute("value");
  //comparamos si el valor de campoactual coincide con el atributo value del campo recogido en la variable 
  if (valor1==valor2)
    {
    valor.value="";
    } 
}

//validar todos los elementos del formulario
function validacion(){
    if (!comprobarletranombre1()){
      alert("Nombre obligatorio");
      return false;
    }
    if (!comprobarletrapellido1()){
        alert("apellido obligatorio");
        return false;
    }
    if (!comprobarletradomicilio1()){
      alert("domicilio obligatorio");
      return false;
  }
    if (document.getElementById("fechanac").value=="" || 
            document.getElementById("fechanac").value=="dd/mm/aaaa")
				  {
				  alert("Fecha obligatoria en formato dd/mm/aaaa");
				  document.getElementById("fechanac").focus();
				  return false;
          } 
    return true;
            
  }

//comprobar el máximo de caracteres 
function maximocaracteres(elEvento, maximoCaracteres) {
    var elemento = document.getElementById("observaciones1");
  
    // Obtener la tecla pulsada para iexplorer y otros navegadores
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    
    // Permitir utilizar las teclas del cursor  izquierda y derecha
    if(codigoCaracter == 37 || codigoCaracter == 39) {
      return true;
    }
  
    // Permitir borrar con la tecla retroceso y con la tecla Supr.
    if(codigoCaracter == 8 || codigoCaracter == 46) {
      return true;
    }
    else if(elemento.value.length >= maximoCaracteres ) {
      return false;
    }
    else {
      return true;
      }
  }



  /*
  function activar( formulario,boton ) {
cont=0;
for (i=0; i < formulario.elements.length; i++) {
 if(formulario.elements[i].value != ""){
  cont=cont+1;
 }
 if(boton == ""){
 if(formulario.elements[i].type == "submit"){
 boton=formulario.elements[i].name;
 }
 }
}
if(cont == formulario.elements.length){
 formulario.boton.disabled = false;
} else {
 formulario.boton.disabled = true;
} 
}
*/

  // actualizar el texto de palabras restantes en observaciones, indicando el número de caracteres que quedan
  function actualizaInfo(maximoCaracteres) {
   var elemento = document.getElementById("observaciones1");
   var info = document.getElementById("info");
  
    if(elemento.value.length >= maximoCaracteres ) {
      info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
    }
    else {
      info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-elemento.value.length)+" caracteres adicionales";
    }
  }


//nombre obligatorio borrándose el contenido por defecto "Escriba aquí su Nombre"
function comprobarletranombre1(){
valornombre = document.getElementById("nombre1").value;
if( valornombre == null || valornombre.length == 0 ||  /^\s+$/.test(valornombre) 
||  document.getElementById("nombre1").value==document.getElementById("nombre1").getAttribute("value")){ 
	return false; 
  } 
else return true;

  }
//apellido obligatorio borrándose el contenido por defecto "Escriba aquí sus apellidos"
function comprobarletrapellido1(){
    valorapell = document.getElementById("apellido1").value; 
    if( valorapell == null || valorapell.length == 0 ||  /^\s+$/.test(valorapell)
    ||  document.getElementById("apellido1").value==document.getElementById("apellido1").getAttribute("value") ) { 
      return false; 
      } 
    else return true;
  }

  
//dommicilio obligatorio borrándose el contenido por defecto "Escriba aquí su domicilio"
function comprobarletradomicilio1(){
    valordom = document.getElementById("domicilio1").value; 
    if( valordom == null || valordom.length == 0 ||  /^\s+$/.test(valordom)
    ||  document.getElementById("domicilio1").value==document.getElementById("domicilio1").getAttribute("value") ) { 
      return false; 
      } 
    else return true;
  }

  //introducir solo letras
  function sololetras(e) {
    var codigoasciiletra =e.keyCode;
    var caracter=String.fromCharCode(codigoasciiletra).toLowerCase();
    var letras="qwertyuiopasdfghjklñzxcvbnm ";
    // teclas especiales: 8-retroceso, 164-ñ
    caracteres_especiales="8-164";
    caracter_especial=false;
    //comprobar si es un caracter especial
    for(var i in caracteres_especiales){
        if(codigoasciiletra==caracteres_especiales[i]){
            caracter_especial=true;
            break;
            }
        }
    // rechazar si no es una letra o no es un caracter especial de los especificados
    if(letras.indexOf(caracter)==-1 && !caracter_especial){
        return false;
        }
  }
  