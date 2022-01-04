<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "mananaforma@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<head>
    <title>Cотня | Отправка формы</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<style>
    a {
        text-decoration: none;
        transition: all .4s ease;
    }
    .container {
        width: 100%;
        max-width: 1210px;
        margin: 0 auto;
        padding: 0 15px;
        position: relative;
    }
    .success {
        padding: 200px 0;
    }
    .success__img {
        max-width: 275px;
        border-radius: 15px;
        margin-bottom: 20px;
    }
    .success__text {
        font-size: 25px;
    }
    .success__wrapper {
        padding-left: 10px;
    }
    .success__link {
        font-size: 18px;
        color: #2b78bb;
    }
    .success__link:hover {
        text-decoration: underline;
    }
    .success__inner {
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    @media (max-width: 1200px) {

        .container {
            width: 960px;
        }
    }

    @media (max-width: 992px) {

        .container {
            width: 720px ;
        }
    }

    @media (max-width: 768px) {

        .container {
            width: 548px;
        }
    }

    @media (max-width: 576px) {

        .container {
            width: 90%;
            padding: 0 15px;
        }
    }

</style>

<section class="success">
    <div class="container">
        <div class="success__inner">
            <img src="vladimir.jpg" alt="Vladimir" class="success__img">
            <div class="success__wrapper">
                <p class="success__text">
                    Спасибо за подписку!
                </p>
                <a href="../../index.html" class="success__link">
                    Вернуться на главную страницу
                </a>
            </div>
        </div>
    </div>
</section>



