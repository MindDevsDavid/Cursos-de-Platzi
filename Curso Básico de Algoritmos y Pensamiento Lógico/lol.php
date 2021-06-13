<?php

function recomendacionCampeon ($tipoC = '', $dificultadC = '') {
   $tipo = array ("Aatrox" => "luchador",
                  "Ahri" =>"mago",
                  "Akali" => "asesino",
                  "Alistar" => "tanque",
                  "Amumu" => "tanque",
                  "Anivia" => "mago",
                  "Annie" => "mago",
                  "Aphelios" => "tirador",
                  "Ashe" => "tirador",
                  "Aurelion Sol" => "mago",
                  "Azir" => "mago",
                  "Bardo" => "soporte",
                  "Blitzcrank" => "tanque",
                  "Brand" => "mago",
                  "Braum" => "soporte",
                  "Caitlyn" => "tirador",
                  "Camille" => "luchador",
                  "Cassiopeia" => "mago",
                  "Cho'gath" => "tanque",
                  "Corki" => "tirador",
                  "Darius" => "luchador",
                  "Diana" => "luchador",
                  "Dr. Mundo" => "tanque",
                  "Draven" => "tirador",
                  "Ekko" => "asesino",
                  "Elise" => "mago",
                  "Evelynn" => "asesino",
                  "Ezreal" => "tirador",
                  "Fiddlesticks" => "mago",
                  "Fiora" => "luchador",
                  "Fizz" => "asesino",
                  "Galio" => "luchador",
                  "Gangplank" => "luchador",
                  "Garen" => "luchador",
                  "Gnar" => "luchador",
                  "Gragas" => "luchador",
                  "Graves" => "tirador",
                  "Hecarim" => "luchador",
                  "Heimerdinger" => "mago",
                  "Illaoi" => "luchador",
                  "Irelia" => "luchador", 
                  "Ivern" => "soporte",
                  "Janna" => "soporte",
                  "Jarvan IV" => "tanque",
                  "Jax" => "luchador",
                  "Jayce" => "luchador",
                  "Jhin" => "tirador",
                  "Jinx" => "tirador",
                  "Kai'sa" => "tirador",
                  "Kalista" => "tirador",
                  "Karma" => "mago",
                  "Karthus" => "mago",
                  "Kassadin" => "asesino",
                  "Katarina" => "asesino",
                  "Kayle" => "luchador",
                  "Kayn" => "luchador",
                  "Kennen" => "mago",
                  "Kha'zix" => "asesino",
                  "Kindred" => "tirador",
                  "Kled" => "luchador",
                  "Kog'maw" => "tirador",
                  "Leblanc" => "asesino",
                  "Lee sin" => "luchador",
                  "Leona" => "tanque",
                  "Lillia" => "luchador",
                  "Lissandra" => "mago",
                  "Lucian" => "tirador",
                  "Lulu" => "soporte",
                  "Lux" => "mago",
                  "Mestro Yi" => "asesino",
                  "Malphite" => "tanque",
                  "Malzahar" => "mago",
                  "Maokai" => "tanque",
                  "Miss Fortune" => "tirador",
                  "Mordekaiser" => "luchador",
                  "Morgana" => "mago",
                  "Nami" => "soporte",
                  "Nasus" => "luchador",
                  "Nautilus" => "tanque",
                  "Neeko" => "mago",
                  "Nidalee" => "asesino",
                  "Nocturne" => "asesino",
                  "Nunu y Willump" => "tanque",
                  "Olaf" => "luchador",
                  "Orianna" => "mago",
                  "Ornn" => "tanque",
                  "Pantheon" => "luchador",
                  "Poppy" => "tanque",
                  "Pyke" => "soporte",
                  "Qiyana" => "asesino",
                  "Quinn" => "tirador",
                  "Rakan" => "soporte",
                  "Rammus" => "tanque",
                  "Rek'sai" => "luchador",
                  "Rell" => "tanque",
                  "Renekton" => "luchador",
                  "Rengar" => "asesino",
                  "Riven" => "luchador",
                  "Rumble" => "luchador",
                  "Ryze" => "mago",
                  "Samira" => "tirador",
                  "Sejuani" => "tanque" ,
                  "Senna" => "tirador",
                  "Seraphine" => "mago",
                  "Sett" => "luchador",
                  "Shaco" => "asesino",
                  "Shen" => "tanque",
                  "Shyvana" => "luchador",
                  "Singed" => "tanque",
                  "Sion" => "tanque",
                  "Sivir" => "tirador",
                  "Skarner" => "luchador",
                  "Sona" => "soporte",
                  "Soraka" => "soporte",
                  "Swain" => "mago",
                  "Sylas" => "mago",
                  "Syndra" => "mago",
                  "Tahm Kench" => "soporte",
                  "Taliyah" => "mago",
                  "Talon" => "asesino",
                  "Taric" => "soporte",
                  "Teemo" => "tirador",
                  "Thresh" => "soporte",
                  "Tristana" => "tirador",
                  "Trundle" => "luchador",
                  "Tryndamere" => "luchador",
                  "Twisted Fate" => "mago",
                  "Twtich" => "tirador",
                  "Udyr" => "luchador",
                  "Urgot" => "luchador",
                  "Varus" => "tirador",
                  "Vayne" => "tirador",
                  "Veigar" => "mago",
                  "Vel'koz" => "mago",
                  "Vi" => "luchador",
                  "Viego" => "asesino",
                  "Viktor" => "mago",
                  "Vladimir" => "mago",
                  "Volibear" => "luchador",
                  "Warwick" => "luchador",
                  "Wukong" => "luchador",
                  "Xayah" => "tirador",
                  "Xerath" => "mago",
                  "Xin Zhao" => "luchador",
                  "Yasuo" => "luchador",
                  "Yone" => "asesino",
                  "Yorick" => "luchador",
                  "Yummi" => "soporte",
                  "Zac" => "tanque",
                  "Zed" => "asesino",
                  "Ziggs" => "mago",
                  "Zilean" => "soporte",
                  "Zoe" => "mago",
                  "Zyra" => "mago"
                );
   $dificultad = array ("Aatrox" => "moderada",
                        "Ahri" => "moderada",
                        "Akali" => "moderada",
                        "Alistar" => "moderada",
                        "Amumu" => "baja",
                        "Anivia" => "alta",
                        "Annie" => "moderada",
                        "Aphelios" => "alta",
                        "Ashe" => "moderada",
                        "Aurelion Sol" => "moderada",
                        "Azir" => "alta",
                        "Bardo" => "alta",
                        "Blitzcrank" => "moderada",
                        "Brand" => "moderada",
                        "Braum" => "baja",
                        "Caitlyn" => "moderada",
                        "Camille" => "moderada",
                        "Cassiopeia" => "alta",
                        "Cho'gath" => "moderada",
                        "Corki" => "moderada",
                        "Darius" => "baja",
                        "Diana" => "moderada",
                        "Dr. Mundo" => "moderada",
                        "Draven" => "alta",
                        "Ekko" => "alta",
                        "Elise" => "alta",
                        "Evelynn" => "alta",
                        "Ezreal" => "moderada",
                        "Fiddlesticks" => "alta",
                        "Fiora" => "baja",
                        "Fizz" => "moderada",
                        "Galio" => "moderada",
                        "Gangplank" => "alta",
                        "Garen" => "moderada",
                        "Gnar" => "alta",
                        "Gragas" => "moderada",
                        "Graves" => "baja",
                        "Hecarim" => "moderad",
                        "Heimerdinger" => "alta",
                        "Illaoi" => "moderada",
                        "Irelia" => "moderada",
                        "Ivern" => "moderada",
                        "Janna" => "moderada",
                        "Jarvan IV" => "moderada",
                        "Jax" => "moderaada",
                        "Jayce" => "moderada",
                        "Jhin" => "moderada",
                        "Jinx" => "moderada",
                        "Kai'sa" => "moderada",
                        "Kalista" => "moderada",
                        "Karma" => "moderada",
                        "Karthus" => "moderada",
                        "Kassadin" => "alta",
                        "Katarina" => "alta",
                        "Kayle" => "moderada",
                        "Kayn" => "alta",
                        "Kennen" => "moderada",
                        "Kha'zix" => "moderada",
                        "Kindred" => "moderada",
                        "Kled" => "moderada",
                        "Kog'maw" => "moderada",
                        "Leblanc" => "alta",
                        "Lee sin" => "moderada",
                        "Leona" => "moderada",
                        "Lillia" => "alta",
                        "Lissandra" => "moderada",
                        "Lucian" => "moderada",
                        "Lulu" => "moderada",
                        "Lux" => "moderada",
                        "Maestro Yi" => "moderada",
                        "Malphite" => "baja",

                    );



switch($tipoC) {
    case "mago":
        $searchT = $tipo;
    break;
    case "luchador":
        $searchT = $tipo;
    break;
    case "asesino":
        $searchT = $tipo;
    break;
    case "tanque":
        $searchT = $tipo;
    break;
    case "soporte":
        $searchT = $tipo;
    break;
    case "tirador":
        $searchT = $tipo;
    break;
    default:
        echo "Tu campeon deseado no concuerda con ninguno por el momento!!";
    }

switch($dificultadC) {
    case "baja":
        $searchD = $dificultad;
    break;
    case "moderada":
        $searchD = $dificultad;
    break;
    case "alta":
        $searchD = $dificultad;
    break;
    default:
        echo "Tu campeon deseado no concuerda con ninguno por el momento!!";
}
    $total = (array_count_values($tipo));
    $campeonT = array_keys($searchT, $tipoC);
    $campeonD = array_keys($searchD, $dificultadC);
    $perfecto = array_intersect($campeonD, $campeonT);
 // print_r(array_count_values($tipo));
 // var_dump($dificultadC);
   
    $campeonD = implode(", ", $campeonD);
    $campeonT = implode(", ", $campeonT);
    $perfecto = implode(", ", $perfecto);

    echo "\nHay un total de ". array_sum($total). " campeones\n";
    echo "\nElegiste el tipo ".$tipoC.".\nLos campeones perfectos para ti segun su tipo son ".$campeonT.".\n\n";
    echo "\nElegiste la dificultad ".$dificultadC.".\nLos campeones perfectos para ti segun su dificultad son ".$campeonD.".\n\n";
    echo "\nSegun el tipo y la dificultad seleccionadas, el campeon perfecto para ti es ".$perfecto."\n";
  
}

recomendacionCampeon( $argv[1], $argv[2] );
//recomendacionCampeon( "luchador", "alta" );

 
//$akali = array(
//    'nombre' => 'Akali',
//    'nick' => 'La asesina sombria',
//    'tipo' => 'asesino',
//    'dificultad' => 'moderada',
//    'edad' => 20
//);
?>







