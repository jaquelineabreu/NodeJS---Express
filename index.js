const express = require('express')
const app = express()

const port = 3000

const mensagens = ['Essa é a primeira mensagem', 'Essa é a segunda mensagem']

app.get('/mensagens', (req, res) => {
  res.send(mensagens)
})

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})
