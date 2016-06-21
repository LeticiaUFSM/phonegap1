function calcular() {
   
      var v1 = Number(document.calculoIMC.v1.value);
      var v2 = Number(document.calculoIMC.v2.value);
      
      var soma = v1+v2;
                    
      document.getElementById('resultado').innerHTML = "<br> A soma dos valores é:"+soma;
  }

function gravar() {
   
      var v1 = document.calculoIMC.v1.value;
      var v2 = document.calculoIMC.v2.value;
                          
      localStorage.setItem('valor1',v1);
      localStorage.setItem('valor2',v2);

  }
  
function recuperar() {
   
      var v1 = localStorage.getItem('valor1');
      var v2 = localStorage.getItem('valor2');
	  document.getElementById('resultado').innerHTML = "<br> Os valores gravados sao:"+v1 +"  " +v2;
  }
  
function sair(){
   //console.log("Fechando Aplicação");
   navigator.app.exitApp();
}
