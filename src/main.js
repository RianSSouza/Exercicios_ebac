const alunos = [
    {
        nome: 'Jett',
        nota: 10 },
    {
        nome: 'Sage',
        nota: 9.5
    },
    {
        nome: 'Clove',
        nota: 4.5
    }
];

const form = document.getElementById('form-aluno');
const listaAlunos = document.getElementById('lista-alunos');
const btnAprovados = document.getElementById('btn-aprovados');
const btnReprovados = document.getElementById('btn-reprovados');
const btnMostrar = document.getElementById('btn-mostrar');
const modal = new bootstrap.Modal(document.getElementById('mostra-alunos'));


function insereAlunos(nome, nota){
    return alunos.push({
        nome: nome,
        nota: nota
    });
}

function filtraAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

function filtraReprovados(alunos) {
    return alunos.filter(aluno => aluno.nota < 6);
}

function mostrarAlunos(alunos){
    listaAlunos.innerHTML = '';

    alunos.forEach(aluno => {
        listaAlunos.innerHTML += `
            <p>Aluno: ${aluno.nome} | Nota: ${aluno.nota}</p>
        `;
    });

    modal.show();
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('form-nome').value;
    const nota = parseFloat(document.getElementById('form-nota').value.replace(',', '.'));
    
    insereAlunos(nome, nota);    
});

btnMostrar.addEventListener('click', function(e){
    e.preventDefault();

    mostrarAlunos(alunos);
});

btnAprovados.addEventListener('click', function(e){
    e.preventDefault();

    const alunosAprovados = filtraAprovados(alunos);

    mostrarAlunos(alunosAprovados);
});

btnReprovados.addEventListener('click', function(e){
    e.preventDefault();

    const alunosReprovados = filtraReprovados(alunos);

    mostrarAlunos(alunosReprovados);
});


