<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$datiregistrazione = json_decode(file_get_contents("php://input"));

//insert query
$iq = "INSERT INTO utenti (Nome, Password, Email) VALUES (:nome, :password, :email)";

$risultato = $db->prepare($iq);

//sanificare i dati
$datiregistrazione->nome = htmlspecialchars(strip_tags($datiregistrazione->nome));
$datiregistrazione->password = htmlspecialchars(strip_tags($datiregistrazione->password));
$datiregistrazione->email = htmlspecialchars(strip_tags($datiregistrazione->email));

$risultato->bindParam(":nome", $datiregistrazione->nome);
$risultato->bindParam(":password", $datiregistrazione->password);
$risultato->bindParam(":email", $datiregistrazione->email);

$risultato->execute();


if($risultato){
    //TO DO aprire la sessione
    echo json_encode("ha funzionato = " . $datiregistrazione->nome . " " . $datiregistrazione->password . " " . $datiregistrazione->email);
} else {
    echo json_encode("errore registrazione.php");
}



?>