let imagemProduto = document.createElement("img")
imagemProduto.src = "./assets/img/painting/clock.jpg"

let imagemProduto2 = document.createElement("img")
imagemProduto2.src = "./assets/img/painting/gamepad.jpg"

let imagemProduto3 = document.createElement("img")
imagemProduto3.src = "./assets/img/painting/personagem.jpg"

let imagemProduto4 = document.createElement("img")
imagemProduto4.src = "./assets/img/actions/animewoman.jpg"

let imagemProduto5 = document.createElement("img")
imagemProduto5.src = "./assets/img/actions/dragonballpersonagem.jpg"

let imagemProduto6 = document.createElement("img")
imagemProduto6.src = "./assets/img/actions/starwarspersonagem.jpg"

let itens = [
    {
        image: imagemProduto,
        name: "Clock",
        price: "R$100,00",
        type: "painting"
     },
    {
       image: imagemProduto2,
       name: "Gamepad",
       price: "R$150,00",
       type: "painting"
    },   
    {
        image: imagemProduto3,
        name: "Personagem",
        price: "R$200,00",
        type: "painting"
    }, 
    {
        image: imagemProduto4,
        name: "Anime Woman",
        price: "R$50,00",
        type: "action"
    },
    {
        image: imagemProduto5,
        name: "Goku",
        price: "R$300,00",
        type: "action"
    },
    {
        image: imagemProduto6,
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
    let nome = document.createElement("h2")
    nome.innerText = `${listFrames[i].name}`
    let preco = document.createElement("p")    
    preco.innerText = `${listFrames[i].price}` 
    let div = document.createElement("div") 
    div.appendChild(nome)
    div.appendChild(preco)    
    card.appendChild(listFrames[i].image)
    card.appendChild(div)  
    secaoPaintings.appendChild(card)
}

for (let i = 0; i < listFigures.length; i++){
    let card = document.createElement("li")    
    let nome = document.createElement("h2")
    nome.innerText = `${listFigures[i].name}`
    let preco = document.createElement("p")    
    preco.innerText = `${listFigures[i].price}` 
    let div = document.createElement("div") 
    div.appendChild(nome)
    div.appendChild(preco)    
    card.appendChild(listFigures[i].image)
    card.appendChild(div)  
    secaoFigures.appendChild(card)
}

