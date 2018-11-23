function start(){
    document.getElementById('titulo-pagina').innerHTML = "Início";

    document.getElementById("content").innerHTML = `
        <p class="descricao">
		De acordo com Hallaweel, a Tonalidade de pele é a coloração que se apresenta em cada indivíduo, aos olhos de
	quem a vê. Podendo ser <i>Quente</i> ou <i>Fria</i>. <br /><br />
		<b>Quente:</b> o aspecto da pele se apresenta com um tom dourado e amarelado (aos
	olhos sensação de quente).<br />
		<b>Fria:</b> o aspecto da pele se apresenta com um tom azulado, arroxeado e rosado (aos
	olhos sensação de frio).<br /><br />
		Temos também, uma subdivisão de Quente e Frio, que se enquadra dentro das Quatro Estações: <br />
		<b>Primavera</b> e <b>Outono</b> são peles Quentes;<br />
		<b>Verão</b> e <b>Inverno</b> são peles Frias.
        </p>

        <button class="btn waves-effect waves-light light-blue lighten-3" onclick="carregarForm();">
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
                    <option value="quente">Verde</option>
                    <option value="frio">Azul ou Roxo</option>
                    <option value="neutro">Verde e Roxo ou Azul e Verde</option>
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
                <label for="orelhas">Selecione a cor que se apresenta, ou seja, que você tem atrás das orelhas:</label>
            </div>

            <div class="input-field col s12">
                <select id="pano" required>
                    <option value="" disabled selected>-</option>
                    <option value="prata">Prata</option>
                    <option value="dourado">Dourado</option>
                </select>
                <label for="pano">Selecione uma das cores que realce sua pele, ou seja, que combine:</label>
            </div>

            <div class="input-field col s12">
                <select id="b-olhos" required>
                    <option value="" disabled selected>-</option>
                    <option value="acinzentado">Acinzentado</option>
                    <option value="amarelado">Amarelado</option>
                </select>
                <label for="b-olhos">Selecione a cor da região branca de seus olhos</label>
            </div>

            <button class="btn waves-effect waves-light light-blue lighten-3" onClick="validarDados()">
                Enviar
            </button>
        </form>
        </div>
    `;
}

function elNotNull(element){
    if (element.length != 0) {
        return element.value;
    }
    else {
        return null;
    }
}

function validarCampo(campo, nomeCampo){    
    if(campo === null){
        document.getElementById('content').innerHTML = `
            O campo "${nomeCampo}" não foi preenchido!
            <br />
            <button class="btn waves-effect waves-light light-blue lighten-3" onClick="carregarForm()">
                Voltar
            </button>
        `;
    }
    else{
        gerarResultados();
    }

}

function validarDados(){
    const dados = {
        pulso: elNotNull(document.getElementById("pulso").value),
        olhos: elNotNull(document.getElementById("olhos").value),
        cabelo: elNotNull(document.getElementById("cabelo").value),
        orelhas: elNotNull(document.getElementById("orelhas").value),
        pano: elNotNull(document.getElementById("pano").value),
        bOlhos: elNotNull(document.getElementById("b-olhos").value)
    }

    validarCampo(dados.bOlhos, "Cor do branco dos olhos");
    validarCampo(dados.pano, "Teste do Pano");
    validarCampo(dados.orelhas, "Cor detrás das orelhas");
    validarCampo(dados.cabelo, "Cor dos Cabelos");
    validarCampo(dados.olhos, "Cor dos Olhos");
    validarCampo(dados.pulso, "Cor do Pulso");
}

