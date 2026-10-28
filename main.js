function botão(){
let botão = Number(prompt("ALTURA MINIMA PARA ENTRAR NO BRINQUEDO E DE 1,5"));
if(botão >= 1.5){alert("PODE ENTRAR NO BRINQUERO");}
else{alert("NÃO PODE ENTRA POR QUE NÃO TEM O MINIMO DE ALTURA REQUERIDA")};
}
function smart(){
    let smart = Number(prompt("COLOQUE A QUANTIDADE DE PRODUTOS QUE VOCÊ QUE"));
    if(smart <= 5){alert("ESTOQUE ESTÁ BAIXO");}
    else{alert("TEMOS NO ESTOQUE")};
}
function matem(){
let matem = Number(prompt("Se o valor for menor que 756,5 ele estará Isento, senão receberá a Taxa de 10%"));
if(matem <= 756.5){alert("ISENTO");}
else{alert("TAXA DE 10%")};
}
function exerc(){
let  exerc = Number(prompt("Se o nota for maior que 5 será Aprovado, senão será Reprovado"));
if(exerc >= 5){alert("APROVADO");}
else{alert("REPROVADO")};
}
function difer(){
let difer = Number(prompt("ESCOLHA UMA COR"))
if(difer != preto){alert("VERDADEIRO");}
else{alert("FALSO")};
}
function menor(){
let menor = Number(prompt("Se o valor for menor ou igual a 1, ele será um valor Baixo; senão o valor será multiplicado por 100"));
if(menor <= 1){alert("BAIXO");}
else{alert("ALTO")};
}
function igual(){
let igual = String(prompt("Se for o nome for Marisa Acertou, senão exiba Errou"));
if(igual == Marisa){alert("ACERTOU");}
else{alert("FALSO")};
}