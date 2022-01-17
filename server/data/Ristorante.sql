-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Creato il: Gen 06, 2022 alle 17:30
-- Versione del server: 5.7.34
-- Versione PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Ristorante`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Categoria`
--

CREATE TABLE `Categoria` (
  `Categoria` varchar(50) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `Categoria`
--

INSERT INTO `Categoria` (`Categoria`, `id`) VALUES
('Primi', 1),
('Secondi', 2),
('Dessert', 3),
('Bevande', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `Prodotti`
--

CREATE TABLE `Prodotti` (
  `Prodotti` varchar(50) NOT NULL,
  `Prezzo` float NOT NULL,
  `id` int(11) NOT NULL,
  `Categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `Prodotti`
--

INSERT INTO `Prodotti` (`Prodotti`, `Prezzo`, `id`, `Categoria`) VALUES
('Carbonara', 12.5, 1, 1),
('Spaghetti allo scoglio', 15, 2, 1),
('Gnocchi al pomodoro', 10, 3, 1),
('Bistecca alla fiorentina', 17, 4, 2),
('Pesce spada', 16, 5, 2),
('Verdure grigliate', 10, 6, 2),
('Tiramisù', 4, 7, 3),
('Ciheescake ai frutti di bosco', 4, 8, 3),
('Panna cotta', 4, 9, 3),
('Acqua naturale', 2, 10, 4),
('Calice di vino della casa', 5, 11, 4),
('Bottiglia vino rosso', 15, 12, 4),
('Bottiglia vino bianco', 15, 13, 4),
('Cocacola', 2.5, 14, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `Utenti`
--

CREATE TABLE `Utenti` (
  `Nome` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `Utenti`
--

INSERT INTO `Utenti` (`Nome`, `Password`, `Email`) VALUES
('Isabella', 'isabella', 'isabella@gmail.com'),
('Sara', 'sara', 'sara@gmail.com');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Categoria`
--
ALTER TABLE `Categoria`
  ADD UNIQUE KEY `Categoria` (`Categoria`),
  ADD KEY `id` (`id`);

--
-- Indici per le tabelle `Prodotti`
--
ALTER TABLE `Prodotti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indici per le tabelle `Utenti`
--
ALTER TABLE `Utenti`
  ADD PRIMARY KEY (`Nome`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `Prodotti`
--
ALTER TABLE `Prodotti`
  ADD CONSTRAINT `prodotti_ibfk_1` FOREIGN KEY (`Categoria`) REFERENCES `Categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