function processarDados(){
    let result = {
        resultado: "",
        estacao: ""
    };

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

    if(dados.pulso === "quente"){
        quente++;
    }
    else if(dados.pulso === "frio"){
        frio++;
    }
    else if(dados.pulso === "neutro"){
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

    if(neutro === true){
        result.resultado = "neutro";
    }
    else{
        if(quente > frio){
            result.resultado = "quente";

            if(dados.cabelo === "acinzentado"){
                result.estacao = "outono";
            }
            else if(dados.cabelo === "cdm"){
                result.estacao = "primavera";
            }
        }
        else if(frio > quente){
            result.resultado = "frio";

            if(dados.cabelo === "acinzentado"){
                result.estacao = "verao";
            }
            else if(dados.cabelo === "cdm"){
                result.estacao = "inverno";
            }
        }
    }

    return result;
}

function gerarResultados(){
    const result = processarDados();
    let descricao = "";

    document.getElementById('titulo-pagina').innerHTML = "Resultado";

    if(result.resultado === "neutro"){
        document.getElementById('content').innerHTML = `
            <h3>Seu sub-tom de pele é Neutro!</h3><br />
            <p>
                Nas peles Neutras favorecem-lhes praticamente todas as
                cores, especialmente os tons naturais, como terra e bege (nude).
            </p>
        `;
    }
    else if(result.resultado === "quente"){
        document.getElementById('content').innerHTML = `
            <h3>Seu sub-tom de pele é Quente!</h3>
        `;

        if(result.estacao === "outono"){
            descricao = `
                <h5>Sua estação é Outono</h5>

                DICAS: Mulher Outono tem afinidade com
                tons terrosos, amarelados, vermelho-terra e
                azul-esverdeado.<br />
                Evitar: Cores como cinza, preto e azul-
                marinho, cores frias ou pastéis.<br />
                Melhores Cores: Terra, amarelo-queimado,
                laranja, coral claro, vermelho sangue,
                hortelã, turquesa-escuro, verde-mata,
                verde-militar, e vermelho alaranjado.<br />
                Maquiagem: Optar por tons terrosos aos
                olhos e bochechas, lábios as cores chocolate
                e vinho; rosa claro adaptado ao tom da pele.
            `;
        }
        else if(result.estacao === "primavera"){
            descricao = `
                <h5>Sua estação é Primavera</h5>

                DICAS: Mulher Primavera se favorece
                mais com tons quentes.<br />
                Evitar: Cores como preto, branco e fúcsia,
                destacam mais que a própria cor da pele,
                evitar também acessórios prateados, cores
                azul claro, cinza claro e pastéis.<br />
                Melhores Cores: Laranja, verde, salmão e
                coral, cores vibrantes e claras como azul-
                celeste, amarelo-ouro e tons terrosos. <br />
                Maquiagem: cores de paleta para olhos,
                lábios e blush deve ser tom de pêssego e de
                ouro.
            `;
        }
    }
    else if(result.resultado === "frio"){
        document.getElementById('content').innerHTML = `
            <h3>Seu sub-tom de pele é Frio!</h3>
        `;

        if(result.estacao === "verao"){
            descricao = `
                <h5>Sua estação é Verão</h5>

                DICAS: Mulher Verão é a que mais
                necessita de cores discretas e suaves.<br />
                Evitar: Cores vivas e quentes, castanhos e
                laranjas, pois apagam a expressão e o tom
                de pele.<br />
                Melhores Cores: Cinzento claro e azulado,
                rosa, turquesa, verde, lavanda, azul-água,
                azul-marinho, violeta escura.<br />
                Maquiagem: Cores de paleta para olhos,
                lábios e bush deve ser tom rosado e fresco,
                o ideal é não utilizar blush bronze.
            `;
        }
        else if(result.estacao === "inverno"){
            descricao = `
                <h5>Sua estação é Inverno</h5>

                DICAS: Mulher Inverno é a que fica
                melhor de preto.<br />
                Evitar: Cores mostarda, laranja e tons
                de amarelo; essas cores apagam a pele
                deixando-a pálida.<br />
                Melhores Cores: Prata e branco, cores
                primárias (azul e vermelho), azul Royal,
                vermelho-menta ou contrastantes destas.<br />
                Maquiagem: Principalmente tons de
                violeta ou berinjela, vermelhos vivos e
                intensos nos lábios e olhos e blush
                rosado, são os mais indicados. Tons frios
                e cores neutras.
            `;
        }
    }

    descricao += `
        <br />
        <button class="btn waves-effect waves-light light-blue lighten-3" onClick="carregarForm();">
            Novo Teste
        </button>
    `;

    document.getElementById('content').innerHTML += descricao;
}
