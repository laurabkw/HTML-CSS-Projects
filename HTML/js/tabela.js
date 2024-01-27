function openNav(){
    document.getElementById("menuLateral").style = "transform: translateX(0%);";
    document.getElementById("fecharMenu").style.display = "block";
}

function closeMenu(){
    document.getElementById("menuLateral").style = "transform: translateX(-100%);";
    document.getElementById("fecharMenu").style.display = "none";
}

function abrirMosaicoA(){
    document.getElementById("timesSerieA").style.display = "flex";
    document.getElementById("timesSerieB").style.display = "none";
    document.getElementById("timesEuropa").style.display = "none";
    document.getElementById("botaoAtivoA").style.borderBottom = "2px solid #06AA48";
    document.getElementById("botaoAtivoA").style.color = "#06AA48";

    // js para as outras opções
    document.getElementById("botaoAtivoB").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoEuropa").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoB").style.color = "rgb(209, 208, 208)";
    document.getElementById("botaoAtivoEuropa").style.color = "rgb(209, 208, 208)";
}

function abrirMosaicoB(){
    document.getElementById("timesSerieA").style.display = "none";
    document.getElementById("timesSerieB").style.display = "flex";
    document.getElementById("timesEuropa").style.display = "none";
    document.getElementById("botaoAtivoB").style.borderBottom = "2px solid #06AA48";
    document.getElementById("botaoAtivoB").style.color = "#06AA48";

    // js para as outras opções
    document.getElementById("botaoAtivoA").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoEuropa").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoA").style.color = "rgb(209, 208, 208)";
    document.getElementById("botaoAtivoEuropa").style.color = "rgb(209, 208, 208)";
}

function abrirMosaicoEuropa(){
    document.getElementById("timesSerieA").style.display = "none";
    document.getElementById("timesSerieB").style.display = "none";
    document.getElementById("timesEuropa").style.display = "flex";
    document.getElementById("botaoAtivoEuropa").style.borderBottom = "2px solid #06AA48";
    document.getElementById("botaoAtivoEuropa").style.color = "#06AA48";

    // js para as outras opções
    document.getElementById("botaoAtivoA").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoB").style.border = "1px solid rgb(209, 208, 208)";
    document.getElementById("botaoAtivoA").style.color = "rgb(209, 208, 208)";
    document.getElementById("botaoAtivoB").style.color = "rgb(209, 208, 208)";
}

window.onload = function(){
    // requisição ajax para popular a tabela
    $.ajax({
        type: "GET",           
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
        headers: {'Authorization': 'Bearer test_deeb96f38a82b48125c88dc8d116e6'},
        contentType: 'json',
        dataType: 'json',
        success: function(response){
            montaTabela(response);
        }
    });

    // requisição ajax para popular a artilharia
    $.ajax({
        type: "GET",           
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/artilharia",
        headers: {'Authorization': 'Bearer test_deeb96f38a82b48125c88dc8d116e6'},
        contentType: 'json',
        dataType: 'json',
        success: function(response){
            montaArtilharia(response);
        }
    });

    buscaDadosRodada(14);
}

function buscaDadosRodada(rodada){
    // requisição ajax para popular o campo dos jogos
    $.ajax({
        type: "GET",           
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/" + rodada,
        headers: {'Authorization': 'Bearer test_deeb96f38a82b48125c88dc8d116e6'},
        contentType: 'json',
        dataType: 'json',
        success: function(response){
            montaPartidas(response);
        }
    });
}

function rodadaAnterior(){
    var infoRodadaAnterior = document.getElementById("rodadaAnterior").value;
    if(infoRodadaAnterior === null){
        return;
    }

    buscaDadosRodada(infoRodadaAnterior);

}

function proximaRodada(){
    var infoProximaRodada = document.getElementById("rodadaProxima").value;
    if(infoProximaRodada === null){
        return;
    }
    buscaDadosRodada(infoProximaRodada);
}

