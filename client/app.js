//scaricare la risora, appena è pronta esegue le istruzioni
$(document).ready(function(){

    var home = `<div>
    <div class="container-fluid row p-4" id="titolo">
    <h3 class="col-3">Sublime Restaurant</h3>
    <span class="col-6"></span>
    <button type="button" class="col-1 btn btn-warning m-2 btn-sm" id="login">LOGIN</button>
    <button type="button" class="col-1 btn btn-dark m-2 btn-sm" id="reg">Registrati</button>
    </div>

    <!--CAROSELLO-->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./img/food.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food2.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food3.jpg" class="d-block w-100" alt="">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    <div class="container-fluid row">
    <p>Sublime Restaurant is a cozy restaurant created by a husband and wife who wanted to build an eating establishment where everyone feels welcome and comfortable. Sublime Restaurant's website exhibits the restaurant's select food and drinks to give a glimpse at the distinguished, yet down - to - earth menu Sublime Restaurant serves its consumers.</p></div></div>`;

    //home
    $("#app").html(home);

});