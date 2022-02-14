<?php
session_start();
//if logged do this 
if(isset($_SESSION["user"])){

    require("../data/Database.php");
    $database = new Database();
    $db = $database->connessione();

    $stelle = $_GET["stelle"];
    $commento = $_GET["comment"];
    $data = $_GET["data"];


    $query = "INSERT INTO reviews (stars, comment, data, utente) VALUES (:stelle, :commento, :giorno, :utente)";

    $stelle = htmlspecialchars(strip_tags($stelle));
    $commento = htmlspecialchars(strip_tags($commento));
    $data = htmlspecialchars(strip_tags($data));

    $x = $db->prepare($query);

    $x->bindParam(":stelle", $stelle);
    $x->bindParam(":commento", $commento);
    $x->bindParam(":giorno", $data);
    $x->bindParam(":utente", $_SESSION["user"]);

    $x->execute();

    if($x){
        echo json_encode("You sent successfully your review! Thank you!");
    } else {
        echo json_encode("smth went wrong ugh (inviarecensione.php)");
    }

} else {
    echo json_encode("You should log in before writing a review");
}



?>