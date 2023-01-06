const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.json())

const mensagens = [
  {
    id: 1,
    texto: 'Essa é a primeira mensagem',
  },
  {
    id: 2,
    texto: 'Essa é a segunda mensagem',
  },
]

//[GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens.filter(Boolean))
})

//[GET] /mensagens/{id} - Retorna apenas uma unica mensagem por ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id
  const mensagem = mensagens[id]
  if (!mensagem) {
    res.send('Mensagem não encontrada!')
    return
  }
  res.send(mensagem)
})

//[POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body

  if (!mensagem || !mensagem.texto) {
    res.send('Mensagem invalida')
    return
  }

  mensagem.id = mensagens.length + 1

  mensagens.push(mensagem)

  res.send(mensagem)
})

//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id

  const mensagem = mensagens[id]

  const novoTexto = req.body.texto

  if (!novoTexto) {
    res.send('Mensagem invalida')
    return
  }

  mensagem.texto = novoTexto

  res.send(mensagem)
})

//[DELETE] / mensagens/{id} - Remover uma mensadem pelo ID
app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id

  delete mensagens[id]

  res.send('Mensagem removida com sucesso')
})

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})
