const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, reponse) {
    response.json({
        nome: 'Grasielly Dias Apolinário',
        imagem: 'https://www.linkedin.com/in/grasielly-dias-apolin%C3%A1rio-061a24236/',
        minibio: 'Estudante de Desenvolvimento de Softwaer'
    })
}

function mostraPorta() {
    console.log("Sevidor criado e rodado na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)