function montaTabela(retornoApi)
{
    var tabelaBody = document.getElementById("tabelaBody");
        let counter = 0;
        while (counter < retornoApi.length) {
            var linhaBody = document.createElement("tr");
            linhaBody.setAttribute("id", "linhaBody");
            var tabelaBody = document.getElementById("tabelaBody");
            tabelaBody.appendChild(linhaBody);

            var numeroTabela = document.createElement("td");
            numeroTabela.setAttribute("id", "colunaBody");
            numeroTabela.setAttribute("class", "numeroTabela");
            linhaBody.appendChild(numeroTabela);
            numeroTabela.innerText = retornoApi[counter].posicao;

            var nomeTime = document.createElement("td");
            nomeTime.setAttribute("id", "colunaBody");
            nomeTime.setAttribute("class", "nomeTime");
            linhaBody.appendChild(nomeTime);
            nomeTime.innerText = retornoApi[counter].time.nome_popular;

            var fundoCinzaBold = document.createElement("td");
            fundoCinzaBold.setAttribute("id", "colunaBody");
            fundoCinzaBold.setAttribute("class", "fundoCinza bold");
            linhaBody.appendChild(fundoCinzaBold);
            fundoCinzaBold.innerText = retornoApi[counter].pontos;

            var fundoCinza1 = document.createElement("td");
            fundoCinza1.setAttribute("id", "colunaBody");
            linhaBody.appendChild(fundoCinza1);
            fundoCinza1.innerText = retornoApi[counter].jogos;

            var fundoCinza2 = document.createElement("td");
            fundoCinza2.setAttribute("id", "colunaBody");
            fundoCinza2.setAttribute("class", "fundoCinza");
            linhaBody.appendChild(fundoCinza2);
            fundoCinza2.innerText = retornoApi[counter].vitorias;

            var fundoCinza3 = document.createElement("td");
            fundoCinza3.setAttribute("id", "colunaBody");
            linhaBody.appendChild(fundoCinza3);
            fundoCinza3.innerText = retornoApi[counter].empates;

            var fundoCinza4 = document.createElement("td");
            fundoCinza4.setAttribute("id", "colunaBody");
            fundoCinza4.setAttribute("class", "fundoCinza");
            linhaBody.appendChild(fundoCinza4);
            fundoCinza4.innerText = retornoApi[counter].derrotas;

            var fundoCinza5 = document.createElement("td");
            fundoCinza5.setAttribute("id", "colunaBody");
            linhaBody.appendChild(fundoCinza5);
            fundoCinza5.innerText = retornoApi[counter].gols_pro;

            var fundoCinza6 = document.createElement("td");
            fundoCinza6.setAttribute("id", "colunaBody");
            fundoCinza6.setAttribute("class", "fundoCinza");
            linhaBody.appendChild(fundoCinza6);
            fundoCinza6.innerText = retornoApi[counter].gols_contra;

            var fundoCinza7 = document.createElement("td");
            fundoCinza7.setAttribute("id", "colunaBody");
            linhaBody.appendChild(fundoCinza7);
            fundoCinza7.innerText = retornoApi[counter].saldo_gols;

            var fundoCinza8 = document.createElement("td");
            fundoCinza8.setAttribute("id", "colunaBody");
            fundoCinza8.setAttribute("class", "fundoCinza");
            linhaBody.appendChild(fundoCinza8);
            fundoCinza8.innerText = retornoApi[counter].aproveitamento;
        
            var colunaBody = document.createElement("td");
            colunaBody.setAttribute("id", "colunaBody");

            var novaDiv = document.createElement("div");
            novaDiv.setAttribute("class", "vitoriasDerrotas");

            var vde = retornoApi[counter].ultimos_jogos;
            for(let i = 0; i < vde.length; i++){                    
                var spanUltimosJogos = document.createElement("span");
                if(vde[i].toUpperCase() == "V"){
                    spanUltimosJogos.setAttribute("class", "circulo verde");
                }

                if(vde[i].toUpperCase() == "D"){
                    spanUltimosJogos.setAttribute("class", "circulo vermelho");
                }

                if(vde[i].toUpperCase() == "E"){
                    spanUltimosJogos.setAttribute("class", "circulo cinza");
                }
                novaDiv.appendChild(spanUltimosJogos);
            }

            linhaBody.appendChild(colunaBody);
            colunaBody.appendChild(novaDiv);                
            counter += 1;
        }
}



