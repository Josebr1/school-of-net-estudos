<?php
/**
 * Created by PhpStorm.
 * User: silva
 * Date: 22/04/18
 * Time: 01:23
 */

namespace Blog;

use Zend\ServiceManager\Factory\InvokableFactory;

return [

    'controllers' => [
        'factories' => [
            Controller\BlogController::class => InvokableFactory::class
        ]
    ],

    'router' => [
        'routes' => [
            'blog' => [
                'type' => 'literal',
                'options' => [
                    'route' => '/blog',
                    'defaults' => [
                        'controller' => Controller\BlogController::class,
                        'action' => 'index'
                    ]
                ]
            ]
        ]
    ],

    'view_manager' => [
        'template_path_stack' => [
            'blog' => __DIR__ . "/../view"
        ]
    ]

    /*'view_manager' => [
    'display_not_found_reason' => true,
    'display_exceptions' => true,
    'doctype' => 'HTML5',
    'template_map' => [
        'blog/blog/blog' => __DIR__ . '/../view/blog/blog/index.phtml',
    ],
    'template_path_stack' => [
        __DIR__ . '/../view',
    ],
    ],*/
];