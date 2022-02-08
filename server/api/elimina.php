<?php
//CANCELLARE UN PRODOTTO DAL DB

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

require("../data/Products.php");
$eliminare = new Products($db);

//id è auto increment nel DB, per cui esisterà sempre 
//id è preso dalla stampa del DB, attraverso la chiamata ajax
$idProd = $_GET["id"];

$rq = $eliminare->delete($idProd);

echo json_encode($rq);


?>