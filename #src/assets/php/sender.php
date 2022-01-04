<?php
    
    $email = $_POST['email'];

	$to = "mananaforma@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Почта: $email /n";
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Привет, форма отправлена</p>
