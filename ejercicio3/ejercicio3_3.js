function comprobartriangulo(l1,l2,l3,a1,a2,a3){
   l1=parseInt(l1);
   l2=parseInt(l2);
   l3=parseInt(l3);
   a1=parseInt(a1);
   a2=parseInt(a2);
   a3=parseInt(a3);
   if (l1<=0 || l2<=0 || l3<=0 || ((a1+a2+a3) !=180))
        {
        document.write('No es un triángulo');
        alert('No es un triángulo');
        console.log('No es un triángulo');
        }
        else
        if (l1==l2 && l1==l3 && l2==l3 && a1==a2 && a1==a3 && a2==a3 && a1+a2+a3 ==180)
            {
            document.write('Triángulo equilátero')
            alert('Triángulo equilátero');
            console.log('Triángulo equilátero');
            }
            else
              if ( ((l1==l2 && l1!=l3) || (l2==l3 && l2!=l1) ||(l1==l3 && l1!=l2)) 
                    && (((a1==a2 && (a1!=a3 || a2!=a3)) && (a1+a2+a3==180)) 
                        || ((a2==a3 && (a2!=a1 || a3!=a1)) && (a1+a2+a3==180))
                        || ((a1==a3 && (a3!=a2||a1!=a2)) && (a1+a2+a3==180))) )
              {
                if (a1==90 || a2==90 ||a3==90)
                {
                document.write('Triángulo isósceles rectángulo');
                console.log('Triángulo isósceles rectángulo');
                alert('Triángulo isósceles rectángulo');      
                }
                else
                {
                document.write('Triángulo isósceles')
                alert('Triángulo isósceles');
                console.log('Triángulo isósceles');
                }
              }
              else
                {
                  if (a1==90 || a2==90 ||a3==90)
                  {
                  document.write('Triángulo escaleno rectángulo');
                  console.log('Triángulo escaleno rectángulo');
                  alert('Triángulo escaleno rectángulo');      
                  }
                  else
                  {
                  document.write('Triángulo escaleno')
                  alert('Triángulo escaleno');
                  console.log('Triángulo escaleno');
                  }
                }
}