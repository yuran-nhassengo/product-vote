// Função para gerar um número aleatório de votos entre 50 e 200
function generateVoteCount() {
    return Math.floor(Math.random() * 151) + 50;
}

export const products = [
    {
        id: 1,
        title: "Produto A",
        description: "Descrição do Produto A",
        url: "https://example.com/produto-a",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar1.jpg",
        productImageUrl: "https://example.com/produto-a.jpg"
    },
    {
        id: 2,
        title: "Produto B",
        description: "Descrição do Produto B",
        url: "https://example.com/produto-b",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar2.jpg",
        productImageUrl: "https://example.com/produto-b.jpg"
    },
    {
        id: 3,
        title: "Produto C",
        description: "Descrição do Produto C",
        url: "https://example.com/produto-c",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar3.jpg",
        productImageUrl: "https://example.com/produto-c.jpg"
    },
    {
        id: 4,
        title: "Produto D",
        description: "Descrição do Produto D",
        url: "https://example.com/produto-d",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar4.jpg",
        productImageUrl: "https://example.com/produto-d.jpg"
    },
    {
        id: 5,
        title: "Produto E",
        description: "Descrição do Produto E",
        url: "https://example.com/produto-e",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar5.jpg",
        productImageUrl: "https://example.com/produto-e.jpg"
    },
    {
        id: 6,
        title: "Produto F",
        description: "Descrição do Produto F",
        url: "https://example.com/produto-f",
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://example.com/avatar6.jpg",
        productImageUrl: "https://example.com/produto-f.jpg"
    }
];
