const express = require("express");
const cors = require("cors");
const { router } = require("../routes");

const server = express();

server.use(express.json()); // Permite o servidor receber requisicoes POST com body (dados enviados em formato JSON)
server.use(cors()); // Permite o servidor ser acessivel por outras aplicacoes web
server.use(router); // Permite a comunicação entre as rotas e o server

module.exports = { server };
