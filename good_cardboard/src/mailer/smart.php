<?php 

$phone = $_POST['user_phone'];
$token = "1072615208:AAGt9rrV1Ky8WTaUwt5cssrWrYRX3-GQX2Q";
$chat_id = "-1001453187958";

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$arr = array(
    'Номер телефона' => $phone
);
foreach ($arr as $key => $value) {
    $txt .= "<br>".$key."</b> ".$value. "%0A";
};

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'formsendphp@gmail.com';                 // Наш логин
$mail->Password = 'Takemeprofit163';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('formsendphp@gmail.com', 'Форма обратной связи Добрый картон');   // От кого письмо 
$mail->addAddress('solovyevmeh163@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Телефон: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

$sendtoTelegtam = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>