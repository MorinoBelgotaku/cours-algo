<?php
$servername = "localhost";
$username = "morin_bruno";
$password = "Bruno123";
$dbname = "exercices";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["btnadd"])) {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $date_naissance = $_POST["date_naissance"];
    $civilite = $_POST["civilite"];

}
$sql = "INSERT INTO formulaire (nom, prenom, date_naissance, civilite)
VALUES ('$nom', '$prenom', '$date_naissance', '$civilite')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>