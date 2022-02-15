$(document).ready(function(){

    var footer = `
    <div class="container-fluid row p-4 m-0 bg-danger" id="sfondo-footer">
    <div class="col-10 col-sm-4 align-self-center text-center"><img src="./img/logo.png" width="50%" alt="logo"></div>
    <div class="col-10 col-sm-4"><h4>Need some help?</h4><br/><p>sublime@restaurant.com</p><p>FAQ</p></div>
    <div class="col-10 col-sm-4"><h4>About us</h4><br/>
    <ul>
    <li>Menu</li>
    <li>Events</li>
    <li>Work with us</li>
    <li>Restaurants</li>
    </ul>
    </div>
    </div>`;

    $("#footer").html(footer);
});