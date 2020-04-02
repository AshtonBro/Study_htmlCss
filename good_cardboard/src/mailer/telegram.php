
<?php
// https://api.telegram.org/bot1072615208:AAGt9rrV1Ky8WTaUwt5cssrWrYRX3-GQX2Q/getUpdates
$phone = $_POST['user_phone'];

$token = "1072615208:AAGt9rrV1Ky8WTaUwt5cssrWrYRX3-GQX2Q";
$chat_id = "-1001453187958";

$arr = array(
    'Клиент: ' => 'С сайта Добрый Картон',
    'Номер телефона: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chat_id."&parse_mode=html&text=".$txt, "r");

if(!$sendToTelegram ->send()) {
    return false;
} else {
    return true;
}

?>