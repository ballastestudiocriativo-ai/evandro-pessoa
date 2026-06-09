<?php
$PHONE_RAW = "5511991813725";
$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if (strlen($name) < 2 || strlen($phone) < 8 || strlen($message) < 5) {
  header("Location: index.php#contato");
  exit;
}

$text = "Olá Evandro, meu nome é {$name} ({$phone}).\n\n{$message}";
$url = "https://wa.me/{$PHONE_RAW}?text=" . rawurlencode($text);
header("Location: {$url}");
exit;
