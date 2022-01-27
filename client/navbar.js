$(document).ready(function(){

    controlSession();

    var nav = `<nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid row p-2 m-0" id="titolo">
            <h3 class="col-3">Sublime Restaurant</h3>

            <div class="col-6">
                <button type="button" class="btn" id="home"><a href="./index.html"><img src="./img/icone/home.png" width="30"></a></button>

                <!--funzione all'interno del bottone - attributo onclick-->
                <button type="button" class="btn" id="menu" onclick="showProducts()"><img src="./img/icone/menu.png" width="35"></button>
            </div>

            <div class="col-3 d-flex justify-content-end">
            <p class="d-flex align-items-center p-2 m-0" id="username"></p>
            <button type="button" class="btn" id="login" onclick="showLogin()"><img src="./img/icone/user.png" width="30" id="exit"></button>
            <button type="button" class="btn" id="carrello"><img src="./img/icone/carrello.png" width="30"></button>
            </div>
        </div>
    </nav>`;

    $("#nav").html(nav);
});

function controlSession(){
    console.log("funzione control session attivata");

    $.ajax({
        url: "http://localhost/cime/ristorante/server/api/controllo.php",
        type: "GET",
        dataType: "json"
    })
    .done(function(response){
        
        if(response.esiste){
            console.log(response.esiste + " = esiste sessione user");

            $("#username").html(response.username);
            $("#login").removeAttr("onclick");
            var logout = "<a href='../server/api/logout.php'><img src='./img/icone/exit.png' width='30' id='exit'></a>";
            $("#login").html(logout);

        } else {
            console.log(response.esiste + " = non esiste sessione user");
        }
    })
    .fail(function(xhr, resp, text){
        console.log("errore navbar.js controllo sessione");
    });
};