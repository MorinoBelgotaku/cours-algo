<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <style>
        div {
            padding: 5px 0px;
        }
    </style>
</head>

<body>
    <div>
        <?php
        // Hello World
        $hellworld = "Hello World<br>";
        $hello = "Hello";
        $world = "World<br>";

        echo "Hello World<br>";
        echo $hellworld;
        echo $hello . " " . $world;
        ?>
    </div>
    <div>
        <?php
        $prenom = "Bruno";
        $nom = "Morin";
        $age = 21;

        echo "Je m'appelle $prenom et j'ai $age ans <br>";
        echo "Je m'appelle {$prenom} et j'ai {$age} ans <br>";

        $message = "Je suis $prenom $nom, j'ai $age ans <br>";
        $message2 = "Je suis {$prenom} {$nom}, j'ai {$age} ans <br>";
        $message3 = `Je suis $prenom $nom, j\'ai $age ans`;

        echo $message;
        echo $message2;
        echo $message3;

        ?>
    </div>
    <div>
        <?php
        $name = "John";
        $lastName = "Travolta";
        echo $name . " " . $lastName . "<br>"; // Outputs John Travolta

        $a = "Hello";
        $a .= " John!";
        echo $a; // Outputs Hello John!
        ?>
    </div>
</body>

</html>