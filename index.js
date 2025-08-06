// função auxiliar para obter elementos por ID la do HTML
const getElement = (id) => document.getElementById(id);

// esse event listener é uma função aplicada no botão de calcuilar que só vai mostrar algo na tela quando o botao for clicado
function iniciarApp() {
    const btnCalcular = getElement('btnCalcular');
    btnCalcular.addEventListener('click', fazerCalculo);
}

function fazerCalculo() {
    // obtenção dos elementos de input
    const valor1Element = getElement('valor1');
    const valor2Element = getElement('valor2');
    const valor3Element = getElement('valor3');
    const valor4Element = getElement('valor4');
    

    // obtenção dos elementos de resultado 
    const resultadoVazaoTotalElement    = getElement('resultadoVazaoTotal');
    const resultadoVazaoBicoElement     = getElement('resultadoVazaoBico');
    const resultadoPressReqElement      = getElement('resultadoPressReq');

    // transformando em numeros flutuantes 
    const velTrat     = parseFloat(valor1Element.value);
    const dosDes      = parseFloat(valor2Element.value);
    const espEntLin   = parseFloat(valor3Element.value);
    const numBic      = parseFloat(valor4Element.value);
    //const pressao     = parseFloat(valor5Element.value);

    // validação de entrada pra se os numeros tiverem errados ou se a pessao digitar errado
    if (isNaN(velTrat) || isNaN(dosDes) || isNaN(espEntLin) || isNaN(numBic) || numBic === 0 || velTrat <= 0 || dosDes <= 0 || espEntLin <= 0) {
        resultadoVazaoTotalElement.textContent = 'Erro: Insira valores válidos ou preencha todos os campos!.';
        resultadoVazaoBicoElement.textContent = ''; // Limpa o segundo campo de resultado
        resultadoPressReqElement.textContent = ''; // Limpa o terceiro campo de resultado
        return;
    }

    // --- conta ---
    const vazTot    = (velTrat * dosDes * espEntLin) / 600; 
    const vazPorBic = vazTot / numBic;
    const presReq   = 2526.1*(vazPorBic**4) - 8959.7*(vazPorBic**3) + 11932*(vazPorBic**2) - 6860*(vazPorBic) + 1482.2// Fórmula do fabricante
   

    // isso não é uma aspas, é uma crase!!
    resultadoVazaoTotalElement.textContent   = `Vazão Total: ${vazTot.toFixed(2)} L/min`;
    resultadoVazaoBicoElement.textContent    = `Vazão por Bico: ${vazPorBic.toFixed(2)} L/min`;
    resultadoPressReqElement.textContent     = `Pressão requerida : ${presReq.toFixed(2)} PSI`;
}

//espera a tela carregar para começar

window.onload = iniciarApp;
