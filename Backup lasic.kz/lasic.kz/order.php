<?php
require_once "vendor/autoload.php";

$secret = '6LcP3oYUAAAAAKBAdfaNXISWSZXJl1ZjuXj1I6zu';
$ip = $_SERVER['REMOTE_ADDR'];
$response = $_POST['g-recaptcha-response'];
$rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
$arr = json_decode($rsp, TRUE);
if($arr['success']){
    $name = $_REQUEST["name"];
    $phone = $_REQUEST["phone"];
    $email = $_REQUEST["email"];
    $from = $_REQUEST["from"];
    $obl = $_REQUEST["obl"];
    $message = $_REQUEST["message"];

    $m =
        "Имя: $name <br>" .
        "Телефон: $phone<br>" .
        "Email: $email<br>" .
        "Область: $obl<br>" .
        "Сообщение: $message<br>" .
        "Кнопка, с которой пришла заявка: <strong>$from</strong><br>";

    echo $m;

//    Mail::sendMail("localhost", 25, "zayavki@lasic.kz", "7mUc_99e", "Глазолик", "aspiosa@gmail.com", "Заявка", $m);
    Mail::sendMail("localhost", 25, "zayavki@lasic.kz", "7mUc_99e", "Глазолик", "glazolik.kz@yandex.ru", "Заявка", $m);
//Mail::sendMail("localhost", 25, "zayavki@lasik.kz", "7mUc_99e", "Глазолик", "glazolik.kz@yandex.ru", "Заявка", $m);
}else{
    echo 'fail';
}

