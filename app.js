// [R1] - Dados do Catálogo
const filmes = [
    {id: 1, nome: "O Poderoso Chefão", categoria: "crime", ano: 1972, nota: 9.2, assistido: false, descricao: "Um clássico do cinema dirigido por Francis Ford Coppola."},
    {id: 2, nome: "O Senhor dos Anéis: O Retorno do Rei", categoria: "aventura", ano: 2003, nota: 8.8, assistido: true, descricao: "Um épico de fantasia baseado no livro de J.R.R. Tolkien."},
    {id: 3, nome: "Pulp Fiction", categoria: "crime", ano: 1994, nota: 8.9, assistido: true, descricao: "Um filme de crime e drama."},
    {id: 4, nome: "A Origem", categoria: "ficcao", ano: 2010, nota: 8.8, assistido: false, descricao: "Um thriller de ficção científica dirigido por Christopher Nolan."},
    {id: 5, nome: "O Silêncio dos Inocentes", categoria: "terror", ano: 1991, nota: 8.6, assistido: true, descricao: "Um suspense psicológico dirigido por Jonathan Demme."},
    {id: 6, nome: "Titanic", categoria: "romance", ano: 1997, nota: 7.8, assistido: true, descricao: "Um filme de romance e drama dirigido por James Cameron."},
    {id: 7, nome: "A Bela e a Fera", categoria: "romance", ano: 1991, nota: 8.0, assistido: false, descricao: "Um clássico da Disney baseado no conto de fadas, onde um príncipe é transformado em uma fera."},
    {id: 8, nome: "O Exorcista", categoria: "terror", ano: 1973, nota: 8.0, assistido: true, descricao: "Um filme de terror dirigido por William Friedkin."},
    {id: 9, nome: "Os Simpsons: O filme", categoria: "comedia", ano: 2007, nota: 8.0, assistido: true, descricao: "Um filme animado de comédia."},
    {id: 10, nome: "A Viagem de Chihiro", categoria: "animacao", ano: 2001, nota: 8.6, assistido: false, descricao: "Um filme de animação japonês dirigido por Hayao Miyazaki."}
];
// [R1] Objeto principal do catálogo
const catalogo = {
    nome: "Catálogo de Filmes",
    itens: filmes, 
    adicionar(item) {
        this.itens.push(item);
    },

    contar() {
        return this.itens.length;
    }
};

// [R2] - Renderização dinâmica
// Uso da IA: usada para pesquisar fontes que explicam apenas como aplicar a renderização dinâmica de conteúdo
function renderizar(lista) {
    const conteneur = document.getElementById('lista');

    conteneur.innerHTML = '';

    if (lista.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.classList.add('vazio');
        mensagem.textContent = "Nenhum item encontrado";
        conteneur.appendChild(mensagem);
        return;
    }

    lista.forEach(item => {
    
        const card = document.createElement('div');
        card.classList.add('card');

        switch (item.categoria) {
            case 'aventura':
                card.classList.add('categoria-aventura');
                break;
            case 'crime':
                card.classList.add('categoria-crime');
                break;
            case 'terror':
                card.classList.add('categoria-terror');
                break;
            default:
                card.classList.add('categoria-padrao');
        }

        const elementoNome = document.createElement('h3');
        elementoNome.textContent = item.nome;
        card.appendChild(elementoNome);

        const elementoCategoria = document.createElement('span');
        elementoCategoria.classList.add('categoria');
        elementoCategoria.textContent = item.categoria;
        card.appendChild(elementoCategoria);

        const elementoAno = document.createElement('p');
        elementoAno.classList.add('ano');
        elementoAno.textContent = 'Ano de lançamento: ' + item.ano;
        card.appendChild(elementoAno);

        const elementoNota = document.createElement('p');
        elementoNota.classList.add('nota');
        elementoNota.textContent = 'Nota: ' + item.nota.toFixed(1);
        card.appendChild(elementoNota);
        
        let texto = item.descricao;
        if (texto.length > 60) {
            texto = texto.slice(0, 60) + '…';
        }

        const elementoDescricao = document.createElement('p');
        elementoDescricao.classList.add('descricao');
        elementoDescricao.textContent = 'Descrição: ' + texto;
        card.appendChild(elementoDescricao);

        conteneur.appendChild(card);
    });
}

renderizar(filmes);

// [R3] Funções auxiliares

function filtrarFilmes(lista, texto, nomeCategoria) {
    const resultado = [];
    for (let i = 0; i < lista.length; i++) {
        const nomeBate = lista[i].nome.toLowerCase().indexOf(texto.toLowerCase()) !== -1;
        const categoriaBate = nomeCategoria === "todas" || lista[i].categoria === nomeCategoria;
        if (nomeBate && categoriaBate) {
            resultado.push(lista[i]);
        }
    }
    return resultado;
};

const campoBusca = document.getElementById("busca");
const selectCategoria = document.getElementById("filtro-categoria");

function aplicarFiltros() {
    const texto = campoBusca.value;
    const categoria = selectCategoria.value;
    const lista = filtrarFilmes(catalogo.itens, texto, categoria);
    renderizar(lista);
};

// [R3] Eventos de busca e filtro
campoBusca.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);

campoBusca.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        campoBusca.value = "";
        selectCategoria.value = "todas";
        aplicarFiltros();
    }

}); 



// [R4] - Formulário de cadastro com validação em JavaScript
// Uso da IA: usada para explicação das etapas e dos comandos necessários
const form = document.getElementById('form-filme');
const campoNome = document.getElementById('nome');
const campoNota = document.getElementById('nota');
const campoAno = document.getElementById('ano');
const campoCategoria = document.getElementById('categoria');
const campoDescricao = document.getElementById('descricao');
const mensagem = document.getElementById('mensagem');

function validar(dados) {
    if (dados.nome.length < 3) {
        campoNome.classList.add('erro');
        throw new Error('O nome do filme deve ter pelo menos 3 caracteres.');
    }

    if (isNaN(dados.nota) || dados.nota <= 0 || dados.nota > 10) {
        campoNota.classList.add('erro');
        throw new Error('A nota deve ser um número maior que 0 e até 10.');
    }

    if (isNaN(dados.ano) || dados.ano < 1888 || dados.ano > 2026) {
        campoAno.classList.add('erro');
        throw new Error('Digite um ano de lançamento válido.');
    }

    if (dados.categoria === '') {
        campoCategoria.classList.add('erro');
        throw new Error('Selecione uma categoria.');
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    campoNome.classList.remove('erro');
    campoNota.classList.remove('erro');
    campoAno.classList.remove('erro');
    campoCategoria.classList.remove('erro');
    campoDescricao.classList.remove('erro');
    mensagem.textContent = '';

    const dados = {
        nome: campoNome.value.trim(),
        nota: parseFloat(campoNota.value),
        ano: Number(campoAno.value),
        categoria: campoCategoria.value,
        descricao: campoDescricao.value.trim()
    };

    try {
        validar(dados);
        
        const novoFilme = {
            id: catalogo.itens.length + 1,
            nome: dados.nome,
            ano: dados.ano,
            categoria: dados.categoria,
            descricao: dados.descricao,
            nota: dados.nota,
            assistido: false
        };

        catalogo.adicionar(novoFilme);
        form.reset();

        mensagem.textContent = 'Filme cadastrado com sucesso!';
        mensagem.classList.remove('erro');
        mensagem.classList.add('sucesso');

        renderizar(catalogo.itens);
    }
    
    catch (erro) {
        mensagem.textContent = erro.message;
        mensagem.classList.remove('sucesso');
        mensagem.classList.add('erro');
    }
})


// [R5]


// R6


// R7
