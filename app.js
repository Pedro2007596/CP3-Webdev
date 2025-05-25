const categoria = document.getElementById("categoria");
const disponiveis = document.getElementById("disponiveis");
const naodisponiveis = document.getElementById("naodisponiveis");
const btnfiltrar = document.getElementById("filtrar");
const showprodutos = document.getElementById("produtos");

const produtos =[
    {
    nome: "Camiseta Básica",
    preco: 39.90,
    categoria: "Vestuário",
    disponibilidade: true
},

{
    nome: "Jaqueta Jeans",
    preco: 159.90,
    categoria: "Vestuário",
    disponibilidade: true
},

{
    nome: "Fone de Ouvido Bluetooth",
    preco: 149.90,
    categoria: "Eletrônicos",
    disponibilidade: true
},

{
    nome: "Smartphone XYZ",
    preco: 1299.00,
    categoria: "Eletrônicos",
    disponibilidade: false
},

{
    nome: "Livro: Aprendendo JavaScript",
    preco: 59.00,
    categoria: "Livros",
    disponibilidade: true
},

{
    nome: "Livro: Design Patterns",
    preco: 89.00,
    categoria: "Livros",
    disponibilidade: true
},

{
    nome: "Mesa de Escritório",
    preco: 499.00,
    categoria: "Móveis",
    disponibilidade: false
},

{
    nome: "Cadeira Gamer",
    preco: 799.00,
    categoria: "Móveis",
    disponibilidade: true
},

{
    nome: "Relógio Digital",
    preco: 129.90,
    categoria: "Acessórios",
    disponibilidade: false
},

{
    nome: "Óculos de Sol",
    preco: 229.90,
    categoria: "Acessórios",
    disponibilidade: true
},
]

