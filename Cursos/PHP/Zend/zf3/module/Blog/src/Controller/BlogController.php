<?php
/**
 * Created by PhpStorm.
 * User: silva
 * Date: 22/04/18
 * Time: 01:46
 */

namespace Blog\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class BlogController extends AbstractActionController
{
    public function indexAction()
    {

        $posts = [
            ['title' => 'Post 1', 'content' => 'Content 1'],
            ['title' => 'Post 2', 'content' => 'Content 2'],
            ['title' => 'Post 3', 'content' => 'Content 3'],
            ['title' => 'Post 4', 'content' => 'Content 4'],
            ['title' => 'Post 5', 'content' => 'Content 5'],
            ['title' => 'Post 6', 'content' => 'Content 6'],
        ];

        return new ViewModel([
            'posts' => $posts
        ]);
    }
}