<?php

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $newpsw = $_POST["psw-new"];


if(isset($nome) && isset($email) && isset($newpsw)){

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $newpsw = $_POST["psw-new"];

    $nome = htmlspecialchars(strip_tags($nome));
    $email = htmlspecialchars(strip_tags($email));
    $newpsw = htmlspecialchars(strip_tags($newpsw));

    require("../data/Database.php");
    $database = new Database();
    $db = $database->connessione();

    $query = $db->query("SELECT * FROM utenti WHERE Nome = '$nome' AND Email = '$email'");
    $conta = $query->rowCount();//0 o 1

    if($conta = 1){
        //hash a new password for storing in the database
        //the function automatically generates a cryptographically safe salt
        $hashToStoreInDb = password_hash($newpsw, PASSWORD_DEFAULT);

        $change = $db->query("UPDATE utenti SET Password = '$hashToStoreInDb' WHERE Nome = '$nome'");

        echo "<script type='text/javascript'>";
        echo "alert('Hai modificato la password con successo!');";
        echo "window.location.assign('http://localhost/cime/ristorante/client/index.html');";
        echo "</script>";

    } else {
        echo "<script type='text/javascript'>";
        echo "alert('Utente o email non esistente, riprova...');";
        echo "window.location.assign('http://localhost/cime/ristorante/client/index.html');";
        echo "</script>";
    }
} 
?>