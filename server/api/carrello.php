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

    if($ris = $scelta->rowCount() > 0){

        $riga = $scelta->fetch(PDO::FETCH_ASSOC);
        $nomeProdotto = $riga["Prodotti"];//nome
        $prezzoProdotto = $riga["Prezzo"];//prezzo
        
        array_push($_SESSION["carrello"], $nomeProdotto);
        array_push($_SESSION["prezzo"], $prezzoProdotto);

        echo json_encode(array("messaggio" => $nomeProdotto, "esiste" => true));

    } else {
        echo json_encode(array("messaggio" => "prodotto non trovato", "esiste" => true));
    }

} else {
    //rimanda alla pagina di login
    echo json_encode(array("messaggio" => "Non sei registrato!", "esiste" => false));

}


?>