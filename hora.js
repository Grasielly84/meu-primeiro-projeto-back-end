const express = require ("express")
const router = express.Router()
const app = express()


const PORTA = 3333


function mostraHora(request, response) {
    const data = new Date ()
    const hora = data.toLocaleDateString('pt-BR')
    response.send(hora)

}


function mostraHora() {
    console.log(`evidor criado e rodado na porta ${PORTA}}`)
}

app.use(router.get('/hora', mostraHora))
app.listen(PORTA, mostraHora)