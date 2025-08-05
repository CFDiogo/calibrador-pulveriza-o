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
    const valor5Element = getElement('valor5');

    // obtenção dos elementos de resultado 
    const resultadoVazaoTotalElement    = getElement('resultadoVazaoTotal');
    const resultadoVazaoBicoElement     = getElement('resultadoVazaoBico');
    const resultadoVazãoElement         = getElement('resultadoVazão');

    // transformando em numeros flutuantes 
    const velTrat     = parseFloat(valor1Element.value);
    const dosDes      = parseFloat(valor2Element.value);
    const espEntLin   = parseFloat(valor3Element.value);
    const numBic      = parseFloat(valor4Element.value);
    const pressao     = parseFloat(valor5Element.value);

    // validação de entrada pra se os numeros tiverem errados ou se a pessao digitar errado
    if (isNaN(velTrat) || isNaN(dosDes) || isNaN(espEntLin) || isNaN(numBic) || isNaN(pressao) || numBic === 0 || pressao <= 0 || velTrat <= 0 || dosDes <= 0 || espEntLin <= 0) {
        resultadoVazaoTotalElement.textContent = 'Erro: Insira valores válidos ou preencha todos os campos!.';
        resultadoVazaoBicoElement.textContent = ''; // Limpa o segundo campo de resultado
        resultadoVazãoElement.textContent = ''; // Limpa o terceiro campo de resultado
        return;
    }

    // --- conta ---
    const vazTot = (velTrat * dosDes * espEntLin) / 600; 
    const vazPorBic = vazTot / numBic;
    const vazFab = 0.3456 * (pressao ** 0.5008); // Fórmula do fabricante


    // isso não é uma aspas, é uma crase!!
    resultadoVazaoTotalElement.textContent = `Vazão Total: ${vazTot.toFixed(2)} L/min`;
    resultadoVazaoBicoElement.textContent = `Vazão por Bico: ${vazPorBic.toFixed(2)} L/min`;
    resultadoVazãoElement.textContent = `Vazão para bico 015 dada a pressão: ${vazFab.toFixed(2)} L/min`;
}

//espera a tela carregar para começar

window.onload = iniciarApp;

