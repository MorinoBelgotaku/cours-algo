<?php
require_once('connexion.php');

if (isset($_POST["btnadd"])) {
  $nom = $_POST["nom"];
  $prenom = $_POST["prenom"];
  $email = $_POST["email"];
  $date_naissance = $_POST["date_naissance"];
  $civilite = $_POST["civilite"];
}

try {
  $sql = "INSERT INTO formulaire (nom, prenom, email, date_naissance, civilite, date_inscription)
  VALUES ('$nom', '$prenom', '$email', '$date_naissance', '$civilite', DEFAULT)";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  echo "Envoyé avec succés !";
} catch (Exception $e) {
  echo "Une erreur est survenu";
}
echo "<br>Redirection à la page précédente dans 5 secondes...";
header("Refresh:5; url=formulaire.php");
?>
<html>

<head>
  <style>
    html {
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      display: grid;
      height: 100vh;
      place-content: center;
      font-size: xx-large;
      text-align: center;
    }
  </style>
</head>

<body>

</body>

</html>