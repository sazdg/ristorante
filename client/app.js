$(document).ready(function(){

    var home = `<div>

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
                    <img src="./img/food.png" class="d-block w-100" height="700" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food2.jpg" class="d-block w-100" height="700" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food3.jpg" class="d-block w-100" height="700" alt="">
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
    <div class="col-2"></div>
    <p class="col-8 text-center pt-4 pb-4 fs-4">Sublime Restaurant is a cozy restaurant created by a husband and wife who wanted to build an eating establishment where everyone feels welcome and comfortable. Sublime Restaurant's website exhibits the restaurant's select food and drinks to give a glimpse at the distinguished, yet down - to - earth menu Sublime Restaurant serves its consumers.</p>
    <div class="col-2"></div>
    </div>
    </div>`;

    //home
    $("#app").html(home);

    //PAGINA RECENSIONI
    $("#rec").on("click", function(){
        var rec = `<div class="container-fluid row">
        <div class="col-4"></div>
        <div class="col-4">
        <h3 class="d-flex justify-content-center p-5">Client Reviews</h3>

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img src="./img/icone/persona.png" width="100" class="img-fluid rounded-start" alt="Utente">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"><img src="./img/icone/stelle.png" height="30"></h5>
                    <p class="card-text">The service is great, the staff knows what they are serving and how to match the wine. Food is at the high quality and well presented.</p>
                    <p class="card-text"><small class="text-muted">Reviewed November 2, 2021</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="./img/icone/persona.png" width="100" class="img-fluid rounded-start" alt="Utente">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><img src="./img/icone/stelle.png" height="30"></h5>
                        <p class="card-text">Sublime very good food and service,but the high quality is there. this restaurant is a pleasure for your mouth.</p>
                        <p class="card-text"><small class="text-muted">Reviewed July 15, 2021</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="./img/icone/persona.png" width="100" class="img-fluid rounded-start" alt="Utente">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><img src="./img/icone/stelle.png" height="30"></h5>
                        <p class="card-text">Good experience. with my friend and family during my daughter birthday.food was good with nice ambience.</p>
                        <p class="card-text"><small class="text-muted">Reviewed January 11, 2021</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="./img/icone/persona.png" width="100" class="img-fluid rounded-start" alt="Utente">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"><img src="./img/icone/stelle.png" height="30"></h5>
                        <p class="card-text">An excellent place with great atmosphere. The food is always good and so is the service. Would definitely recommend it to anyone.</p>
                        <p class="card-text"><small class="text-muted">Reviewed March 21, 2020</small></p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        <div class="col-4"></div>
        </div>`;
        $("#app").html(rec);
    });
});