// R1 - Dados do Catálogo
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

// R2 - Renderização dinâmica
// Uso da IA: pesquisar fontes que explicam apenas como aplicar a renderização dinâmica de conteúdo
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

// R3


// R4


// R5


// R6


// R7
