// document.querySelector("#nomeId"); usar para procurar por um ID com um nome específico
// document.querySelector(".NomeClasse"); usar para procurar por uma classe com um nome específico

// usar para procurar elementos (div, p, h1, h2, ...)
// $("p");

// procurando por um elementos com o ID abaixo
// $("#minhaDiv");

window.onload = function(){
    $("#esconder").click(function(){
        esconder();
    });
    $("#exibir").click(function(){
        exibir();
    });
}

function esconder(){
    $("#minhaDiv").slideUp();
}
function exibir(){
    $("#minhaDiv").slideDown();
}