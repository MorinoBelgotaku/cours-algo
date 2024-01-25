<?php
    $civilite = $_GET['civilite'] ?? 1;
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <style>
        html {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    </style>
</head>

<body>
    <h1><?php echo $civilite == 1 ? 'Bonjour monsieur' : 'Bonjour madame' ?></h1>
</body>

</html>