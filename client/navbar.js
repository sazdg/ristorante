$(document).ready(function(){

    var nav = `<nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid row p-2 m-0" id="titolo">
            <h3 class="col-3">Sublime Restaurant</h3>

            <div class="col-7">
                <button type="button" class="btn" id="home"><a href="./index.html"><img src="./img/icone/home.png" width="30"></a></button>
            </div>

            <div class="col-2 d-flex justify-content-end">
            <button type="button" class="btn" id="login"><img src="./img/icone/user.png" width="30"></button>
            <button type="button" class="btn" id="carrello"><img src="./img/icone/carrello.png" width="30"></button>
            </div>
        </div>
    </nav>`;

    $("#nav").html(nav);
});