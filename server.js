const express = require('express');

const cors = require('cors')

const app = express();


const corsOptions = {
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}

app.use(cors(corsOptions))

app.use(express.json());

const alunos = [
    { "nome": "julia", "idade": 18 },
    { "nome": "emily", "idade": 20 },
    { "nome": "maisa", "idade": 25 }

]

app.get('/alunos', (reg, res) => {
    res.send("lendo dados do banco")
})



app.post("/alunos", (req, res) => {

    const { nome, url_imagem } = req.body

    console.log(nome+" "+url_imagem)



    //res.send(`nome ${req.body.nome} Idade:${req.body.url_imagem}`)
})




app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});