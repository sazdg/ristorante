$(document).ready(function(){


    $(document).on("click","#invia", function(){

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

function showLogin(){

    var log = `<div class="container row m-auto">
    <h3 class="d-flex justify-content-center pt-5">Login</h3>
    <div class="container-fluid row p-5 text-center">
    <form>
    <p>Username</p>
    <input type="text" id="nome" required><br/>
    <p>Password</p>
    <input type="password" id="psw" required><br/><br/>
    <input type="submit" class="btn btn-primary" value="SUBMIT" id="invia">
    </form>
    </div>
    
    <div class="container-fluid row p-5">
    <p class="text-center">I'm a new customer</p>
    <button type="button" class="btn btn-dark m-auto reg-stile" id="reg">REGISTER</button>
    </div>
    </div>`;

    $("#app").html(log);
};
