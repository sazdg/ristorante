<?php
session_start();

if(isset($_SESSION["user"])){
    echo json_encode(array("username" => $_SESSION["user"], "esiste" => true));
} else {
    echo json_encode(array("esiste" => false));
}
?>