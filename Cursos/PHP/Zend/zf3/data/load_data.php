<?php
/**
 * Created by PhpStorm.
 * User: silva
 * Date: 22/04/18
 * Time: 02:41
 */

$db = new PDO('sqlite:' . realpath(__DIR__) . '/blog.db');
$fh = fopen(__DIR__ . '/schema.sql', 'r');
while ($line = fread($fh, 4096)) {
    $db->exec($line);
}

fclose($fh);