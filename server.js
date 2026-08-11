const express = require('express');

const app = express();
app.use(express.json());

app.get('/alunos',(reg,res)=>{
    res.send("lendo dados do banco")
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});

app.post("/alunos",(req, res)=>{
  res.send(`nome ${req.body.nome} idade:${req.body.idade}`)
})

const alunos =[
{"nome":"julia","idade":18}
{"nome":"emily","idade":20}
{"nome":,"maisa","idade":25}

]