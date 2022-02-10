//visualizzare tutti i prodotti nella pagina prodotti
function showProducts() {

    $.ajax({
        url: "http://localhost/cime/ristorante/server/api/prodotti.php",
        type: "GET",
        dataType: "json"
    })
        .done(function (response) {

            var stampa = `<h3 class="d-flex justify-content-center pt-5 m-0 ">Menu'</h3>
            <div class='container-fluid row m-0' id='body-cards'>
            <div class='col-2 p-2'></div>
            <div class='container col-8 d-flex justify-content-around flex-wrap align-items-start p-5'>`;

            for(let i = 0; i < response.prodotti.length; i++){
                var nome = response.prodotti[i].nome;
                var immagini = response.prodotti[i].immagini;
                var prezzo = response.prodotti[i].prezzo;
                var id = response.prodotti[i].id;
                var categoria = response.prodotti[i].categoria;

                stampa += `<div class="col p-3"><div class="card" style="width: 14rem;">
                <img src="./img/prodotti/` + immagini + `" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">` + nome + ` <br/><strong>` + prezzo + `&euro;</strong></h5>
                    <button type="button" class="btn btn-primary" id="add" data-id="` + id + `">Aggiungi al carrello</button></div>
                </div></div>`;
            }
            
            stampa += "</div><div class='col-2 p-2'></div></div>";
            
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

