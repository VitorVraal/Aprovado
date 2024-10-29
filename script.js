function verificarAprovacao() {
    const nota = parseFloat(document.getElementById('nota').value);
    const faltas = parseInt(document.getElementById('faltas').value);
    let resultado;

    if (nota >= 7.0 && faltas <= 20) {
        resultado = "Aluno Aprovado";
    } else {
        resultado = "Aluno Reprovado";
    }

    document.getElementById('resultadoAprovacao').innerText = resultado;
}

function verificarAcesso() {
    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const nomeValido = "Vitor Luiz"; 
    const senhaCorreta = "27092005"; 
    let resultado;

    if (nome === nomeValido && senha === senhaCorreta) {
        resultado = "Acesso Permitido";
    } else {
        resultado = "Acesso Negado";
    }

    document.getElementById('resultadoAcesso').innerText = resultado;
}
