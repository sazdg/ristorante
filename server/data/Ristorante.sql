-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 17, 2022 alle 21:41
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
  `Immagini` varchar(50) NOT NULL,
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
('Tiramisu', 'tiramisu.jpg', 4, 7, 3),
('Cheesecake ai frutti di bosco', 'cheesecake.jpg', 4, 8, 3),
('Panna cotta', 'pannacotta.jpg', 4, 9, 3),
('Acqua naturale', 'acqua.jpg', 2, 10, 4),
('Calice di vino della casa', 'calice.jpg', 5, 11, 4),
('Bottiglia vino rosso', 'vinorosso.jpg', 15, 12, 4),
('Bottiglia vino bianco', 'vinobianco.jpg', 15, 13, 4),
('Cocacola', 'cocacola.jpg', 2.5, 14, 4),
('yogurt', 'default.jpg', 3, 44, 3),
('piadina', 'default.jpg', 5, 45, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `stars` int(11) NOT NULL,
  `comment` text NOT NULL,
  `data` date NOT NULL,
  `utente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `reviews`
--

INSERT INTO `reviews` (`id`, `stars`, `comment`, `data`, `utente`) VALUES
(1, 5, 'ciao funziona review utente kevin', '2022-02-10', 'kevin'),
(6, 4, 'vvvv', '2022-02-14', 'kevin'),
(11, 3, 'prova', '2022-02-15', 'kevin'),
(12, 5, 'The service is great, the staff knows what they are serving and how to match the wine. Food is at the high quality and well presented.', '2022-02-15', 'kevin'),
(13, 5, 'Sublime very good food and service,but the high quality is there. this restaurant is a pleasure for your mouth.', '2022-02-15', 'mario'),
(14, 5, 'Good experience. with my friend and family during my daughter birthday.food was good with nice ambience.', '2022-02-15', 'isabella'),
(15, 4, 'An excellent place with great atmosphere. The food is always good and so is the service. Would definitely recommend it to anyone.', '2022-02-15', 'Sara');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `Nome` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`Nome`, `Password`, `Email`) VALUES
('crypt', '$2y$10$17kGwFTKZnv9fsBw64eGZOV.s2rp0MDMVy47olFQ6Hp495v8hCUSi', 'crypt@gmail.com'),
('Isabella', 'isabella', 'isabella@gmail.com'),
('kevin', 'kevin', 'kevin@gmaill.com'),
('mario', 'mario', 'mario@gmai.com'),
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
-- Indici per le tabelle `reviews`
--
ALTER TABLE `reviews`
  ADD KEY `id` (`id`),
  ADD KEY `utente` (`utente`) USING BTREE;

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`Nome`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT per la tabella `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  ADD CONSTRAINT `prodotti_ibfk_1` FOREIGN KEY (`Categoria`) REFERENCES `categoria` (`id`);

--
-- Limiti per la tabella `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `utenti` (`Nome`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
