$(document).ready(function () {

    //showProducts();

});

function showProducts() {

    $.ajax({
        url: "http://localhost/cime/ristorante/server/api/prodotti.php",
        type: "GET",
        dataType: "json"
    })
        .done(function (response) {

            var stampa = "<div class='container d-flex justify-content-around flex-wrap'>";

            for(let i = 0; i < response.prodotti.length; i++){
                var nome = response.prodotti[i].nome;
                var immagini = response.prodotti[i].immagini;
                var prezzo = response.prodotti[i].prezzo;
                var id = response.prodotti[i].id;
                var categoria = response.prodotti[i].categoria;

                stampa += `<div class="col"><div class="card" style="width: 15rem;">
                <img src="./img/prodotti/` + immagini + `" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">` + nome + `</h5>
                    <button type="button" class="btn btn-primary" id="add">Aggiungi al carrello</button></div>
                </div></div>`;
            }
            
            stampa += "</div>";
            
            $("#app").html(stampa);
        })
        .fail(function (xhr, resp, text) {
            console.log("Errore " + text);
            console.log(xhr, resp, text);
            var errore = "<p>FAIL prodotti.js</p>";
            $("#app").html(errore);
        });
    return false;

}

