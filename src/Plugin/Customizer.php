<?php

namespace Fab\Controller;

!defined( 'WPINC ' ) or die;

/**
 * Initiate plugins
 *
 * @package    Fab
 * @subpackage Fab/Controller
 */

class Customizer extends Base {

    /**
     * @access   protected
     * @var      array    $panels    Lists of panels object created
     */
    protected $panels;

    /**
     * @access   protected
     * @var      array    $sections    Lists of sections object created
     */
    protected $sections;

    /**
     * @access   protected
     * @var      array    $settings    Lists of settings
     */
    protected $settings;

    /**
     * @access   protected
     * @var      array    $controls    Lists of controls
     */
    protected $controls;

    /**
     * Costumizer constructor.
     * @param    object   $plugin     Plugin configuration
     * @return void
     */
    public function __construct($plugin){
        parent::__construct($plugin);
        $this->panels = [];
        $this->sections = [];
        $this->settings = [];
        $this->controls = [];
    }

    /**
     * @return array
     */
    public function getPanels()
    {
        return $this->panels;
    }

    /**
     * @param array $panels
     */
    public function setPanels($panels)
    {
        $this->panels = $panels;
    }

    /**
     * @return array
     */
    public function getSections()
    {
        return $this->sections;
    }

    /**
     * @param array $sections
     */
    public function setSections($sections)
    {
        $this->sections = $sections;
    }

    /**
     * @return array
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * @param array $settings
     */
    public function setSettings($settings)
    {
        $this->settings = $settings;
    }

}