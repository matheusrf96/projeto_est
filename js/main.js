function iniciarTeste(){
    let url = "pages/teste.html";
    window.location.href = url;

    return false;
}

function carregarDados(){
    document.getElementById('mainForm').submit((e) => {
        e.preventDefault();
    });

    let nome = document.getElementById('nome').value;
    let valor = document.getElementById('valor').value;

    console.log(nome);
    console.log(valor);
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