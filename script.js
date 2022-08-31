let itens = [
    {
        image: "./assets/img/painting/clock.jpg",
        name: "Clock",
        price: "R$100,00",
        type: "painting"
     },
    {
       image: "./assets/img/painting/gamepad.jpg",
       name: "Gamepad",
       price: "R$150,00",
       type: "painting"
    },   
    {
        image: "./assets/img/painting/personagem.jpg",
        name: "Personagem",
        price: "R$200,00",
        type: "painting"
    }, 
    {
        image: "./assets/img/actions/animewoman.jpg",
        name: "Anime Woman",
        price: "R$50,00",
        type: "action"
    },
    {
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Goku",
        price: "R$300,00",
        type: "action"
    },
    {
        image: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Yoda",
        price: "R$500,00",
        type: "action"
    }       
]

let listFrames = [] 
let listFigures = []

function separaItens(){
    for (let i = 0; i < itens.length; i++){
        if (itens[i].type === "painting"){
            listFrames.push(itens[i])
        }
        if(itens[i].type === "action"){
            listFigures.push(itens[i])
        }
    }
}
separaItens()

let secaoPaintings = document.querySelector(".lista-paintings")
let secaoFigures = document.querySelector(".lista-action")

for (let i = 0; i < listFrames.length; i++){
    let card = document.createElement("li")
    let imagemProduto = document.createElement("img")
    imagemProduto.src = `${listFrames[i].image}`    
    let nome = document.createElement("h2")
    nome.innerText = `${listFrames[i].name}`
    let preco = document.createElement("p")    
    preco.innerText = `${listFrames[i].price}` 
    let div = document.createElement("div") 
    div.appendChild(nome)
    div.appendChild(preco)    
    card.appendChild(imagemProduto)
    card.appendChild(div)  
    secaoPaintings.appendChild(card)
}

for (let i = 0; i < listFigures.length; i++){
    let card = document.createElement("li")
    let imagemProduto = document.createElement("img")
    imagemProduto.src = `${listFigures[i].image}`       
    let nome = document.createElement("h2")
    nome.innerText = `${listFigures[i].name}`
    let preco = document.createElement("p")    
    preco.innerText = `${listFigures[i].price}` 
    let div = document.createElement("div") 
    div.appendChild(nome)
    div.appendChild(preco)    
    card.appendChild(imagemProduto)
    card.appendChild(div)  
    secaoFigures.appendChild(card)
}