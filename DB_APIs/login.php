<?php

session_start(); // Start the session

require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

$email = $_POST['email'];
$password = $_POST['password'];

if (isset($email, $password)) {
    // Fetch hashed password and id from database
    $stmt = $pdo->prepare('SELECT id, password FROM users WHERE email = ?');
    $stmt->execute([$email]);

    if ($user = $stmt->fetch()) {
        $hashedPassword = $user['password']; 

        // Verify the password against the hash
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['id'] = $user['id'];
            $_SESSION['logged_in'] = true;
            echo json_encode(['status' => 'success', 'message' => 'Login successful', 'id' => $user['id']]);
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
