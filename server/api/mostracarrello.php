<?php

session_start();
echo json_encode(array("nome" => $_SESSION["carrello"], "prezzo" => $_SESSION["prezzo"]));

?>