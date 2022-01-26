<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$prodotto = $_GET["id"];
echo json_encode($prodotto);

?>