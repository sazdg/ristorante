<?php
class Products {
    private $nome;
    private $immagine;
    private $prezzo;
    private $id;
    private $categoria;

    //connessione (inizializzata nel costruttore)
    private $conn;

    public function __construct($db){
        $this->conn = $db;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getImmagine(){
        return $this->immagine;
    }

    public function getPrezzo(){
        return $this->prezzo;
    }

    public function getId(){
        return $this->id;
    }

    public function getCategoria(){
        return $this->categoria;
    }

    public function read(){
        $query = "SELECT * FROM prodotti";

        $risultato = $this->conn->prepare($query);
        $risultato->execute();

        return $risultato;
    }
}
?>