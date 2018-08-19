function start(){
    document.getElementById("content").innerHTML = `
        <p class="descricao">
		Tonalidade de pele é a coloração que se apresenta em cada indivíduo, aos olhos de
	quem a vê. Podendo ser <i>Quente</i> ou <i>Fria</i>. <br /><br />
		<b>Quente:</b> o aspecto da pele se apresenta com um tom dourado e amarelado (aos
	olhos sensação de quente).<br />
		<b>Fria:</b> o aspecto da pele se apresenta com um tom azulado, arroxeado e rosado (aos
	olhos sensação de frio).<br /><br />
		Temos também, uma subdivisão de Quente e Frio, que se enquadra dentro das Quatro Estações: <br />
		<b>Primavera</b> e <b>Outono</b> são peles Quentes;<br />
		<b>Verão</b> e <b>Inverno</b> são peles Frias.
        </p>

        <button class="btn waves-effect waves-light blue lighten-2" onclick="carregarForm();">
            Continuar
        </button>
    `;
}

function carregarForm(){
    $(document).ready(function(){
        $('select').formSelect();
    });

    document.getElementById('titulo-pagina').innerHTML = `Formulário`;

    document.getElementById('content').innerHTML = `
        <div class="row">
        <form action="#" class="col s12" id="formulario">
            <div class="input-field col s12">
                <select id="pulso" required>
                    <option value="" disabled selected>-</option>
                    <option value="verde">Verde</option>
                    <option value="verde-roxo">Verde e Roxo</option>
                    <option value="azul-verde">Azul e Verde</option>
                </select>
                <label for="pulso">Selecione a cor do pulso: </label>
            </div>

            <div class="input-field col s12">
                <select id="olhos" required>
                    <option value="" disabled selected>-</option>
                    <option value="acinzentado">Acinzentado</option>
                    <option value="mdm">Marrom, Dourado ou Mel</option>
                </select>
                <label for="olhos">Selecione a cor de seus olhos: </label>
            </div>

            <div class="input-field col s12">
                <select id="cabelo" required>
                    <option value="" disabled selected>-</option>
                    <option value="acinzentado">Acinzentado</option>
                    <option value="cdm">Cobre, Dourado ou Marrom</option>
                </select>
                <label for="cabelo">Selecione a cor de seus cabelos: </label>
            </div>

            <div class="input-field col s12">
                <select id="orelhas" required>
                    <option value="" disabled selected>-</option>
                    <option value="rosado">Rosado</option>
                    <option value="amarelado">Amarelado</option>
                </select>
                <label for="orelhas">Selecione a cor atrás das orelhas:</label>
            </div>

            <div class="input-field col s12">
                <select id="pano" required>
                    <option value="" disabled selected>-</option>
                    <option value="prata">Prata</option>
                    <option value="dourado">Dourado</option>
                </select>
                <label for="pano">Resultado do Teste do Pano:</label>
            </div>

            <div class="input-field col s12">
                <select id="b-olhos" required>
                    <option value="" disabled selected>-</option>
                    <option value="acinzentado">Acinzentado</option>
                    <option value="amarelado">Amarelado</option>
                </select>
                <label for="b-olhos">Selecione a cor do branco de seus olhos</label>
            </div>

            <button class="btn waves-effect waves-light blue lighten-2" onClick="gerarResultados()">
                Enviar
            </button>
        </form>
        </div>
    `;
    
    // let url = "pages/teste.html";
    // window.location.href = url;
    
    // return false;

    // document.getElementById('content').innerHTML = "<h1>Sucesso!</h1>";
}

// function test(){
//     document.getElementById('testando').submit((e) => {
//         e.preventDefault();
//     });

//     let teste = document.getElementById('teste').value;

//     if(teste == '1'){
//         console.log(teste);
//     }
//     else if(teste == 2){
//         window.location.href = "https://google.com";
//     }
//     else if(teste == 3){
//         window.location.href = "3.html";
//     }
//     else{
//         console.log(teste);
//     }

//     return false;
// }

function processarDados(){
    let result = "";

    let quente = 0;
    let frio = 0;
    let neutro = false;

    const dados = {
        pulso: document.getElementById("pulso").value,
        olhos: document.getElementById("olhos").value,
        cabelo: document.getElementById("cabelo").value,
        orelhas: document.getElementById("orelhas").value,
        pano: document.getElementById("pano").value,
        bOlhos: document.getElementById("b-olhos").value
    }

    if(dados.pulso === "verde"){
        quente++;
    }
    else if(dados.pulso === "verde-roxo" || dados.pulso === "azul-verde"){
        neutro = true;
    }
    if(dados.olhos === "acinzentado"){
        frio++;
    }
    else if(dados.olhos === "mdm"){
        quente++;
    }

    if(dados.cabelo === "acinzentado"){
        frio++;
    }
    else if(dados.cabelo === "cdm"){
        quente++;
    }

    if(dados.orelhas === "rosado"){
        frio++;
    }
    else if(dados.orelhas === "amarelado"){
        quente++;
    }

    if(dados.pano === "prata"){
        frio++;
    }
    else if(dados.pano === "dourado"){
        quente++;
    }

    if(dados.bOlhos === "acinzentado"){
        frio++;
    }
    else if(dados.bOlhos === "amarelado"){
        quente++;
    }

    if(quente === frio){
        neutro = true;
    }
    console.log(`Quente: ${quente}, Frio: ${frio}, Neutro: ${neutro}`);

    if(neutro === true){
        result = "neutro";
    }
    else{
        if(quente > frio){
            result = "quente";
        }
        else if(frio > quente){
            result = "frio";
        }
    }

    return result;
}

function gerarResultados(){
    const resultado = processarDados();

    document.getElementById('titulo-pagina').innerHTML = "Resultado";
    document.getElementById('content').innerHTML = "Resultado...";

    console.log(resultado);
}
