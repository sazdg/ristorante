<?php 

session_start();
if(isset($_SESSION["user"])){
    $cancellare = $_GET["canc"];
    $len = sizeof($_SESSION["carrello"]);

    for($i = 0; $i < $len; $i++){
        if($_SESSION["carrello"][$i] == $cancellare){
            $_SESSION["totale"] = $_SESSION["totale"] - $_SESSION["prezzo"][$i];
            $_SESSION["carrello"][$i] = "";
            $_SESSION["prezzo"][$i] = "";
            break;
        }
    }

    echo json_encode(array("messaggio" => $_SESSION["carrello"], "prezzo" => $_SESSION["prezzo"], "cancellare" => $cancellare, "totale" => $_SESSION["totale"]));

} else {
    echo "Fai il login";
}
?>