<?php

namespace Fab\Wordpress\Model;

!defined( 'WPINC ' ) or die;

/**
 * Abstract class for wordpress model
 *
 * @package    Fab
 * @subpackage Fab\Includes\Wordpress
 */


class Taxonomy extends Model {

    /**
     * @access   protected
     * @var      object    $type    Post type for taxonomies
     */
    protected $type;

    /**
     * Metadata constructor
     */
    public function __construct(){
        $this->WP = new \Fab\Wordpress\Helper();
    }

    /**
     * Method to model
     * @return void
     */
    public function build(){
        $this->WP->register_taxonomy($this->name, $this->type->getName() , $this->args);
    }

    /**
     * @return array
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param array $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

}