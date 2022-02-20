$(document).ready(function(){

    $(document).on("click", "#reg", function(){

        showRegistrazione();
    })
})

function showRegistrazione(){
    var reg = `<div class="container row m-auto">
        <h3 class="d-flex justify-content-center pt-5">Registration</h3>
        <div class="container-fluid row p-5 text-center">
        <form method="post" action="../server/api/registrazione.php">
        <p>Username</p>
        <input type="text" id="nome" name="nome" required><br/>
        <p>Email</p>
        <input type="text" id="email" name="email" required><br/>
        <p>Password</p>
        <input type="text" id="psw" name="psw" required><br/>
        <p>Ripeti la password</p>
        <input type="text" id="psw" name="psw2" required><br/>
        <input type="checkbox" class="form-check-input" value="terms" id="terms" required>Agree to terms and conditions<br/><br/>
        <input type="submit" class="btn btn-primary" value="SUBMIT" id="send">
        </form>
        </div>
        <p id="risposta"></p>
        </div>`;

    $("#app").html(reg);
}