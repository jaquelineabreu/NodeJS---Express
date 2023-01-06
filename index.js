const express = require('express')
const app = express()

const port = 3000

const mensagens = ['Essa é a primeira mensagem', 'Essa é a segunda mensagem']

//[GET] / mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
})

//[GET] / mensagens/{id} - Retorna apenas uma unica mensagem por ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id
  const mensagem = mensagens[id]
  res.send(mensagem)
})

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})
