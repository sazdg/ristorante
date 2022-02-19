-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 18, 2022 alle 12:01
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
(12, 5, 'The service is great, the staff knows what they are serving and how to match the wine. Food is at the high quality and well presented.', '2022-02-15', 'kevin'),
(13, 5, 'Sublime very good food and service,but the high quality is there. this restaurant is a pleasure for your mouth.', '2022-02-15', 'mario'),
(14, 5, 'Good experience. with my friend and family during my daughter birthday.food was good with nice ambience.', '2022-02-15', 'isabella'),
(15, 4, 'An excellent place with great atmosphere. The food is always good and so is the service. Would definitely recommend it to anyone.', '2022-02-15', 'Sara');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `reviews`
--
ALTER TABLE `reviews`
  ADD KEY `id` (`id`),
  ADD KEY `utente` (`utente`) USING BTREE;

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `utenti` (`Nome`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
