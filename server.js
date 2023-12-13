const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let saldoAtual = 100;

app.get('/saldo', (req, res) => {
  res.json({ saldo: saldoAtual });
});

app.post('/comprar-moedas', (req, res) => {
  const { quantidade } = req.body;
  
  // Adicione lógica para processar a compra aqui
  // Exemplo simples: apenas atualiza o saldo localmente
  saldoAtual += quantidade;

  res.json({ novoSaldo: saldoAtual });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
