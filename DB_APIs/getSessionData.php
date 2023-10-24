<?php
session_start();
header('Content-Type: application/json');
echo json_encode([
    'job_preference' => $_SESSION['job_preference'],
    'location' => $_SESSION['location']
]);
?>
