<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

require("../data/Products.php");
$prodotto = new Products($db);

//TODO CONTROLLO ISSET VARs
$nome = $_GET["nome"];
$prezzo = $_GET["prezzo"];
$categoria = $_GET["categoria"];

$nome = htmlspecialchars(strip_tags($nome));
$prezzo = htmlspecialchars(strip_tags($prezzo));
$categoria = htmlspecialchars(strip_tags($categoria));

$rq = $prodotto->aggiungere($nome, $prezzo, $categoria);

echo json_encode($rq);

?>