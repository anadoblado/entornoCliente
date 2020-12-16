function compruebaTri(lado1, lado2, lado3, alfa, beta, gamma) {
    var sumatorio= parseInt(alfa) + parseInt(beta) + parseInt(gamma);
    var equi = false;
    
    if (lado1 != 0 && lado2 != 0 && lado3 != 0 && sumatorio==180) 
    {
        if(alfa==60 && beta==60 && gamma==60 && lado1==lado2 && lado2==lado3){
            document.write('Equilátero');
            equi=true;
        }
        if((alfa==beta || beta==gamma || alfa==gamma) && (lado1==lado2 || lado2==lado3 || lado1==lado3) && !equi){
            document.write('Isósceles');
        }
        if( (alfa!=beta && beta!=gamma && alfa!=gamma) && (lado1!=lado2 && lado2!=lado3 && lado1!=lado3)){
            document.write('Escaleno');
        }
        if(alfa==90 || beta==90 || gamma==90){
            document.write(" y además es réctangulo.")
        }
    }
    else 
    {
        document.write('No es un triángulo.');
        console.log('No es un triángulo.');
        alert('No es un triángulo.');
    }
}