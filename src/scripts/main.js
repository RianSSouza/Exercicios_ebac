const form = document.getElementById("tarefa_form");
const input = document.getElementById("tarefa_form_campo");
const lista = document.querySelector(".tarefa_list ul");

document.querySelectorAll(".btn-excluir").forEach(btn => {
    btn.addEventListener("click", function() {
        btn.parentElement.remove();
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value.trim();
    if (texto === ""){
        alert('Campo em branco');
        return;
    }

    criarTarefa(texto);
    input.value = "";
});


function criarTarefa(texto) {
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.textContent = texto;

    const botao = document.createElement("button");
    botao.textContent = "Excluir";
    botao.type = "button";
    botao.classList.add("btn-excluir");

    botao.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(p);
    li.appendChild(botao);
    lista.appendChild(li);
}
