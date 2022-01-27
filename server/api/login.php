<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

//metodo per ottenere le variabili di login (POST)
$datilogin = json_decode(file_get_contents("php://input"));

//TO DO sanificare i dati!!!!!!!!!!!!1

//risultato query
$rq = $db->query("SELECT * FROM utenti WHERE Nome = '" . $datilogin->user ."'");
$conta = $rq->rowCount();

if($conta == 0){
    echo json_encode("Username inesistente");
} else {
    //controllo risultati
    $arrayrisultati = $rq->fetch(PDO::FETCH_ASSOC);

    if($datilogin->password != $arrayrisultati["Password"]){
        echo json_encode("Password errata");
    } else {
        session_start();
        $_SESSION["user"] = $datilogin->user;
        $_SESSION["carrello"] = array();
        $_SESSION["prezzo"] = array();

        echo json_encode("Benvenut* " . $_SESSION["user"]);
    }

}

?>