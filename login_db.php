<?php
$servername = "127.0.0.1"; 
$username = "root"; 
$password = "Luck0409@"; 
$dbname = "login";
$conn="";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Example user data
$username = 'exampleUser';
$password = 'examplePassword';

// Hash the password
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Prepare and execute the SQL statement
$sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $passwordHash);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
// Example user data
$username = 'exampleUser';
$password = 'examplePassword';

// Hash the password
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Prepare and execute the SQL statement
$sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $passwordHash);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();


// Retrieve form data
$inputUsername = $_POST['in-user'];
$inputPassword = $_POST['in-pass'];

// Prepare and execute SQL statement to get password hash
$sql = "SELECT password_hash FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $inputUsername);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($passwordHash);

if ($stmt->num_rows > 0) {
    $stmt->fetch();

    // Verify the password
    if (password_verify($inputPassword, $passwordHash)) {
        echo "Login successful";
        // You can redirect the user or start a session here
    } else {
        echo "Invalid username or password";
    }
} else {
    echo "Invalid username or password";
}

$stmt->close();
$conn->close();
?>