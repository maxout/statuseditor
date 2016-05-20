<?php
class Shopware_Plugins_Backend_Statuseditor_Bootstrap extends Shopware_Components_Plugin_Bootstrap
{
    public function getLabel()
    {
        return 'Bestell und Zahlungstatus Editor';
    }

    public function getInfo()
    {
        return array(
            'version' => '1.0.0',
            'autor' => 'Shyim',
            'label' => $this->getLabel(),
            'support' => 'https://github.com/shyim/statuseditor',
            'link' => 'https://github.com/shyim/statuseditor'
        );
    }

    public function install()
    {
        $this->createMenuItem(array(
            'label' => 'Bestell und Zahlungstatus Übersicht',
            'controller' => 'Statuseditor',
            'class' => 'sprite-table',
            'action' => 'Index',
            'active' => 1,
            'parent' => $this->Menu()->findOneBy(['label' => 'Einstellungen'])
        ));

        $this->registerController('Backend', 'Statuseditor');

        return true;
    }
}