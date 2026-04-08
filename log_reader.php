<?php
$content = file_get_contents('err.txt');
$content = mb_convert_encoding($content, 'UTF-8', mb_detect_encoding($content));
echo substr($content, 0, 1500);
