$(document).ready(function(){

    $(document).on("click", "#admin", function(){
        showAdmin();
    });

    $(document).on("click", "#elimina", function(){
        var idProdotto = $(this).attr("data-id");
        console.log(idProdotto);

        $.ajax({
            url:"http://localhost/cime/ristorante/server/api/elimina.php?id=" + idProdotto,
            type:"DELETE",
            dataType:"json"
        })
        .done(function(response){
            console.log("funge -> " + response);
            alert("Hai cancellato il prodotto " + idProdotto + " con successo");
            showAdmin();
        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
        });
    });

    $(document).on("click", "#aggiungi", function(){
        showForm();
    });

    $(document).on("click", "#newproduct", function(){

        var pro = $("#nome").val();
        var pre = $("#prezzo").val();
        var cat = $("#categoria :selected").val();
        console.log(pro, pre, cat);
        
        $.ajax({
            url:"http://localhost/cime/ristorante/server/api/aggiungi.php?nome=" + pro + "&prezzo=" + pre + "&categoria=" + cat,
            type:"GET",
            dataType:"json"
        })
        .done(function(response){
            console.log("funge -> " + response);
            alert("Hai aggiunto il prodotto " + pro + " con successo");
            showAdmin();
        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
            console.log("errore submit admin.js");
        });
        return false;

    });
    
});

function showAdmin(){

    $.ajax({
        url: "http://localhost/cime/ristorante/server/api/prodotti.php",
        type: "GET",
        dataType: "json"
    })
        .done(function (response) {

            var admin = `
            <div class="container row m-0 p-4 col-2 mx-auto"><button type="button" class="btn btn-primary" id="aggiungi"><img src="./img/icone/aggiungi.png" width="30"></button></div>
            
            <div class="container-fluid row m-0">
            <div class="col-2"></div>
            <div class="col-8 text-center d-flex justify-content-center p-4" id="corpo-admin">

            <table class="table table-warning">
            <tr>
                <th>ID item</th><th>Prodotto</th><th>Elimina</th>
            </tr>`;
            

            for (let i = 0; i < response.prodotti.length; i++) {
                var nome = response.prodotti[i].nome;
                var immagini = response.prodotti[i].immagini;
                var prezzo = response.prodotti[i].prezzo;
                var id = response.prodotti[i].id;
                var categoria = response.prodotti[i].categoria;

                admin += "<tr><td>" + id + "</td><td>" + nome + "</td><td><button type='button' class='btn btn-danger' data-id='" + id + "' id='elimina'><img src='./img/icone/cestino.png' width='25'></button></td></tr>";
            }

            admin += `</table></div>
            <div class="col-2"></div>
            </div>`;

            $("#app").html(admin);
        })
        .fail(function (xhr, resp, text) {
            console.log("Errore " + text);
            console.log(xhr, resp, text);
            var errore = "<p>FAIL admin.js</p>";
            $("#app").html(errore);
        });
    return false;

}

function showForm(){
    var form = `<div class="container row m-0 p-5 mx-auto">
    <form class="p-5" id="addProduct">
    Nome prodotto:<br/>
    <input type="text" class="form-control m-0" id="nome" required><br/>
    Prezzo prodotto:<br/>
    <input type="number" class="form-control m-0" id="prezzo" required><br/>
    Selezionare categoria prodotto:<br/>
    <select class="form-control" name="categoria" id="categoria" required>
    <option value="1" selected>Primi</option>
    <option value="2">Secondi</option>
    <option value="3">Dessert</option>
    <option value="4">Bevande</option>
    </select>
    <input type="submit" class="btn btn-primary" value="Aggiungi prodotto" id="newproduct">
    </form>
    </div>`;

    $("#app").html(form);
}