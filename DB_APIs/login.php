<?php
session_start();

require 'db_conn.php';

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

if (isset($email, $password)) {
    // Fetch hashed password, job_preference, and location from database
    $stmt = $pdo->prepare('SELECT password, job_preference, location FROM users WHERE email = ?');
    $stmt->execute([$email]);

    if ($user = $stmt->fetch()) {
        $hashedPassword = $user['password'];

        // Verify the password against the hash
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['job_preference'] = $user['job_preference'];
            $_SESSION['location'] = $user['location'];
            $_SESSION['logged_in'] = true;
            echo json_encode(['status' => 'success', 'message' => 'Login successful']);
            exit;
        }
    }

    echo json_encode(['status' => 'fail', 'message' => 'Invalid username or password']);
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
    exit;
}
?>

