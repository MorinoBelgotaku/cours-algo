<?php
$servername = "localhost";
$username = "test";
$password = "test123";
$dbname = "exercices";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Erreur de connexion: " . $e->getMessage();
}
?>