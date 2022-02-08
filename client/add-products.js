$(document).ready(function(){
    
    //AGGIUNGERE PRODOTTI AL CARRELLO USER
    $(document).on("click", "#add", function () {

        var item = $(this).attr("data-id");

        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/carrello.php?id=" + item,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                //CONTROLLO SESSIONE NEL PHP. UTENTE ESISTE = TRUE O FALSE


                if(response.esiste){
                    console.log("Prodotto " + response.messaggio + " aggiunto con successo al carrello");
                    alert("Prodotto " + response.messaggio + " aggiunto con successo al carrello");
                } else {
                    console.log("Non sei registrato!");
                    alert("Effettua l'accesso per aggiungere il prodotto al carrello!");
                    showLogin();
                }
            })
            .fail(function (xhr, resp, text) {
                console.log("errore add-products.js" + xhr, resp, text);
            });
        return false;
    });

});