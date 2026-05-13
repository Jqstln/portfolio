<?php
declare(strict_types=1);

header('Content-Type: application/json');

define('MAILER_SECRET', 'MAILER_SECRET_PLACEHOLDER');
define('TO_EMAIL', 'hello@justinnn.dev');
define('FROM_EMAIL', 'noreply@justinnn.dev');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Verify shared secret from Cloudflare Worker
$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if ($auth !== 'Bearer ' . MAILER_SECRET) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$name    = trim(strip_tags($body['name'] ?? ''));
$email   = trim($body['email'] ?? '');
$message = trim(strip_tags($body['message'] ?? ''));

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

if (strlen($name) > 100 || strlen($email) > 255 || strlen($message) > 2000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Input too long']);
    exit;
}

$subject   = 'New portfolio message from ' . $name;
$body_text = "Name: {$name}\r\nEmail: {$email}\r\n\r\nMessage:\r\n{$message}";
$headers   = implode("\r\n", [
    'From: ' . FROM_EMAIL,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$sent = mail(TO_EMAIL, $subject, $body_text, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail delivery failed']);
}
