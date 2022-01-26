<?php
//DOPO AVER CLICCATO IL BOTTONE AGGIUNGI
session_start();

if(isset($_SESSION["user"])){
    //si vede il carrello
    $prodotto = $_GET["id"];
    
    require("../data/Database.php");
    $database = new Database();
    $db = $database->connessione();

    require("../data/Products.php");
    $cibo = new Products($db);
    
    $scelta = $cibo->readOne($prodotto);

    echo json_encode(array("messaggio" => $scelta, "esiste" => true));
    /*
    $riga = $scelta->fetch(PDO::FETCH_ASSOC);
    $riga["Prodotti"];//nome
    $riga["Prezzo"];//prezzo

    echo json_encode($riga["Prodotti"]);
    */

} else {
    //rimanda alla pagina di login
    echo json_encode(array("messaggio" => "Non sei registrato!", "esiste" => false));

}


?>