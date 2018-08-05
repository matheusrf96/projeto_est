function start(){
    document.getElementById("content").innerHTML = `
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>

        <button onclick="carregarForm();">Click</button>
    `;
}

function carregarForm(){
    document.getElementById('content').innerHTML = `
        <h1>O Teste</h1>

        <form id="formulario">
            <div>
                <label for="pulso">Selecione a cor do pulso: </label>
                <select id="pulso">
                    <option value="verde">Verde</option>
                    <option value="verde-roxo">Verde e Roxo</option>
                    <option value="azul-verde">Azul e Verde</option>
                </select>
            </div>

            <div>
                <label for="olhos">Selecione a cor de seus olhos: </label>
                <select id="olhos">
                    <option value="acinzentado">Acinzentado</option>
                    <option value="mdm">Marrom, Dourado ou Mel</option>
                </select>
            </div>

            <div>
                <label for="cabelo">Selecione a cor de seus cabelos: </label>
                <select id="cabelo">
                    <option value="acinzentado">Acinzentado</option>
                    <option value="cdm">Cobre, Dourado ou Marrom</option>
                </select>
            </div>

            <div>
                <label for="orelhas">Selecione a cor atrás das orelhas:</label>
                <select id="orelhas">
                    <option value="rosado">Rosado</option>
                    <option value="amarelado">Amarelado</option>
                </select>
            </div>

            <div>
                <label for="pano">Resultado do Teste do Pano:</label>
                <select id="pano">
                    <option value="prata">Prata</option>
                    <option value="dourado">Dourado</option>
                </select>
            </div>

            <div>
                <label for="b-olhos">Selecione a cor do branco de seus olhos</label>
                <select id="b-olhos">
                    <option value="acinzentado">Acinzentado</option>
                    <option value="dourado">Dourado</option>
                </select>
            </div>

            <input type=submit onClick="gerarResultados()" value="Enviar" />
        </form>
    `;
    
    // let url = "pages/teste.html";
    // window.location.href = url;
    
    // return false;

    // document.getElementById('content').innerHTML = "<h1>Sucesso!</h1>";
}

function gerarResultados(){
    document.getElementById('content').innerHTML = "Resultado...";
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