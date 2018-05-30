<?php
/**
 * Created by PhpStorm.
 * User: silva
 * Date: 22/04/18
 * Time: 01:22
 */

namespace Blog;

class Module
{

    public function getConfig()
    {
        return include __DIR__ . '/../config/module.config.php';
    }

}
