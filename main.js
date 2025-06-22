$(document).ready(function(){

    $('#btn-new').click(function(){
        $('#form-adicionar').fadeIn();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#campo-tarefa').val();
    const novaLinha = `
        <li>
            ${novaTarefa}
            <span>
                <button class="btn-excluir">Excluir</button>
            </span>
        </li>
    `;

        $('.lista-tarefas ul').append(novaLinha);

        $('#campo-tarefa').val('');
    });

    $('#btn-cancelar').click(function(){
        $('#form-adicionar').fadeOut();
        $('#campo-tarefa').val('');
    });

    $(document).on('click', '.lista-tarefas li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).toggleClass('concluida');
        }
    });

    $(document).on('click', '.btn-excluir', function(){
        $(this).closest('li').remove();
    });

});
