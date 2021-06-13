<?php

    $originalFile = file_get_contents("http://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/item.json");
    $information = json_decode($originalFile, true);
    print_r( $information["data"]["3031"]);

