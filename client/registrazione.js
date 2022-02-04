$(document).ready(function(){

    $(document).on("click", "#reg", function(){

        var reg = `<div class="container row m-auto">
        <div class="container-fluid row p-5 text-center">
        <form method="post" action="../server/api/registrazione.php">
        <p>Username</p>
        <input type="text" id="nome" name="nome" required><br/>
        <p>Email</p>
        <input type="text" id="email" name="email" required><br/>
        <p>Password</p>
        <input type="password" id="psw" name="psw" required><br/>
        <input type="checkbox" class="form-check-input" value="terms" id="terms" required>Agree to terms and conditions<br/><br/>
        <input type="submit" class="btn btn-primary" value="SUBMIT" id="send">
        </form>
        </div>
        <p id="risposta"></p>
        </div>`;

        $("#app").html(reg);
    })
})