$(document).ready(function(){

    var log = `<div><form>
    <span>Username</span><br/>
    <input type="text" id="nome"><br/>
    <span>Password</span><br/>
    <input type="password" id="psw"><br/>
    <input type="submit" value="Invia" id="invia">
    </form>
    
    <div class="container-fluid row">
    <a href="./index.html" class="badge bg-info text-dark">Torna alla home</a></div>
    </div>`;

    //evento click bottone
    $(document).on("click", "#login", function(){
        $("#app").html(log);
    });

    $(document).on("click", "#invia", function(){

        var dati = {
            user: $("#nome").val(),
            password: $("#psw").val()
        };

        var datilogin = JSON.stringify(dati);

        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/login.php",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: datilogin
        })
        .done(function(response){
            console.log("Ecco la risposta " + response);
        })
        .fail(function(xhr, resp, text){
            console.log("Errore " + text);
            console.log(xhr, resp, text);
        });

        return false;
    });
});