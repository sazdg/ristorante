$(document).ready(function () {

    var reg = `<div><form>
    <span>Username</span><br/>
    <input type="text" id="nome"><br/>
    <span>Email</span><br/>
    <input type="text" id="email"><br/>
    <span>Password</span><br/>
    <input type="password" id="psw"><br/>
    </form>
    
    <div class="container-fluid row">
    <a href="./index.html" class="badge bg-info text-dark">Home</a></div>
    </div>`;

    //evento click bottone
    $(document).on("click", "#reg", function () {
        $("#app").html(reg);
    });
});