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
                var tabella = `<table class="table table-hover">
                <tr>
                <td>Nome</td><td>Prezzo</td>
                </tr>
                </table>`;
                console.log(response);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });

    });


});