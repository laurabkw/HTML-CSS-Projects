window.onload = function(){
    var time = [];
    time[0] = {
            classificacao: {
                posicao: "1",
                logo: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg",
                nome: "Botafogo"
            },
            pontuacao: {
                pontos: "24",
                jogos: "10",
                vitorias: "8",
                empates: "0",
                derrotas: "2",
                golsMarcados: "18",
                golsContra: "7",
                saldoGols: "11",
                taxaVitorias: "80",
                ultimosJogos: ["D","V","V","D","V"]
            },
        };
        time[1] = {
            classificacao: {
                posicao: "2",
                logo: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg",
                nome: "Palmeiras"
            },
            pontuacao: {
                pontos: "22",
                jogos: "10",
                vitorias: "6",
                empates: "4",
                derrotas: "0",
                golsMarcados: "22",
                golsContra: "8",
                saldoGols: "14",
                taxaVitorias: "73",
                ultimosJogos: ["E","E","E","V","V"]
            },
        };
        time[2] = {
            classificacao: {
                posicao: "3",
                logo: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg",
                nome: "Flamengo"
            },
            pontuacao: {
                pontos: "19",
                jogos: "10",
                vitorias: "6",
                empates: "1",
                derrotas: "3",
                golsMarcados: "21",
                golsContra: "11",
                saldoGols: "10",
                taxaVitorias: "63",
                ultimosJogos: ["V","V","E","V","V"]
            },
        };
        time[3] = {
            classificacao: {
                posicao: "4",
                logo: "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg",
                nome: "Atlético-MG"
            },
            pontuacao: {
                pontos: "18",
                jogos: "10",
                vitorias: "5",
                empates: "3",
                derrotas: "2",
                golsMarcados: "14",
                golsContra: "8",
                saldoGols: "6",
                taxaVitorias: "60",
                ultimosJogos: ["V","V","E","V","E"]
            },
        };
        time[4] = {
            classificacao: {
                posicao: "5",
                logo: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg",
                nome: "Fluminense"
            },
            pontuacao: {
                pontos: "17",
                jogos: "10",
                vitorias: "5",
                empates: "2",
                derrotas: "3",
                golsMarcados: "16",
                golsContra: "11",
                saldoGols: "5",
                taxaVitorias: "56",
                ultimosJogos: ["V","D","D","V","E"]
            },
        };
      
    var partidas = [];
    partidas[0] = {
        informacoes: {
            data: "SÁB 20/05/2023",
            arena: "ITAIPAVA ARENA FONTE NOVA",
            horario: "16:00"
        },
        participantes: {
            nomeTime1: "BAH",
            logoTime1: "https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg",
            contra: "X",
            nomeTime2: "GOI",
            logoTime2: "https://s.sde.globo.com/media/organizations/2021/03/01/GOIAS-2021.svg"
        }
    };
    partidas[1] = {
        informacoes: {
            data: "SÁB 20/05/2023",
            arena: "NILTON SANTOS (ENGENHÃO)",
            horario: "18:30"
        },
        participantes: {
            nomeTime1: "BOT",
            logoTime1: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg",
            contra: "X",
            nomeTime2: "FLU",
            logoTime2: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg"
        }
    };
    partidas[2] = {
        informacoes: {
            data: "SÁB 20/05/2023",
            arena: "MORUMBI",
            horario: "18:30"
        },
        participantes: {
            nomeTime1: "SAO",
            logoTime1: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
            contra: "X",
            nomeTime2: "VAS",
            logoTime2: "https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg"
        }
    }

    var trBody = document.getElementById("tabelaBody");
        let counter = 0;
        let contador = 0;
        while (counter < time.length) {
            var novaTrBody = document.createElement("tr");
            novaTrBody.setAttribute("id", "linhaBody");
            var trBody = document.getElementById("tabelaBody");
            trBody.appendChild(novaTrBody);

            var novaTdBody = document.createElement("td");
            novaTdBody.setAttribute("id", "colunaBody");
            novaTdBody.setAttribute("class", "numeroTabela");
            novaTrBody.appendChild(novaTdBody);
            novaTdBody.innerText = time[counter].classificacao.posicao;

            var novaTdLogo = document.createElement("td");
            novaTdLogo.setAttribute("class", "colunaIcone");
            novaTrBody.appendChild(novaTdLogo);
            var novaImg = document.createElement("img");
            novaImg.setAttribute("src", time[counter].classificacao.logo);
            novaImg.setAttribute("class", "timeLogo nomeTime");
            novaTdLogo.appendChild(novaImg);
            novaImg.innerText = time[counter].classificacao.logo;

            var novaTdBody1 = document.createElement("td");
            novaTdBody1.setAttribute("id", "colunaBody");
            novaTdBody1.setAttribute("class", "nomeTime");
            novaTrBody.appendChild(novaTdBody1);
            novaTdBody1.innerText = time[counter].classificacao.nome;

            var novaTdBody2 = document.createElement("td");
            novaTdBody2.setAttribute("id", "colunaBody");
            novaTdBody2.setAttribute("class", "fundoCinza bold");
            novaTrBody.appendChild(novaTdBody2);
            novaTdBody2.innerText = time[counter].pontuacao.pontos;

            var novaTdBody3 = document.createElement("td");
            novaTdBody3.setAttribute("id", "colunaBody");
            novaTrBody.appendChild(novaTdBody3);
            novaTdBody3.innerText = time[counter].pontuacao.jogos;

            var novaTdBody4 = document.createElement("td");
            novaTdBody4.setAttribute("id", "colunaBody");
            novaTdBody4.setAttribute("class", "fundoCinza");
            novaTrBody.appendChild(novaTdBody4);
            novaTdBody4.innerText = time[counter].pontuacao.vitorias;

            var novaTdBody5 = document.createElement("td");
            novaTdBody5.setAttribute("id", "colunaBody");
            novaTrBody.appendChild(novaTdBody5);
            novaTdBody5.innerText = time[counter].pontuacao.empates;

            var novaTdBody6 = document.createElement("td");
            novaTdBody6.setAttribute("id", "colunaBody");
            novaTdBody6.setAttribute("class", "fundoCinza");
            novaTrBody.appendChild(novaTdBody6);
            novaTdBody6.innerText = time[counter].pontuacao.derrotas;

            var novaTdBody7 = document.createElement("td");
            novaTdBody7.setAttribute("id", "colunaBody");
            novaTrBody.appendChild(novaTdBody7);
            novaTdBody7.innerText = time[counter].pontuacao.golsMarcados;

            var novaTdBody8 = document.createElement("td");
            novaTdBody8.setAttribute("id", "colunaBody");
            novaTdBody8.setAttribute("class", "fundoCinza");
            novaTrBody.appendChild(novaTdBody8);
            novaTdBody8.innerText = time[counter].pontuacao.golsContra;

            var novaTdBody9 = document.createElement("td");
            novaTdBody9.setAttribute("id", "colunaBody");
            novaTrBody.appendChild(novaTdBody9);
            novaTdBody9.innerText = time[counter].pontuacao.saldoGols;

            var novaTdBody10 = document.createElement("td");
            novaTdBody10.setAttribute("id", "colunaBody");
            novaTdBody10.setAttribute("class", "fundoCinza");
            novaTrBody.appendChild(novaTdBody10);
            novaTdBody10.innerText = time[counter].pontuacao.taxaVitorias;
        
            var novaTdBody11 = document.createElement("td");
            novaTdBody11.setAttribute("id", "colunaBody");

            var novaDiv = document.createElement("div");
            novaDiv.setAttribute("class", "vitoriasDerrotas");

            var vde = time[counter].pontuacao.ultimosJogos;
            for(let i = 0; i < vde.length; i++){                    
                var novaSpan1 = document.createElement("span");
                if(vde[i] == "V"){
                    novaSpan1.setAttribute("class", "circulo verde");
                }

                if(vde[i] == "D"){
                    novaSpan1.setAttribute("class", "circulo vermelho");
                }

                if(vde[i] == "E"){
                    novaSpan1.setAttribute("class", "circulo cinza");
                }
                novaDiv.appendChild(novaSpan1);
            }

            novaTrBody.appendChild(novaTdBody11);
            novaTdBody11.appendChild(novaDiv);                
            counter += 1;
        }
        
        var divParente = document.getElementById("divParente");
            while (contador < partidas.length) {
                var novaDivInfo = document.createElement("div");
                novaDivInfo.setAttribute("class", "jogosInfo");
                var divParente = document.getElementById("divParente");
                divParente.appendChild(novaDivInfo);
                
                var spanJogosInfo1 = document.createElement("span");
                var spanJogosInfo2 = document.createElement("span");
                spanJogosInfo2.setAttribute("class", "arena");
                var spanJogosInfo3 = document.createElement("span");
                novaDivInfo.appendChild(spanJogosInfo1);
                novaDivInfo.appendChild(spanJogosInfo2);
                novaDivInfo.appendChild(spanJogosInfo3);
                spanJogosInfo1.innerText = partidas[contador].informacoes.data;
                spanJogosInfo2.innerText = partidas[contador].informacoes.arena;
                spanJogosInfo3.innerText = partidas[contador].informacoes.horario;

                var novaDivPartidas = document.createElement("div");
                divParente.appendChild(novaDivPartidas);
                var divContainerPartidas = document.createElement("div");

                divContainerPartidas.setAttribute("class", "partidas");
                novaDivPartidas.appendChild(divContainerPartidas);

                var spanTime1 = document.createElement("span");
                spanTime1.setAttribute("class", "timeTexto");
                divContainerPartidas.appendChild(spanTime1);
                spanTime1.innerText = partidas[contador].participantes.nomeTime1;

                var imgLogo1 = document.createElement("img");
                imgLogo1.setAttribute("class", "logoTimes");
                imgLogo1.setAttribute("src", partidas[contador].participantes.logoTime1);
                divContainerPartidas.appendChild(imgLogo1);

                var contraX = document.createElement("div");
                contraX.setAttribute("class", "x");
                divContainerPartidas.appendChild(contraX);
                contraX.innerText = partidas[contador].participantes.contra;

                var imgLogo2 = document.createElement("img");
                imgLogo2.setAttribute("class", "logoTimes");
                imgLogo2.setAttribute("src", partidas[contador].participantes.logoTime2);
                divContainerPartidas.appendChild(imgLogo2);

                var spanTime2 = document.createElement("span");
                spanTime1.setAttribute("class", "timeTexto");
                divContainerPartidas.appendChild(spanTime2);
                spanTime2.innerText = partidas[contador].participantes.nomeTime2;

                contador += 1;
            }

    }