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

    public function readOne($i){
        $query = "SELECT * FROM prodotti WHERE id = :i";

        $risultato = $this->conn->prepare($query);
        $risultato->bindParam(":i", $i);
        $risultato->execute();

        return $risultato;
    }

    public function delete($i){
        $query = "DELETE FROM prodotti WHERE id = :i";

        $risultato = $this->conn->prepare($query);
        $risultato->bindParam(":i", $i);
        $risultato->execute();

        return $risultato;
    }

    public function aggiungere($pro, $pre, $c){
        $query = "INSERT INTO prodotti SET Prodotti=:prod, Immagini=:imm, Prezzo=:pre, Categoria=:cat"; 
        
        $immagine = "default.jpg";
        $pro = htmlspecialchars(strip_tags($pro));
        $immagine = htmlspecialchars(strip_tags($immagine));
        //$pre = htmlspecialchars(strip_tags($pre));
        
        $int_c = intval($c);
        $int_pre = floatval($pre);

        $risultato = $this->conn->prepare($query);

        $risultato->bindParam(":prod", $pro);
        $risultato->bindParam(":imm", $immagine);
        $risultato->bindParam(":pre", $int_pre);
        $risultato->bindParam(":cat", $int_c);

        $risultato->execute();
        

        return $risultato;
    }
}
?>