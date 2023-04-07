function exibir() {
    var senha = document.getElementById("senha");
    var confirmarSenha = document.getElementById("confirmarSenha");
    if (senha.type === "password" && confirmarSenha.type === "password") {
        senha.type = "text";
        confirmarSenha.type = "text";
    } else {
        senha.type = "password";
        confirmarSenha.type = "password";
    }
}

const senhaInput = document.getElementById("senha");
const confirmarSenhaInput = document.getElementById("confirmarSenha");
const senhaErro = document.getElementById("senhaErro");
const senhaNaoCoincideErro = document.getElementById("senhaNaoCoincideErro");

function validarSenha() {
  const senha = senhaInput.value;
  const confirmarSenha = confirmarSenhaInput.value;
  const regexMaiuscula = /[A-Z]/;

  if (senha.length < 7 || !regexMaiuscula.test(senha)) {
    senhaErro.style.display = "block";
    senhaNaoCoincideErro.style.display = "none";
    senhaInput.classList.add("borda-vermelha");
    confirmarSenhaInput.classList.remove("borda-verde");
    confirmarSenhaInput.classList.add("borda-vermelha");
    return false;
  } else if (senha === confirmarSenha) {
    senhaErro.style.display = "none";
    senhaNaoCoincideErro.style.display = "none";
    senhaInput.classList.remove("borda-vermelha");
    confirmarSenhaInput.classList.remove("borda-vermelha");
    confirmarSenhaInput.classList.add("borda-verde");
    return true;
  } else {
    senhaErro.style.display = "none";
    senhaNaoCoincideErro.style.display = "block";
    senhaInput.classList.remove("borda-vermelha");
    confirmarSenhaInput.classList.remove("borda-verde");
    confirmarSenhaInput.classList.add("borda-vermelha");
    return false;
  }
}