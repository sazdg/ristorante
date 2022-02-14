<?php

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$query = "SELECT * FROM reviews";
$x = $db->prepare($query);
$x->execute();

$conta = $x->rowCount();

$comments = array();
if($conta > 0){
    while($row = $x->fetch(PDO::FETCH_ASSOC)){
        $rece = array(
            "stelle" => $row["stars"],
            "recensione" => $row["comment"],
            "data" => $row["data"],
            "user" => $row["utente"]

        );
        array_push($comments, $rece);
    }

    echo json_encode($comments);
    
} else {
    echo json_encode("errore leggirecensione.php");
}
?>