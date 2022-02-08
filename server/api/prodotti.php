<?php
//lettura dei prodotti 

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

require("../data/Products.php");
$prod = new Products($db);

//METODO DELLA CLASSE PRODUCTS

$risultato = $prod->read();
$conta = $risultato->rowCount();

if($conta > 0){
    $lista = array();
    $lista["prodotti"] = array();
    
    while($riga = $risultato->fetch(PDO::FETCH_ASSOC)){
        $cibo = array(
            "nome" => $riga["Prodotti"],
            "immagini" => $riga["Immagini"],
            "prezzo" => $riga["Prezzo"],
            "id" => $riga["id"],
            "categoria" => $riga["Categoria"]
        );

        array_push($lista["prodotti"], $cibo);
    }

    echo json_encode($lista);
} else {
    echo json_encode(array("messaggio" => "Non ci sono prodotti"));
}

?>