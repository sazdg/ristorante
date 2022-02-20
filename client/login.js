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
            alert(response);
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
    <div class="container-fluid row p-4 text-center">
    <form>
    <p>Username</p>
    <input type="text" id="nome" required><br/>
    <p>Password</p>
    <input type="password" id="psw" required><br/><br/>
    <input type="submit" class="btn btn-primary" value="SUBMIT" id="invia"><br/>
    <a href="#" style="text-decoration: underline;" onclick="changePSW()">Forgot password?</a>
    </form>
    </div>
    <h3 class="d-flex justify-content-center pt-2">Registration</h3>
    <div class="container-fluid row p-4">
    <p class="text-center">I'm a new customer</p>
    <button type="button" class="btn btn-dark m-auto reg-stile" id="reg">REGISTER</button>
    </div>
    </div>`;

    $("#app").html(log);
};

function changePSW(){
    var psw = `<div class="container row m-auto">
    <h3 class="d-flex justify-content-center pt-3">Change Password</h3>
    <div class="container-fluid row p-4 text-center">
    <form method="post" action="../server/api/changepassword.php">
    <p>Username</p>
    <input type="text" name="nome" required><br/>
    <p>Email</p>
    <input type="email" name="email" required><br/>
    <p>New Password</p>
    <input type="text" name="psw-new" required><br/>
    <input type="submit" class="btn btn-primary m-auto" id="newpsw" value="Send">
    </form>
    </div>
    </div>`;

    $("#app").html(psw);
};