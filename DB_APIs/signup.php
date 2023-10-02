<?php
require 'db_conn.php';  // Include the database connection

header('Content-Type: application/json');

// Log or print all POST variables
error_log("POST variables: " . json_encode($_POST));

$email = isset($_POST['email']) ? $_POST['email'] : null;
$password = isset($_POST['password']) ? $_POST['password'] : null;
$fullName = isset($_POST['full_name']) ? $_POST['full_name'] : null;
$location = isset($_POST['location']) ? $_POST['location'] : null;
$jobPreference = isset($_POST['job_preference']) ? $_POST['job_preference'] : null;

$missing_vars = [];

foreach(['email', 'password', 'fullName', 'location', 'jobPreference'] as $var) {
    if (!isset($$var)) $missing_vars[] = $var;
}

if (empty($missing_vars)) {

    // Split the full name into first and last name
    $names = explode(' ', $fullName);
    $firstName = $names[0];
    $lastName = isset($names[1]) ? $names[1] : '';
    
    // First, check if the email already exists
    $stmt = $pdo->prepare('SELECT email FROM users WHERE email = ?');
    $stmt->execute([$email]);

    if ($stmt->fetch()) {
        echo json_encode(['status' => 'error', 'message' => 'Email already exists']);
        exit;
    }

    // If email doesn't exist, proceed with registration
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare('INSERT INTO users (email, password, first_name, last_name, location, job_preference) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([$email, $hashedPassword, $firstName, $lastName, $location, $jobPreference]);

    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    exit;

} else {
    echo json_encode([
        'status' => 'error', 
        'message' => 'Some variables are missing', 
        'missing_vars' => $missing_vars,
        'debug_post_data' => $_POST  // Debugging line
    ]);
    exit;
}
?>
