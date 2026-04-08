<?php
$f = fopen('err.txt', 'r');
if ($f) {
    for ($i = 0; $i < 30; $i++) {
        $line = fgets($f);
        if ($line === false) break;
        // strip null bytes (UTF-16)
        $line = str_replace("\0", "", $line);
        echo $line;
    }
    fclose($f);
}
