<?php
//CANCELLARE UN PRODOTTO DAL DB

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

require("../data/Products.php");
$eliminare = new Products($db);

$idProd = $_GET["id"];

$rq = $eliminare->delete($idProd);

echo json_encode($rq);


?>