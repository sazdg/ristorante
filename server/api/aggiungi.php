<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

require("../data/Products.php");
$prodotto = new Products($db);

$nome = $_GET["nome"];
$prezzo = $_GET["prezzo"];
$categoria = $_GET["categoria"];

$rq = $prodotto->aggiungere($nome, $prezzo, $categoria);

echo json_encode($rq);

?>