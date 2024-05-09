
let barra_nivel=document.getElementById('myBar');
let contenedor=document.getElementById('contenedor');
let iniciar=10
let multiplo=10
let nivel=0
let toque=[]
let asiertos=[]



const audio = new Audio("explocion.mp3");


function xx(){
    audio.play();
}
//---------------------------------------------------------------------------
const obtenerNumerosAleatorios = (cantidad) => {
   var min = 1; // Valor mínimo
   var max = 25; // Valor máximo (ajusta según tus necesidades)
   var numerosAleatorios = [];
   while (numerosAleatorios.length < cantidad) {
       var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
       if (!numerosAleatorios.includes(numeroAleatorio)) {
           numerosAleatorios.push(numeroAleatorio);
       }
   }
   return numerosAleatorios;
}
//---------------------------------------------------------------------------


var numerosUnicos = obtenerNumerosAleatorios(5);
//console.log("Números aleatorios únicos: " + numerosUnicos);



for (let index = 1; index < 26; index++) {

    let blok=document.querySelector('#blok'+index)

   blok.onclick= ()=>{
   
   
      // blok.style.background="red"

          if(!toque.includes(index)){


                toque.push(index)
              
                if (numerosUnicos.includes(index)  ) {   
                 
                    if(nivel < 10){
                         nivel=0
                          multiplo=1
                 
                        }else{

                       nivel=nivel-10
                       multiplo++
                     }

            // barra_nivel.style.width = nivel + "%";
             


             alert(multiplo)
              asiertos.push(index)

          }else{

             nivel= (multiplo * iniciar)
            // barra_nivel.style.width = nivel + "%";
              multiplo -- ;
              alert(multiplo)
           }

//    console.log(asiertos)

     //let cuadros = document.getElementById("blok"+index);

      
     
     barra_nivel.innerHTML=""
     for (let index = 0; index < multiplo; index++) {
        barra_nivel.innerHTML += "<img id='misil' src='img/misil.png'>"
       }
     
     
     
     
     if (asiertos.includes(index) ) {
       
          
             // blok.classList.add('explocion');
             blok.innerHTML="<img class='explocion' src='img/explocion.gif'>"
             xx()
             window.setTimeout(function(){
            
                blok.innerHTML="<img class='explocion' src='img/humo.gif'>"
             },700);

             blok.classList.add('bien');
             
         }else{

            blok.innerHTML="<img class='explocion' src='img/explocion.gif'>"
            xx()
            window.setTimeout(function(){
              
               blok.innerHTML="<img class='explocion' src='img/humo.gif'>"
            },700);

            blok.classList.add('fallo');
            // blok.style.background =  "red";
           
         
           }






   if(multiplo == 0){

       contenedor.innerHTML="<h1> As perdido <a href=''>Reintentar</a></h1>"   

       }

       if (asiertos.length > 4) {
       contenedor.innerHTML="<h1> As ganado</h1>"

        }

   }
}
 
}


