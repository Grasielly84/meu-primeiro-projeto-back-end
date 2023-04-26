const express = require ("express")
const rout = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadira da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, reponse) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Sevidor criado e rodado na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)