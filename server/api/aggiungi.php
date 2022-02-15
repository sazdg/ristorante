<?php
session_start();

if(isset($_SESSION["user"])){

    require("../data/Database.php");
    $database = new Database();
    $db = $database->connessione();

    require("../data/Products.php");
    $prodotto = new Products($db);

        $nome = $_GET["nome"];
        $prezzo = $_GET["prezzo"];
        $categoria = $_GET["categoria"];

    //CONTROLLO CHE ESISTANO 
    if($nome != "" && $prezzo != ""){

        $nome = htmlspecialchars(strip_tags($nome));
        $prezzo = htmlspecialchars(strip_tags($prezzo));
        $categoria = htmlspecialchars(strip_tags($categoria));

        $rq = $prodotto->aggiungere($nome, $prezzo, $categoria);

        echo json_encode(array("message" => "Hai aggiunto il prodotto $nome con successo al DB", "successo" => true));

    } else {

        echo json_encode(array("message" => "Per favore completa tutti i campi", "successo" => false));
    }
} else {
    echo "Fai il login";
}



?>