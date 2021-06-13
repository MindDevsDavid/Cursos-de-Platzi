<?php

//Tipos de campeon: Mage, Fighter, Assassin, Tank, Support y Marksman
$champType = 'Assassin';
//Tipos de dificultad: de 1 a 10
$ChampDifficulty = '1';
    
    function champRecommedation ( $champType = "", $ChampDifficulty = "" ) {
     $originalFile = file_get_contents("http://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_ES/champion.json");
     $information = json_decode($originalFile, true);

     switch($champType){
      case "Mage":
        
        $type = "mago";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
       $filteredChampionsByType = array_keys( $filtered );
      
      break;
      case "Fighter":

        $type = "luchador";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
        $filteredChampionsByType = array_keys( $filtered );  

      break;
      case "Assassin":

        $type = "asesino";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
        $filteredChampionsByType = array_keys( $filtered );
        
      break;
      case "Tank":
         
        $type = "tanque";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
        $filteredChampionsByType = array_keys( $filtered );

      break;
      case "Support":

        $type = "soporte";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
        $filteredChampionsByType = array_keys( $filtered );      
       
      break;
      case "Marksman":

        $type = "tirador";
        $tags = array_column( $information[ 'data' ], 'tags', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $champType;
          return( in_array($champType, $value[ 'tags' ] ) );
        }, ARRAY_FILTER_USE_BOTH );

        $filteredChampionsByType = array_keys( $filtered ); 

      break;
      default:
      echo "Tu campeon deseado no concuerda con ninguno por el momento!!";
    }
//---------------------------- Toma todos los numeros dentro de info y no de difficulty--------------------------
    switch($ChampDifficulty){
      case "1":

        $numberOfDifficulty = "1";
        $info = array_column( $information[ 'data' ], 'info', 'id' );
        $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
          global $ChampDifficulty;
          return( in_array($ChampDifficulty, $value[ 'info' ] ) );
        }, ARRAY_FILTER_USE_BOTH );
      
       $filteredChampionsByDifficulty = array_keys( $filtered );

      break;
    }

    $filteredChampionsByDifficulty = implode(", ", $filteredChampionsByDifficulty);
    echo "\nElegiste la dificultad ".$numberOfDifficulty.".\nLos campeones perfectos para ti segun su dificultad son ".$filteredChampionsByDifficulty.".\n\n";

    $filteredChampionsByType = implode (", ", $filteredChampionsByType);
    echo "\nElegiste el tipo ".$type.".\nLos campeones perfectos para ti segun su tipo son ".$filteredChampionsByType.".\n\n";


  //  $searchT = implode(", ", $searchT);

  //  echo "ELegiste el tipo ".$type."\n Los camepones perfectos para ti son ".$searchT.".\n\n";
     
    
    }
    champRecommedation($champType, $ChampDifficulty);
?>
