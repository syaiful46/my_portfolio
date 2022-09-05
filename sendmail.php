<?php
$msg = "Hay apa kabar";

$msg = wordwrap($msg,70);

// send email
mail("syaifulramadhan31121999@gmail.com","judul",$msg);
?>