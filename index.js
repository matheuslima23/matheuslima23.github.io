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








