console.log("Script Carregado");

function validarFormulario() {
  let ra = document.getElementById("ra").value;
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let ra_ano = ra.slice(0, 4);

  if (ra === "" || nome === "" || email === "" || senha === "") {
    console.log("Preencha todos os campos");
    return false;
  }
  return true;
}