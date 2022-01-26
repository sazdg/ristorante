$(document).ready(function () {

    var reg = `<div class="container row m-auto">
    <div class="container-fluid row p-5 text-center">
    <form>
    <p>Username</p>
    <input type="text" id="nome" required><br/>
    <p>Email</p>
    <input type="text" id="email" required><br/>
    <p>Password</p>
    <input type="password" id="psw" required><br/>
    <input type="checkbox" class="form-check-input" value="terms" id="terms" required>Agree to terms and conditions<br/><br/>
    <input type="submit" class="btn btn-primary" value="SUBMIT" id="send">
    </form>
    </div>
    <div class="alert alert-danger" role="alert" id="avviso"></div>
    </div>`;

    //evento click bottone
    $(document).on("click", "#reg", function () {
        $("#app").html(reg);
    });

    $(document).on("click", "#send", function(){

        var dati = {
            nome: $("#nome").val(),
            password: $("#psw").val(),
            email: $("#email").val()
        };

        var datireg = JSON.stringify(dati);

        $.ajax({
            url: "http://localhost/cime/ristorante/server/api/registrazione.php",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: datireg
        })
        .done(function(response){
            console.log(response);
            $("#avviso").text(response);
        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
            $("#avviso").text(text);
        });
        return false;
    });
});