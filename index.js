const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.json())

const mensagens = ['Essa é a primeira mensagem', 'Essa é a segunda mensagem']

//[GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
})

//[GET] /mensagens/{id} - Retorna apenas uma unica mensagem por ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id
  const mensagem = mensagens[id]
  res.send(mensagem)
})

//[POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem
  //  console.log(mensagem)
  mensagens.push(mensagem)
  res.send(`Mensagem criada com sucesso: '${mensagem}'.`)
})

//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id

  const mensagem = req.body.mensagem

  mensagens[id] = mensagem

  res.send(`Mensagem atualizada com sucesso: '${mensagem}'.`)
})

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})
