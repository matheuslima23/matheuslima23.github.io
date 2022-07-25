function mostrarNome(){
    let nome=document.getElementById("campo-nome").value
    alert(nome)
    document.getElementById("cabeçario").innerHTML=" ola " + nome +" !!!! "
}




function ParOuImpar(){
    let valor=document.getElementById("campo-numerico").value
    valor =parseInt(valor)
    
    if(valor % 2 == 1){alert(valor + " impar!")}
    else{alert(valor+" par!")}
   
}


function entradaDevalor(){
 

  let minimo=parseFloat(document.getElementById("minimo").value )
  let max=parseFloat(document.getElementById("max").value)
  let quantidade=parseFloat(document.getElementById("quantidade").value)

  let valAleatorios=[];
 //numeros=parseInt(numeros)

 for(let i=0;i<quantidade;i++){
    valAleatorios.push(Math.floor(Math.random()*(max-minimo)+minimo));  
}
document.getElementById("resultado").innerHTML=valAleatorios
}

function GeraJogoMega(){
    let njogos=parseInt(document.getElementById("c3-campo"))
      let josgosMega=[]
    for (let i=0;i<njogos;i++){
        josgosMega.push("jogo"+i)

        
    }
    document.getElementById("c3-resultado").innerHTML=josgosMega

    let sorteados=[];
    function sorteio (){
      return Math.floor(Math.random()*60);
    }
    
    while(sorteados.length<6){
      let resultado=sorteio();
       if(sorteados.indexOf(resultado )===-1){
         sorteados.push(resultado )
       }
      }










}


//function CriarJogo(){
    
function soma(){
    let n1=parseFloat(document.getElementById("n1").value);
   let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1+n2
    document.getElementById("c5-resultado").innerHTML=resultado

}
function subtração(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1-n2
    document.getElementById("c5-resultado").innerHTML=resultado
}
function multipliucação(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1*n2
    document.getElementById("c5-resultado").innerHTML=resultado
}
function divisão(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1/n2
    document.getElementById("c5-resultado").innerHTML=resultado
}
















