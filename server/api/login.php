<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

//metodo per ottenere le variabili di login (POST)
$datilogin = json_decode(file_get_contents("php://input"));

//sanificare i dati
$datilogin->user = htmlspecialchars(strip_tags($datilogin->user));
$datilogin->password = htmlspecialchars(strip_tags($datilogin->password));

//risultato query
$rq = $db->query("SELECT * FROM utenti WHERE Nome = '" . $datilogin->user ."'");
$conta = $rq->rowCount();

if($conta == 0){
    echo json_encode("Username inesistente");
} else {
    //controllo risultati
    $arrayrisultati = $rq->fetch(PDO::FETCH_ASSOC);

    //in registrazione.php
    //hash a new password for storing in the database
    //the function automatically generates a cryptographically safe salt
    //$hashToStoreInDb = password_hash($datilogin->password, PASSWORD_DEFAULT);

    //check if the hash of the entered login password, matches the stored hash
    //the salt and the cost factor will be extracted from $existingHashFromDb or $arrayrisultati["Password"]
    $isPasswordCorrect = password_verify($datilogin->password, $arrayrisultati["Password"]);


    //CONTROLLO PASSWORD CORRETTA
    //if($datilogin->password != $arrayrisultati["Password"]){
    if($isPasswordCorrect || $datilogin->password == $arrayrisultati["Password"]){
        //next registration will be only hashed, I keep the password control for old password with no hash
        session_start();
        $_SESSION["user"] = $datilogin->user;
        $_SESSION["carrello"] = array();
        $_SESSION["prezzo"] = array();
        $_SESSION["totale"] = 0;

        echo json_encode("Benvenut* " . $_SESSION["user"]);
        
    } else {
        echo json_encode("Password errata");
    }

}

?>