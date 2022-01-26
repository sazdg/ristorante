$(document).ready(function(){

    var log = `<div class="container row m-auto">
    <div class="container-fluid row p-5 text-center">
    <form>
    <p>Username</p>
    <input type="text" id="nome"><br/>
    <p>Password</p>
    <input type="password" id="psw"><br/><br/>
    <input type="submit" class="btn btn-primary" value="SUBMIT" id="invia">
    </form>
    </div>
    
    <div class="container-fluid row p-5">
    <p class="text-center">I'm a new customer</p>
    <button type="button" class="btn btn-dark m-auto reg-stile" id="reg">REGISTER</button>
    </div>
    </div>`;

    //evento click bottone
    $(document).on("click", "#login", function(){
        $("#app").html(log);
    });

    $(document).on("submit", function(){

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
            console.log(response);
            window.location.assign("index.html");
        })
        .fail(function(xhr, resp, text){
            console.log("Errore " + text);
            console.log(xhr, resp, text);
        });

        return false;
    });
});