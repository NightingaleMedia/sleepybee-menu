<?php
    $url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyu85xIQj8N-3tG6uDkql7Azd9CKxta9YkG_PLgl5r1WAgUkMrTFO2WQfzL3sPqb0k2GcOMfs7L-QF/pub?output=csv&gid=492911777";
    header("Content-type: text/csv");
    echo file_get_contents($url);
?>