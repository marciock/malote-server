-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 31/08/2020 às 18:49
-- Versão do servidor: 8.0.21-0ubuntu0.20.04.4
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `malote`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `BasesUnidades`
--

CREATE TABLE `BasesUnidades` (
  `id` int NOT NULL,
  `nome` varchar(150) NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cidades`
--

CREATE TABLE `Cidades` (
  `id` int NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `baseUnidade` int NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Envelopes`
--

CREATE TABLE `Envelopes` (
  `id` int NOT NULL,
  `usuario` int NOT NULL,
  `numero` int NOT NULL,
  `malote` int NOT NULL,
  `cidadeOrigem` int NOT NULL,
  `cidadeDestino` int NOT NULL,
  `activated` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Formas`
--

CREATE TABLE `Formas` (
  `id` int NOT NULL,
  `forma` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Malotes`
--

CREATE TABLE `Malotes` (
  `id` int NOT NULL,
  `origem` int NOT NULL,
  `destino` int NOT NULL,
  `tipo` int NOT NULL,
  `forma` int NOT NULL,
  `status` int NOT NULL,
  `usuario` int NOT NULL,
  `numeroMalote` int NOT NULL,
  `numeroLacre` int NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Statuses`
--

CREATE TABLE `Statuses` (
  `id` int NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Tipos`
--

CREATE TABLE `Tipos` (
  `id` int NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` int NOT NULL,
  `chave` varchar(8) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `sobrenome` int NOT NULL,
  `email` varchar(150) NOT NULL,
  `cidade` int NOT NULL,
  `senha` text NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `BasesUnidades`
--
ALTER TABLE `BasesUnidades`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Cidades`
--
ALTER TABLE `Cidades`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Envelopes`
--
ALTER TABLE `Envelopes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Formas`
--
ALTER TABLE `Formas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Malotes`
--
ALTER TABLE `Malotes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Statuses`
--
ALTER TABLE `Statuses`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Tipos`
--
ALTER TABLE `Tipos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `BasesUnidades`
--
ALTER TABLE `BasesUnidades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Cidades`
--
ALTER TABLE `Cidades`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Envelopes`
--
ALTER TABLE `Envelopes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Formas`
--
ALTER TABLE `Formas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Malotes`
--
ALTER TABLE `Malotes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Statuses`
--
ALTER TABLE `Statuses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Tipos`
--
ALTER TABLE `Tipos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
