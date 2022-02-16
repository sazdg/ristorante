$(document).ready(function(){

    $(document).on("click", "#carrello", function() {
        showCarrello();
    });

    $(document).on("click","#cestino", function(){

        var prodotto = $(this).attr("data-nome");

        $.ajax({
            url:"http://localhost/cime/ristorante/server/api/cancellacarrello.php?canc=" + prodotto,
            type:"GET",
            dataType:"json"
        })
        .done(function(response){
            console.log("click cestino prodotto: " + response);
            confirm(prodotto + " eliminato con successo dal carrello");
            showCarrello();

        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
        });

    });


});

function showCarrello(){

    //DEFAULT NON CI SONO PRODOTTI
    var cart = `<div class="container-fluid row m-0">
    <h3 class="d-flex justify-content-center pt-5">Shopping Cart</h3>
    <div class="col-sm-2"></div>
    <div class="col-sm-8 col-12 text-center d-flex justify-content-center p-4" id="corpo">
        <div class="alert alert-danger" role="alert" id="alertcarrello">Non ci sono prodotti nel carrello!</div>
    </div>
    <div class="col-sm-2"></div>
    </div>`;
    
    $("#app").html(cart);

        //chiamata al carrello dell'utente - sessione
        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/mostracarrello.php",
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                var tabella = `<div><h4><strong>Ecco il tuo carrello</strong></h4><table class="table table-hover">
                <tr>
                <th>Nome</th><th>Prezzo</th><th></th>
                </tr>`;

                for (var i = 0; i < response.nome.length; i++) {

                    if(response.nome[i] == ""){
                        console.log("prodotto eliminato, non esiste");
                    } else {
                        tabella += `<tr><td>` + response.nome[i] + `</td><td>` + response.prezzo[i] + `&euro;</td><td>
                        <button type="button" class="btn" id="cestino" data-nome="` + response.nome[i] + `"><img src="./img/icone/cestino.png" width="20"></button>
                        </td></tr>`;
                    }
                    
                }

                tabella += `</table><h5>Totale ` + response.totale + `&euro;</h5>
                <div class="p-5"><button type="button" class="btn btn-primary" id="paga">Vai al pagamento</button></div>
                </div>`;
                $("#corpo").css("margin", "6rem 0rem");
                $("#corpo").html(tabella);

                console.log("risposta showCarrello() " + response);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });

};