function montaPartidas(retornoApi){
    var infoRodadaAnterior = document.getElementById("rodadaAnterior");
    if(retornoApi.rodada_anterior === null){
        infoRodadaAnterior.value = null;
        document.getElementById("desabilitado").style.opacity = "40%";
        document.getElementById("desabilitado").style.cursor = "not-allowed";
    }
    else{
        infoRodadaAnterior.value = retornoApi.rodada_anterior.rodada;
    }

    var infoProximaRodada = document.getElementById("rodadaProxima");
    if(retornoApi.proxima_rodada === null){
        infoProximaRodada.value = null;
    }
    else{
        infoProximaRodada.value = retornoApi.proxima_rodada.rodada;
    }



        var diaSemanaArray = ["", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"];

       var divParente = document.getElementById("divParente");
       divParente.innerHTML = "";
        let contador = 0;
        console.log(retornoApi);            
        var divRodada = document.createElement("div");
        divRodada.setAttribute("class", "rodadaTexto");
        divRodada.innerText = retornoApi.nome;
        var rodadaTexto = document.getElementById("rodadaTextoParente");
        rodadaTexto.innerHTML = "";
        rodadaTexto.appendChild(divRodada);

        while (contador < retornoApi.partidas.length) {
            var novaDivInfo = document.createElement("div");
            novaDivInfo.setAttribute("class", "jogosInfo");
            var divParente = document.getElementById("divParente");
            divParente.appendChild(novaDivInfo);
                
            var spanJogosData = document.createElement("span");
            var spanJogosArena = document.createElement("span");
            spanJogosArena.setAttribute("class", "arena");
            var spanJogosHorario = document.createElement("span");
            novaDivInfo.appendChild(spanJogosData);
            novaDivInfo.appendChild(spanJogosArena);
            novaDivInfo.appendChild(spanJogosHorario);

            var Xmas95 = new Date(retornoApi.partidas[contador].data_realizacao_iso);
            var weekday = Xmas95.getDay();
            var diaDaSemana = diaSemanaArray[weekday];

            spanJogosData.innerText = diaDaSemana + " " + retornoApi.partidas[contador].data_realizacao;
            spanJogosArena.innerText = retornoApi.partidas[contador].estadio.nome_popular.toUpperCase();
            spanJogosHorario.innerText = retornoApi.partidas[contador].hora_realizacao;

            var novaDivPartidas = document.createElement("div");
            divParente.appendChild(novaDivPartidas);
            var divContainerPartidas = document.createElement("div");
            divContainerPartidas.setAttribute("class", "partidas");
            novaDivPartidas.appendChild(divContainerPartidas);

            var spanTime1 = document.createElement("span");
            spanTime1.setAttribute("class", "timeSigla");
            divContainerPartidas.appendChild(spanTime1);
            spanTime1.innerText = retornoApi.partidas[contador].time_mandante.sigla;

            var spanTime1Extenso = document.createElement("span");
            spanTime1Extenso.setAttribute("class", "timeExtenso");
            divContainerPartidas.appendChild(spanTime1Extenso);
            spanTime1Extenso.innerText = retornoApi.partidas[contador].time_mandante.nome_popular;

            var imgLogo1 = document.createElement("img");
            imgLogo1.setAttribute("class", "logoTimes");
            imgLogo1.setAttribute("src", retornoApi.partidas[contador].time_mandante.escudo);
            divContainerPartidas.appendChild(imgLogo1);

            var contraX = document.createElement("div");
            contraX.setAttribute("class", "x");
            contraX.innerText = "x";
            divContainerPartidas.appendChild(contraX);

            var imgLogo2 = document.createElement("img");
            imgLogo2.setAttribute("class", "logoTimes");
            imgLogo2.setAttribute("src", retornoApi.partidas[contador].time_visitante.escudo);
            divContainerPartidas.appendChild(imgLogo2);

            var spanTime2 = document.createElement("span");
            spanTime2.setAttribute("class", "timeSigla");
            divContainerPartidas.appendChild(spanTime2);
            spanTime2.innerText = retornoApi.partidas[contador].time_visitante.sigla;

            var spanTime2Extenso = document.createElement("span");
            spanTime2Extenso.setAttribute("class", "timeExtenso");
            divContainerPartidas.appendChild(spanTime2Extenso);
            spanTime2Extenso.innerText = retornoApi.partidas[contador].time_visitante.nome_popular;

            contador += 1;
        }
}

function montaArtilharia(retornoApi){
    var artilhariaContainer = document.getElementById("artilhariaInfo");
    var artilhariaPos = 0;

        let contadorArtilharia = 0;
        while (contadorArtilharia < retornoApi.length) {
            var divJogador = document.createElement("div");
            divJogador.setAttribute("class", "divJogador");
            artilhariaContainer.appendChild(divJogador);

            var artilhariaPosicao = document.createElement("div");
            artilhariaPosicao.setAttribute("class", "artilhariaPosicao");
            // artilhariaPosicao.innerText = "1";
            divJogador.appendChild(artilhariaPosicao);

            var infoJogador = document.createElement("div");
            infoJogador.setAttribute("class", "infoJogador");
            divJogador.appendChild(infoJogador);

            var imgEscudo = document.createElement("img");
            imgEscudo.setAttribute("class", "imgEscudo");
            imgEscudo.setAttribute("src", retornoApi[contadorArtilharia].time.escudo);
            infoJogador.appendChild(imgEscudo);
            // cria o imgEscudo primeiro

            // cria o imgJogador depois mas posiciona ele antes do imgEscudo
            var imgJogador = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="imgJogador" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>';          
            imgEscudo.insertAdjacentHTML("beforebegin", imgJogador);

            var jogadorBlock = document.createElement("div");
            jogadorBlock.setAttribute("class", "jogadorBlock");
            infoJogador.appendChild(jogadorBlock);

            var nomeArtilheiro = document.createElement("div");
            nomeArtilheiro.setAttribute("class", "nomeArtilheiro");
            nomeArtilheiro.innerText = retornoApi[contadorArtilharia].atleta.nome_popular;
            jogadorBlock.appendChild(nomeArtilheiro);

            var funcao = document.createElement("div");
            funcao.setAttribute("class", "funcao");
            if(Array.isArray(retornoApi[contadorArtilharia].atleta.posicao)){
                funcao.innerText = "--------";
            }
            else{
                funcao.innerText = retornoApi[contadorArtilharia].atleta.posicao.nome;
            }
            jogadorBlock.appendChild(funcao);

            var numGols = document.createElement("div");
            numGols.setAttribute("class", "numGols");
            numGols.innerText = retornoApi[contadorArtilharia].gols;
            divJogador.appendChild(numGols);


            if(contadorArtilharia == 0){
                artilhariaPos = 1;
                artilhariaPosicao.innerText = artilhariaPos;
            }
            else if(retornoApi[contadorArtilharia].gols < retornoApi[contadorArtilharia-1].gols){
                artilhariaPos++;
                artilhariaPosicao.innerText = artilhariaPos;
            }

            contadorArtilharia += 1;
        }
}


// var array = [25,25,23,22,22];


// array.length //5


// var contador = 0;
// var posicaoArilharia = 0;
// for(contador; contador < array.length; contador++){
//     if(contador == 0){
//         posicaoArilharia = 1;
//     }
//     else if(array[contador] < array[contador-1]){
//         posicaoArilharia++;
//     }
// }





















