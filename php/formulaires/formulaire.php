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
            user-select: none;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        form {
            display: flex;
            flex-direction: column;
        }

        input, select {
            margin-bottom: 10px;
        }

        div {
            text-align: center;
        }
    </style>
</head>

<body>
    <form method="post" action="save.php">
        <label for="nom">Nom:</label>
        <input type="text" id="nom" name="nom">
        <label for="prenom">Prénom:</label>
        <input type="text" id="prenom" name="prenom">
        <label for="prenom">Email:</label>
        <input type="email" id="email" name="email">
        <label for="date_naissance">Date de naissance:</label>
        <input type="date" id="date_naissance" name="date_naissance">
        <label for="civilite">Civilite:</label>
        <select id="civilite" name="civilite">
            <option value="1">Monsieur</option>
            <option value="0">Madame</option>
        </select>
        <!-- <label for="nom">Image:</label>
        <input type="file" id="image" name="image"> -->
        <div>
        <input type="submit" name="btnadd" value="Valider">
        <input type="reset" value="Effacer">
        </div>
    </form>
</body>

</html>