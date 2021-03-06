$(document).ready(function(){

    controlSession();

    //DEFAULT NAVBAR
    var nav = `<nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid row m-0" id="titolo">
            <h3 class="col-12 col-md-2 text-center p-2"><a href="./index.html">Sublime Restaurant</a></h3>

            <div class="col-8 col-md-8 d-flex justify-content-center barra">
                <button type="button" class="btn nav-icona" id="home"><a href="./index.html"><img src="./img/icone/home.png" width="30"></a></button>

                <!--funzione all'interno del bottone - attributo onclick-->
                <button type="button" class="btn nav-icona" id="menu" onclick="showProducts()"><img src="./img/icone/menu.png" width="35"></button>

                <button type="button" class="btn nav-icona" id="rec"><img src="./img/icone/rec.png" width="35"></button>
            </div>

            <div class="col-4 col-md-2 d-flex justify-content-end barra">
            <p class="d-flex align-items-center p-2 m-0" id="username"></p>
            <span id="divisorio"> | </span>
            <button type="button" class="btn nav-icona" id="login" onclick="showLogin()"><img src="./img/icone/user.png" width="30" id="exit"></button>
            <button type="button" class="btn nav-icona" id="carrello"><img src="./img/icone/carrello.png" width="30"></button>
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

            if(response.username == "Sara" || response.username == "Isabella"){
                $("#username").html("ADMIN");
                //ICONA LOGOUT
                $("#login").removeAttr("onclick");
                var logout = "<a href='../server/api/logout.php'><img src='./img/icone/exit.png' width='30' id='exit'></a>";
                $("#login").html(logout);
                //ICONTA IMPOSTAZIONI
                $("#carrello").attr("id","admin");
                var admin = "<img src='./img/icone/admin.png' width='30'>";
                $("#admin").html(admin);

            } else {
                //TIPO UTENTE: CLIENTE
                $("#username").html(response.username);
                //ICONA LOGOUT
                //$("#login").removeAttr("onclick");
                $("#login").attr("onclick","alert(\"Hai effettuato il logout\");");
                var logout = "<a href='../server/api/logout.php'><img src='./img/icone/exit.png' width='30' id='exit'></a>";
                $("#login").html(logout);

            }
            
        } else {
            console.log(response.esiste + " = non esiste sessione user");
        }
    })
    .fail(function(xhr, resp, text){
        console.log("errore navbar.js controllo sessione");
    });
};