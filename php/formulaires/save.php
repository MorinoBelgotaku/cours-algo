<?php
require_once('connexion.php');

if (isset($_POST["btnadd"])) {
  $nom = $_POST["nom"];
  $prenom = $_POST["prenom"];
  $date_naissance = $_POST["date_naissance"];
  $civilite = $_POST["civilite"];
  $image = $_POST["image"];

}

$sql = "INSERT INTO formulaire (nom, prenom, date_naissance, civilite, image)
VALUES ('$nom', '$prenom', '$date_naissance', '$civilite', '$image')";
$stmt= $conn->prepare($sql);
$stmt->execute();