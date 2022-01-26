$(document).ready(function(){
    
    //aggiungere un prodotto
    $(document).on("click", "#add", function () {

        var item = $(this).attr("data-id");

        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/carrello.php?id=" + item,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                console.log(response)
                //messaggio andato a buon fine
            })
            .fail(function (xhr, resp, text) {
                console.log("errore add-products.js" + xhr, resp, text)
            });
        return false;
    });

});