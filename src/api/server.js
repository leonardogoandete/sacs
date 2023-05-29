// server.js

import express from 'express';
import cors from 'cors';
const app = express();


app.use(cors());

// Rota para obter a lista de chamados
app.get("/api/chamados", (req, res) => {
  const chamados = generateChamados();
  res.json(chamados);
});

// Rota para obter os detalhes de um chamado específico
app.get("/api/chamados/:numeroChamado", (req, res) => {
  const numeroChamado = req.params.numeroChamado;
  const chamado = generateChamados().find((chamado) => chamado.numeroChamado === numeroChamado);

  if (chamado) {
    res.json(chamado);
  } else {
    res.status(404).json({ error: "Chamado não encontrado" });
  }
});

// Função para gerar uma lista de chamados mock
const generateChamados = () => {
  const chamados = [];

  for (let i = 1; i <= 15; i++) {
    const chamado = {
      numeroChamado: i.toString().padStart(3, "0"),
      dataAbertura: getRandomDate(),
      status: getRandomStatus(),
      assunto: getRandomAssunto(),
      departamento: getRandomDepartamento(),
    };

    chamados.push(chamado);
  }

  return chamados;
};

// Função para gerar uma data aleatória no formato "YYYY-MM-DD"
const getRandomDate = () => {
  const year = 2023;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const date = new Date(year, month, day);
  return date.toISOString().split("T")[0];
};

// Função para gerar um status aleatório
const getRandomStatus = () => {
  const statuses = ["Aberto", "Em andamento", "Concluído", "Cancelado"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

// Função para gerar um assunto aleatório
const getRandomAssunto = () => {
  const assuntos = ["Problema de rede", "Atualização de software", "Falha no sistema", "Dúvida técnica"];
  const randomIndex = Math.floor(Math.random() * assuntos.length);
  return assuntos[randomIndex];
};

// Função para gerar um departamento aleatório
const getRandomDepartamento = () => {
  const departamentos = ["TI - Redes e Comunicações", "TI - Suporte técnico", "TI - Desenvolvimento", "RH"];
  const randomIndex = Math.floor(Math.random() * departamentos.length);
  return departamentos[randomIndex];
};

// Iniciar o servidor na porta 8000
app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000");
});
