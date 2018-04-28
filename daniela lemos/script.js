window.onload=function(){
  const nomDiv=div=>document.getElementById(div);

 //operación de suma (se multiplican los dneominadores, y se multiplican en cruz después)
  const CalcSuma=()=>{
     let Numerador1 = nomDiv("Numerador 1").value;
     let Denominador1 = nomDiv("Denominador 1").value;
     let Numerador2= nomDiv("Numerador 2").value;
     let Denominador2 = nomDiv("Denominador 2").value;

     if (Numerador1.length===0||Numerador2.length===0||
          Denominador1.length===0||Denominador2.length===0) {  

        alert("Especifique un valor para cada casilla");
         nomDiv(Numerador1.length===0? "Numerador1":" Numerador2"," Denominador1"," Denominador2").focus();
       } else{
         const res1=(Numerador1*Denominador2) + (Denominador1*Numerador2);
         const res2=(Denominador1*Denominador2);
         nomDiv("Respuesta").innerHTML="La suma es "+res1+ "/" +res2;
   }
      
};
   //operación de resta
    const CalcRest=()=>{
       let Numerador1 = nomDiv("Numerador 1").value;
       let Denominador1 = nomDiv("Denominador 1").value;
       let Numerador2= nomDiv("Numerador 2").value;
       let Denominador2 = nomDiv("Denominador 2").value; 

       if (Numerador1.length===0||Numerador2.length===0||
            Denominador1.length===0||Denominador2.length===0) {  
           alert("Especifique un valor para cada casilla");
           nomDiv(Numerador1.length===0? "Numerador1":" Numerador2"," Denominador1"," Denominador2").focus();
         } else{
           const res1=(Numerador1*Denominador2) - (Denominador2*Numerador2);
           const res2=(Denominador1*Denominador2);
           nomDiv("Respuesta").innerHTML="La Resta es "+res1+ "/" +res2;
     }
        
};
   //operación de multiplción
    const CalcMult=()=>{
       let Numerador1 = nomDiv("Numerador 1").value;
       let Denominador1 = nomDiv("Denominador 1").value;
       let Numerador2= nomDiv("Numerador 2").value;
       let Denominador2 = nomDiv("Denominador 2").value;

       if (Numerador1.length===0||Numerador2.length===0||
            Denominador1.length===0||Denominador2.length===0) {  
           alert("Especifique un valor para cada casilla");
           nomDiv(Numerador1.length===0? "Numerador1":" Numerador2"," Denominador1"," Denominador2").focus();
         }else{
           const res1=(Numerador1*Numerador2);
           const res2=(Denominador1*Denominador2);
           nomDiv("Respuesta").innerHTML="La Multiplicación es "+res1+ "/" +res2;
     }
        
};
   //operación de división 
    const CalcDiv=()=>{
       let Numerador1 = nomDiv("Numerador 1").value;
       let Denominador1 = nomDiv("Denominador 1").value;
       let Numerador2= nomDiv("Numerador 2").value;
       let Denominador2 = nomDiv("Denominador 2").value;

       if (Numerador1.length===0||Numerador2.length===0||
            Denominador1.length===0||Denominador2.length===0) {  
           alert("Especifique un valor para cada casilla");
           nomDiv(Numerador1.length===0? "Numerador1":" Numerador2"," Denominador1"," Denominador2").focus();
         }else{
           const res1=(Numerador1*Denominador2);
           const res2=(Denominador1*Numerador2);
           nomDiv("Respuesta").innerHTML="La División es "+res1+ "/" +res2;
     }
        
  };

   
nomDiv("Sumar").addEventListener("click",event =>{
    CalcSuma();
});
nomDiv("Restar").addEventListener("click",event =>{
    CalcRest();
});
nomDiv("Multiplicar").addEventListener("click",event =>{
    CalcMult();
});
nomDiv("Dividir").addEventListener("click",event =>{
    CalcDiv();
});


};