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
                    <img src="./img/food.jpg" class="d-block w-100 img-car" height="700" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food2.jpg" class="d-block w-100 img-car" height="700" alt="">
                </div>
                <div class="carousel-item">
                    <img src="./img/food3.jpg" class="d-block w-100 img-car" height="700" alt="">
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

    <div class="container-fluid row d-flex justify-content-center m-auto">
    <p class="col-8 text-center pt-4 pb-4 fs-5" id="testo">Sublime Restaurant is a cozy restaurant created by a husband and wife who wanted to build an eating establishment where everyone feels welcome and comfortable. Sublime Restaurant's website exhibits the restaurant's select food and drinks to give a glimpse at the distinguished, yet down - to - earth menu Sublime Restaurant serves its consumers.</p>
    </div>

    <div class="bg-warning p-3 text-center">
    <p>The simple yet carefully created dishes are complimented by relaxed and attentive service in a comfortable, humble setting.</p>
    <p>Rich culinary traditions, exotic products and flavoursome spices.</p>
    <div class="text-center"><button type="button" class="btn btn-light" onclick="showProducts()">FOOD & DRINKS</button></div>
    </div>
    
    <div class="container row d-flex flex-wrap justify-content-center m-auto">
    <div class="col-sm-4 col-10 specchietto d-flex">
    <strong><p>The ground-floor restaurant has exposed brick walls, traditional white-washed copper ceilings and weathered leather banquette seats.</p></strong>
    <img src="./img/wall.jpg" alt="brick wall" class="img-specchietto"></div>
    <div class="col-sm-4 col-10 specchietto d-flex">
    <strong><p>A place to socialise over drinks and share plates of hearty, comforting food ad good music.</p></strong>
    <img src="./img/drink.jpg" alt="drinks" class="img-specchietto"></div>
    </div>

    </div>`;

    //home
    $("#app").html(home);

    
});
