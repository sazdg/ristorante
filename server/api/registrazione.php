<?php

if(isset($_POST["nome"])){
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $password = $_POST["psw"];

    require("../data/Database.php");
    $database = new Database();
    $db = $database->connessione();

    $cq = $db->query("SELECT * FROM utenti WHERE Nome = '$nome'");
    $conta = $cq->rowCount();//0 o 1


    if($conta == 0){
        //Utente ancora non registrato
        //sanificazione dati
        $nome = htmlspecialchars(strip_tags($nome));
        $email = htmlspecialchars(strip_tags($email));
        $password = htmlspecialchars(strip_tags($password));

        //query registrazione
        $iq = "INSERT INTO utenti (Nome, Password, Email) VALUES (:nome, :password, :email)";
        $risultato = $db->prepare($iq);
        $risultato->bindParam(":nome", $nome);
        $risultato->bindParam(":password", $password);
        $risultato->bindParam(":email", $email);

        $risultato->execute();

        if($risultato){

            echo "<script type='text/javascript'>";
            echo "alert('Iscrizione avvenuta con successo, effettua il tuo primo login');";
            echo "window.location.assign('http://localhost/cime/ristorante/client/index.html');";
            echo "</script>";
            
        } else {
            echo "sorry bro";
        }


    } else {
        echo "<script type='text/javascript'>";
        echo "alert('Attenzione!! Username già esistente');";
        echo "window.location.assign('http://localhost/cime/ristorante/client/index.html');";
        echo "</script>";
    }
}

?>