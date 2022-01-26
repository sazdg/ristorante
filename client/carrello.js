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
    });

});