function myFunction() {
  var str = document.getElementById('entrada').value;
//   document.getElementById('original').innerHTML = "Frase Original: "+str;
  var res = str.split("_");
  
//   document.getElementById("demo").innerHTML = "Frase em Array: "+res;
  
  var alternativa = res;
  
  var palavra = "";
  var letra = "";
  for (i = 0; i < alternativa.length; i++){
    alternativa[i] = alternativa[i].split("");
    palavra = palavra + alternativa[i];
    for(y = 0; y < alternativa[i].length; y++){
        // SEPARANDO PALAVRAS PELA PRIMEIRA LETRA
        if(y == 0){
            letra = letra+ " " + alternativa[i][y].toUpperCase();
        }
        else{
            letra = letra + alternativa[i][y];
        }
    }
  }
  document.getElementById("demo2").innerHTML = "Frase Formatada: "+letra;
alert('teste'+num_Audio);
}