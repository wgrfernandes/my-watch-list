const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json()); // Permite o servidor receber requisicoes POST com body (dados enviados em formato JSON)
server.use(cors()); // Permite o servidor ser acessivel por outras aplicacoes web

module.exports = { server };
