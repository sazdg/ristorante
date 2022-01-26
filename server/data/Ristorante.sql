-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 25, 2022 alle 19:11
-- Versione del server: 10.1.38-MariaDB
-- Versione PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ristorante`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categoria`
--

CREATE TABLE `categoria` (
  `Categoria` varchar(50) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `categoria`
--

INSERT INTO `categoria` (`Categoria`, `id`) VALUES
('Primi', 1),
('Secondi', 2),
('Dessert', 3),
('Bevande', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `prodotti`
--

CREATE TABLE `prodotti` (
  `Prodotti` varchar(50) NOT NULL,
  `Immagini` varchar(20) NOT NULL,
  `Prezzo` float NOT NULL,
  `id` int(11) NOT NULL,
  `Categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `prodotti`
--

INSERT INTO `prodotti` (`Prodotti`, `Immagini`, `Prezzo`, `id`, `Categoria`) VALUES
('Carbonara', 'carbonara.jpg', 12.5, 1, 1),
('Spaghetti allo scoglio', 'spaghetti.jpg', 15, 2, 1),
('Gnocchi al pomodoro', 'gnocchi.jpg', 10, 3, 1),
('Bistecca alla fiorentina', 'bistecca.jpg', 17, 4, 2),
('Pesce spada', 'pescespada.jpg', 16, 5, 2),
('Verdure grigliate', 'verdure.jpg', 10, 6, 2),
('Tiramisù', 'tiramisu.jpg', 4, 7, 3),
('Cheesecake ai frutti di bosco', 'cheesecake.jpg', 4, 8, 3),
('Panna cotta', 'pannacotta.jpg', 4, 9, 3),
('Acqua naturale', 'acqua.jpg', 2, 10, 4),
('Calice di vino della casa', 'calice.jpg', 5, 11, 4),
('Bottiglia vino rosso', 'vinorosso.jpg', 15, 12, 4),
('Bottiglia vino bianco', 'vinobianco.jpg', 15, 13, 4),
('Cocacola', 'cocacola.jpg', 2.5, 14, 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `Nome` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`Nome`, `Password`, `Email`) VALUES
('Isabella', 'isabella', 'isabella@gmail.com'),
('prova', 'pas', 'email'),
('Sara', 'sara', 'sara@gmail.com');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categoria`
--
ALTER TABLE `categoria`
  ADD UNIQUE KEY `Categoria` (`Categoria`),
  ADD KEY `id` (`id`);

--
-- Indici per le tabelle `prodotti`
--
ALTER TABLE `prodotti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`Nome`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  ADD CONSTRAINT `prodotti_ibfk_1` FOREIGN KEY (`Categoria`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
