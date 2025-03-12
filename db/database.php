
<?php
// Database connection settings
define('DB_HOST', 'localhost');
define('DB_USER', 'root');  // Change to your MySQL username
define('DB_PASS', '');      // Change to your MySQL password
define('DB_NAME', 'military_prep');

// Create database connection
function connectDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    return $conn;
}

// Close database connection
function closeDB($conn) {
    $conn->close();
}

// Get all records from a table
function getAll($table) {
    $conn = connectDB();
    $sql = "SELECT * FROM $table";
    $result = $conn->query($sql);
    
    $data = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    
    closeDB($conn);
    return $data;
}

// Get a single record by ID
function getById($table, $id) {
    $conn = connectDB();
    $sql = "SELECT * FROM $table WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();
    
    $stmt->close();
    closeDB($conn);
    return $data;
}

// Insert a new record
function insert($table, $data) {
    $conn = connectDB();
    
    $columns = implode(", ", array_keys($data));
    $placeholders = str_repeat("?, ", count($data) - 1) . "?";
    
    $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";
    $stmt = $conn->prepare($sql);
    
    $types = str_repeat("s", count($data)); // Assuming all strings for simplicity
    $values = array_values($data);
    
    $stmt->bind_param($types, ...$values);
    $stmt->execute();
    
    $insertId = $stmt->insert_id;
    $stmt->close();
    closeDB($conn);
    
    return $insertId;
}

// Update an existing record
function update($table, $data, $id) {
    $conn = connectDB();
    
    $updates = [];
    foreach (array_keys($data) as $column) {
        $updates[] = "$column = ?";
    }
    $updateStr = implode(", ", $updates);
    
    $sql = "UPDATE $table SET $updateStr WHERE id = ?";
    $stmt = $conn->prepare($sql);
    
    $types = str_repeat("s", count($data)) . "i"; // All strings + integer ID
    $values = array_values($data);
    $values[] = $id;
    
    $stmt->bind_param($types, ...$values);
    $success = $stmt->execute();
    
    $stmt->close();
    closeDB($conn);
    
    return $success;
}

// Delete a record
function delete($table, $id) {
    $conn = connectDB();
    
    $sql = "DELETE FROM $table WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $success = $stmt->execute();
    
    $stmt->close();
    closeDB($conn);
    
    return $success;
}

// Custom query execution
function executeQuery($sql, $params = [], $types = "") {
    $conn = connectDB();
    
    $stmt = $conn->prepare($sql);
    
    if (!empty($params)) {
        $stmt->bind_param($types, ...$params);
    }
    
    $stmt->execute();
    $result = $stmt->get_result();
    
    $data = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    
    $stmt->close();
    closeDB($conn);
    
    return $data;
}

// Sanitize input data to prevent SQL injection
function sanitize($data) {
    $conn = connectDB();
    
    if (is_array($data)) {
        foreach ($data as $key => $value) {
            $data[$key] = $conn->real_escape_string($value);
        }
    } else {
        $data = $conn->real_escape_string($data);
    }
    
    closeDB($conn);
    return $data;
}
