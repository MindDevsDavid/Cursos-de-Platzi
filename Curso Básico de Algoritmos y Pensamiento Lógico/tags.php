<?php
  
   $originalFile = file_get_contents("http://ddragon.leagueoflegends.com/cdn/11.12.1/data/es_ES/champion.json");
   $information = json_decode($originalFile, true);

  // Array
  echo 'Llaves del Array Primario :';
  print_r( array_keys( $information ) );

  // Keys : 'type', 'format', 'version', y 'data'
  echo 'Las KEYS para "data" son los nombres de los campeones :';
  print_r( array_keys( $information[ 'data' ] ) );

  // Las KEYS para 'data' son los nombres de los Campeones

  // Keys de Akali: 'version', 'id', 'key', 'name', 'title', 'blurb', 'info', 'image', 'tags', 'partype', 'stas'
  echo 'Las KEYS para Akali son :';
  print_r( array_keys( $information[ 'data' ][ 'Akali' ] ) );

  echo "echo 1";
  print_r( $information[ 'data' ][ 'Akali' ]['tags'] );

  $tags = array_column( $information[ 'data' ], 'tags', 'id' );

  print_r( $tags );
  //print_r( array_column( $tags, 0 ) );
  //print_r( array_keys( $tags, array( 'Assassin' ) ) );

  $filtered = array_filter( $information[ 'data' ], function( $value, $key ) {
    
    return( in_array("Assassin", $value[ 'tags' ] ) );
  }, ARRAY_FILTER_USE_BOTH );

  //$tags = array_column( $filtered, 'tags', 'id' );

  //print_r( $tags );
  print_r( array_keys( $filtered ) );
