fucntion irPara(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function enviarSolicitacao() {
  const nome = document.getElementyById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("edereco").value.trim();
  const observacao = document.getElementById("observacao").value.trim();

const itens = [. . .document.querySelectorAll(
  'input[name="ajuda"]: checked'
)}.map(item => item.parentElement.innerText
