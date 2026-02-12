document.addEventListener('DOMContentLoaded', function(){
    const api = 'https://api.github.com/users/RianSSouza';

    async function buscaDados(url) {
        try{
            const resposta = await fetch(url);
            if (!resposta.ok) throw new Error('Erro ao bucar usuário');

                const json = await resposta.json();

                exibeDadosDoPerfil(json);
            
        }catch(erro){
            console.error('Ops! Algo deu errado:', erro);
            alert('Não foi possível carregar os dados do GitHub.');
        }
    }


    function exibeDadosDoPerfil(dados) {
        document.querySelector('#name').innerText = dados.name;
        document.querySelector('#username').innerText = `@${dados.login}`;
        document.querySelector('#avatar').src = dados.avatar_url;
        document.querySelector('#repository').innerText = dados.public_repos;
        document.querySelector('#followers').innerText = dados.followers;
        document.querySelector('#following').innerText = dados.following;
        document.querySelector('#link').href = dados.html_url;
    }

    buscaDados(api);
    
});

