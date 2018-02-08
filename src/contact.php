<?php

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to      = 'h.hayashi@miraito-inc.co.jp' . ', ';
$to      .= 'y.udagawa@miraito-inc.co.jp';
$subject = 'HPからの問い合わせ';
$message = $_POST['name'] . "\r\n" . $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n";

$res = mb_send_mail($to, $subject, $message, $headers);
echo json_encode(['result' => $res]);