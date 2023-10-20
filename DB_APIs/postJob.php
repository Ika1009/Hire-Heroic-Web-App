<?php
require 'db_conn.php';

require 'db_conn.php';

function sendJSONResponse($statusCode, $message) {
    header("Content-Type: application/json");
    http_response_code($statusCode);
    echo json_encode(['statusCode' => $statusCode, 'message' => $message]);
    exit();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    // Get the JSON payload from the incoming request
    $inputJSON = file_get_contents('php://input');
    $data = json_decode($inputJSON, true);

    if (is_array($data)) {
        try {
            // Insert data into the database
            $sql = "INSERT INTO jobs (first_name, last_name, email, company_name, employees, locations, hires_next_6_12, hear_about) VALUES (:first_name, :last_name, :email, :company_name, :employees, :locations, :hires_next_6_12, :hear_about)";
            $stmt = $pdo->prepare($sql);

            // Convert locations array to a string for storage
            $locations = implode(", ", $data['locations[]']);

            $params = [
                ':first_name' => $data['first_name'],
                ':last_name' => $data['last_name'],
                ':email' => $data['email'],
                ':company_name' => $data['company_name'],
                ':employees' => $data['employees'],
                ':locations' => $locations,
                ':hires_next_6_12' => $data['hires_next_6-12'],
                ':hear_about' => $data['hear_about']
            ];

            $stmt->execute($params);

            if ($stmt->rowCount() > 0) {
                sendJSONResponse(200, "Data inserted successfully!");
            } else {
                sendJSONResponse(500, "Failed to insert data.");
            }

        } catch (Exception $e) {
            sendJSONResponse(500, $e->getMessage());
        }
    } else {
        sendJSONResponse(400, "Invalid data received.");
    }
} else {
    sendJSONResponse(405, "Method not allowed.");
}

?>
