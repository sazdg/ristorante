<?php
//DA RIFARE IL FILE
//PER CAPIRE SE FUNZIONA DIVERSAMENTE


//if controllo required, if null if ""
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$datiregistrazione = json_decode(file_get_contents("php://input"));
var_dump($datiregistrazione->nome);


//sanificare i dati
$datiregistrazione->nome = htmlspecialchars(strip_tags($datiregistrazione->nome));
$datiregistrazione->password = htmlspecialchars(strip_tags($datiregistrazione->password));
$datiregistrazione->email = htmlspecialchars(strip_tags($datiregistrazione->email));


//CONTROLLO NOME UTENTE INESISTENTE
//controllo query
//$cq = $db->query("SELECT * FROM utenti WHERE Nome = '" . $datiregistrazione->nome . "'");
//var_dump($cq);
$cq = "SELECT Nome FROM utenti WHERE Nome = :nome";
$result = $db->prepare($cq);
$result->bindParam(":nome", $datiregistrazione->nome);
$result->execute();
var_dump($result);

if($result == false){
    //REGISTRAZIONE
    //insert query
    $iq = "INSERT INTO utenti (Nome, Password, Email) VALUES (:nome, :password, :email)";

    $risultato = $db->prepare($iq);

    $risultato->bindParam(":nome", $datiregistrazione->nome);
    $risultato->bindParam(":password", $datiregistrazione->password);
    $risultato->bindParam(":email", $datiregistrazione->email);

    $risultato->execute();
    echo $risultato->debugDumpParams();
    var_dump($risultato);

    if($risultato){
        echo json_encode(array("messaggio" => "Registrazione avvenuta con successo, effettua il tuo primo login"));
    } else {
        echo json_encode(array("messaggio" => "Qualcosa è andato storto, riprova"));
    }

    
} else {

    echo json_encode(array("messaggio" => "Username gia' esistente"));
}



?>