// Trabalhando com array
//===============================================
//var lista = ["Maçã", "Pera", "Laranja"];

// Exibir um item específico da lista
//alert(lista[2]);

// Adicionar mais um item na lista
//lista.push("Uva");

//remover o ultimo item da lista
//lista.pop();

//Ver a quantidade de item da lista
//alert(lista.length);

//Mosta u0 caractere da posição na string
//alert(lista.toString()[5]);

//Mostra um traço entre os item da lista
//alert(lista.join(" - "));
//===============================================

//===============================================
// Dicionário
/*
var fruta = {nome:"Maça", cor:"Vermelha", tipo:"Argentina"}
console.log(fruta);
alert(fruta.nome);
*/
/* Varios dicionários
var frutas = [
    {nome:"Maça", cor:"Vermelha", tipo:"Argentina"},
    {nome:"Uva", cor:"Verde", tipo:"Itália"}
];
console.log(frutas);
alert(frutas[1].nome);
*/
//===============================================

//===============================================
// Validação de idade
/*
var idade = prompt("Qual sua idade?","somente numero");

if(idade <= 18){
    alert("Pessoa menor de idade");
} else {
    alert("Pessoa responsável pelo seus atos...")
}
*/

//===============================================

/*===============================================
// Estrutura de repetição com WHILE
var count = 0;
while(count <= 5){
    console.log(count);
    count = count+1;
    //Ou pode usar
    //count++;
};

// Estrutura de repetição com WHILE
var count;
for(count=0; count<= 5; count++){
    console.log(count);
}
*/ //===============================================

/*/===============================================
//Trabalhando com Data

var d = new Date();
//Data completa
//alert(d);
//alert("Hoje é " + d.getDate() + "/" + (d.getMonth()+1) +"/"+ d.getFullYear());
//console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1) +"/"+ d.getFullYear());
*/ //===============================================

/*/===============================================
//Trabalhando com Funções
function primeiro_script(){
    var nome = "Huan Azevedo";
    alert("Meu primeiro script, seja bem vindo " + nome);
}

function soma(n1, n2){
    return n1 + n2;
}
    alert(soma(5,10));

function setReplace(frase, palavra, nova_palavra){
    return frase.replace(palavra, nova_palavra);
}
    alert(setReplace("A mulher é muito feia", "feia", "linda"))

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = "Você é Responsável";
    } else {
        validar = "Você é de menor";
    }
    return validar;
}
idade = prompt("QUal sua idade","");
console.log(validaIdade(idade));
*/ //===============================================

//===============================================
//Manipulação de elementos do HTML
function botaoOn(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    document.getElementById('btnClick').innerHTML = "Click 2 Vezes";
}
function botaoOff(){
    document.getElementById("agradecimento").innerHTML = "";
    document.getElementById('btnClick').innerHTML = "Click aqui"
}

function redirecionar(){
    //window.location.href = "http://www.google.com.br";
    //window.open("http://www.google.com.br");
}

function mouseOn(elemento){
    elemento.innerHTML = "Passou o mouse";
}
function mouseOut(elemento){
    //document.getElementById(this).innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function obrigado(){
    alert("Obrigado por visitar minha página");
}

function selecao(elemento){
    if(elemento.value >0){
        document.getElementById('selecionado').innerHTML = "Você selecionou a opção: " + elemento.value;
    } else {
        document.getElementById('selecionado').innerHTML = "";
    }

}