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
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });

});