<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
echo "email - ". $email. "<br>phone - ". $phone;
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sanek.uvarov.01@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '...'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sanek.uvarov.01@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('mr.eichelfrau@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заказ сайта';
$mail->Body    = 'Вам пришло новое сообщение от '. $email. ' !';
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
    echo "here";
} else {
    return true;
    echo "or here";
}
?>