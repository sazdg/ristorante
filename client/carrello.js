$(document).ready(function(){

    var cart = `<div class="container-fluid row m-0">
    <div class="col-2"></div>
    <div class="col-8 text-center d-flex justify-content-center p-4" id="corpo">
        <div class="alert alert-danger" role="alert" id="alertcarrello">Non ci sono prodotti nel carrello!</div>
    </div>
    <div class="col-2"></div>
    </div>`;

    $(document).on("click","#carrello", function(){
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

                for(var i = 0; i < response.nome.length; i++){
                    tabella += `<tr><td>` + response.nome[i] + `</td><td>` + response.prezzo[i] + `</td>
                    <td>
                    <button type="button" class="btn" id="cestino" data-nome="` + response.nome[i] + `"><img src="./img/icone/cestino.png" width="20"></button>
                    </td></tr>`;
                }

                tabella += "</table><h5>Totale </h5></div>";
                $("#corpo").css("margin", "6rem 0rem");
                $("#corpo").html(tabella);
                
                console.log(response);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });

    });


});