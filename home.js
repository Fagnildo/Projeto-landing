let setaDireita = window.document.getElementById("seta-direita");    
let leonardo = window.document.getElementById("leonardo");
let samantha = window.document.getElementById("samantha");
let bruna = window.document.getElementById("bruna");
let setaEsquerda = window.document.getElementById("seta-esquerda");

function  rolarparaDireita(){
    leonardo.style = "display:none";
    bruna.style = "display: flex";
    
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex";

}
function  rolarparaEsquerda(){
    leonardo.style = "display:flex";
    bruna.style = "display: none";
    
    setaDireita.style = "display: flex" , "margin-top : 20px";
    setaEsquerda.style = "display: none";
    

}