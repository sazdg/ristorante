$(document).ready(function(){
    
    //PAGINA RECENSIONI
    $("#rec").on("click", function () {

        var rec = `<div class="container-fluid row">
        <div class="col-sm-4 col-1"></div>
        <div class="col-sm-4 col-10">
            <h3 class="d-flex justify-content-center p-5">Client Reviews</h3>

            <h5>Leave a review for our website!</h5>
            <div id="box-rece">
                <form id="rece">
                    <laberl>Stars:<br />
                        <input type="number" class="m-0" min="1" max="5" name="stelle" id="stelle"></label><br />
                        <label>Comment<br />
                            <textarea name="comment" id="comment" form="rece" placeholder="Write here..."></textarea></label>
                            <br/>
                        <button type="button" class="btn btn-primary" id="inviaRece">Send</button>
                </form>
            </div>
            <div id="rispostaRece" style="padding: 10px;">Feedback...</div>

            <div id="dbRece"></div>
        </div>
        <div class="col-sm-4 col-1"></div>
        </div>`;

        $("#app").html(rec);
        showRece();

    });

    //invia una recensione
    $(document).on("click", "#inviaRece", function (e) {
        var stelle = $("#stelle").val();
        var comment = $("#comment").val();
        var data = new Date();
        var strDate = data.getFullYear() + "/" + (data.getMonth() + 1) + "/" + data.getDate();
        console.log(stelle + " - " + comment + " - " + strDate);

        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/inviarecensione.php?stelle=" + stelle + "&comment=" + comment + "&data=" + strDate,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                console.log("recensione scritta + " + response);
                $("#rispostaRece").html(response);
                showRece();

            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
                $("#rispostaRece").html("Errore :(");
            });
        e.preventDefault();
    });
});




//mostra recensioni 
function showRece() {

    $.ajax({
        url: "http://localhost/cime/ristorante/server/api/leggirecensione.php",
        type: "GET",
        contentType: "application/json",
        dataType: "json"
    })
        .done(function (response) {

            var respRece = "";

            for(let i = 0; i < response.length; i++){

                respRece += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 p-1 d-flex align-items-center justify-content-center">
                            <img src="./img/icone/persona.png" width="80" class="img-fluid rounded-start" alt="Utente">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <p class="card-title">`;

                            for(let j = 0; j < response[i].stelle; j++){
                                respRece += `<img src="./img/icone/starfull.png" width="20">`;
                            }
                        
                    respRece += `</p>
                    <p class="card-text">` + response[i].recensione + `</p>
                    <p class="card-text"><small class="text-muted">Reviewed ` + response[i].data + `</small></p>
                    </div>
                        </div >
                    </div >
                </div >`;
            }

            $("#dbRece").html(respRece);
            
        })
        .fail(function (xhr, resp, text) {
            console.log(xhr, resp, text);
        });

};

