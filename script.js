const API = "https://williammachadocardoso-stack.github.io/IKRPG/";

function carregar() {
  const id = document.getElementById("id").value;

  fetch(API + "?id=" + id)
    .then(r => r.json())
    .then(data => {
      document.getElementById("nome").value = data.nome;
      document.getElementById("classe").value = data.classe;
      document.getElementById("hp").value = data.hp;
      document.getElementById("mana").value = data.mana;
      document.getElementById("forca").value = data.forca;
    });
}

function salvar() {
  const data = {
    id: document.getElementById("id").value,
    nome: document.getElementById("nome").value,
    classe: document.getElementById("classe").value,
    hp: document.getElementById("hp").value,
    mana: document.getElementById("mana").value,
    forca: document.getElementById("forca").value
  };

  fetch(API, {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Salvo!");
}
