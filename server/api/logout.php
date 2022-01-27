<?php
session_start();
session_destroy();
header("Location:http://localhost/cime/ristorante/client/index.html");
exit;
?>