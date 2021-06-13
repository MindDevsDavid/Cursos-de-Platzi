<?php
  
   $originalFile = file_get_contents("http://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_ES/champion.json");
   $information = json_decode($originalFile, true);

  // Array
  echo 'Llaves del Array Primario :';
 // print_r( $information ) ;
  $info = array_column( $information[ 'data' ], 'info', 'id' );
  print_r ($information);
  